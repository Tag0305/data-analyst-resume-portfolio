/* app.js - Portfolio Interactivity & Live KPI Analytics Engine */

// ==========================================
// 1. SQL Query Repository (Displays in Code Block)
// ==========================================
const SQL_QUERIES = {
    rpr: `WITH product_purchasers AS (
    SELECT 
        oi.product_id,
        p.product_name,
        c.category_name,
        o.customer_id,
        COUNT(DISTINCT o.order_id) AS purchase_count
    FROM order_items oi
    JOIN orders o ON oi.order_id = o.order_id
    JOIN products p ON oi.product_id = p.product_id
    JOIN categories c ON p.category_id = c.category_id
    GROUP BY oi.product_id, p.product_name, c.category_name, o.customer_id
),
product_stats AS (
    SELECT 
        product_id,
        product_name,
        category_name,
        COUNT(DISTINCT customer_id) AS total_unique_buyers,
        SUM(CASE WHEN purchase_count > 1 THEN 1 ELSE 0 END) AS repeat_buyers
    FROM product_purchasers
    GROUP BY product_id, product_name, category_name
)
SELECT 
    product_id,
    product_name,
    category_name,
    total_unique_buyers,
    repeat_buyers,
    ROUND((repeat_buyers::DECIMAL / NULLIF(total_unique_buyers, 0)) * 100, 2) AS repeat_purchase_rate_pct
FROM product_stats
ORDER BY repeat_purchase_rate_pct DESC;`,

    cohort: `WITH customer_cohorts AS (
    SELECT customer_id, DATE_TRUNC('month', join_date)::DATE AS cohort_month
    FROM customers
),
customer_orders AS (
    SELECT DISTINCT customer_id, DATE_TRUNC('month', order_date)::DATE AS order_month
    FROM orders
),
cohort_size AS (
    SELECT cohort_month, COUNT(DISTINCT customer_id) AS total_cohort_customers
    FROM customer_cohorts
    GROUP BY cohort_month
),
retention_periods AS (
    SELECT 
        cc.cohort_month,
        (EXTRACT(YEAR FROM co.order_month) - EXTRACT(YEAR FROM cc.cohort_month)) * 12 +
        (EXTRACT(MONTH FROM co.order_month) - EXTRACT(MONTH FROM cc.cohort_month)) AS period_month,
        COUNT(DISTINCT co.customer_id) AS active_customers
    FROM customer_cohorts cc
    JOIN customer_orders co ON cc.customer_id = co.customer_id
    GROUP BY cc.cohort_month, co.order_month
)
SELECT 
    r.cohort_month,
    cs.total_cohort_customers AS cohort_size,
    r.period_month AS months_since_join,
    r.active_customers,
    ROUND((r.active_customers::DECIMAL / cs.total_cohort_customers) * 100, 2) AS retention_rate_pct
FROM retention_periods r
JOIN cohort_size cs ON r.cohort_month = cs.cohort_month
ORDER BY r.cohort_month, r.period_month;`,

    mom: `WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', o.order_date)::DATE AS sales_month,
        c.category_name,
        ROUND(SUM(oi.quantity * oi.unit_price * (1 - oi.discount)), 2) AS current_revenue
    FROM order_items oi
    JOIN orders o ON oi.order_id = o.order_id
    JOIN products p ON oi.product_id = p.product_id
    JOIN categories c ON p.category_id = c.category_id
    GROUP BY DATE_TRUNC('month', o.order_date), c.category_name
),
sales_with_lag AS (
    SELECT 
        sales_month,
        category_name,
        current_revenue,
        LAG(current_revenue) OVER(PARTITION BY category_name ORDER BY sales_month) AS previous_revenue
    FROM monthly_sales
)
SELECT 
    sales_month,
    category_name,
    current_revenue,
    COALESCE(previous_revenue, 0.00) AS previous_revenue,
    ROUND(((current_revenue - previous_revenue) / previous_revenue) * 100, 2) AS mom_growth_rate_pct
FROM sales_with_lag
ORDER BY category_name, sales_month;`,

    clv: `SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.country,
    COUNT(DISTINCT o.order_id) AS total_orders,
    ROUND(SUM(oi.quantity * oi.unit_price * (1 - oi.discount)), 2) AS total_spend,
    ROUND(AVG(oi.quantity * oi.unit_price * (1 - oi.discount)), 2) AS avg_order_value,
    CASE 
        WHEN SUM(oi.quantity * oi.unit_price * (1 - oi.discount)) >= 400 THEN 'Platinum (VIP)'
        WHEN SUM(oi.quantity * oi.unit_price * (1 - oi.discount)) >= 150 THEN 'Gold (High Value)'
        ELSE 'Silver (Standard)'
    END AS customer_tier
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.country
ORDER BY total_spend DESC;`,

    ranking: `WITH country_category_sales AS (
    SELECT 
        o.ship_country,
        c.category_name,
        SUM(oi.quantity) AS total_quantity_sold,
        ROUND(SUM(oi.quantity * oi.unit_price * (1 - oi.discount)), 2) AS total_sales_revenue
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p ON oi.product_id = p.product_id
    JOIN categories c ON p.category_id = c.category_id
    GROUP BY o.ship_country, c.category_name
),
ranked_categories AS (
    SELECT 
        ship_country,
        category_name,
        total_quantity_sold,
        total_sales_revenue,
        DENSE_RANK() OVER(PARTITION BY ship_country ORDER BY total_sales_revenue DESC) AS rank
    FROM country_category_sales
)
SELECT 
    ship_country,
    category_name,
    total_quantity_sold,
    total_sales_revenue,
    rank
FROM ranked_categories
WHERE rank <= 2
ORDER BY ship_country, rank;`
};

// ==========================================
// 2. Query Explanations
// ==========================================
const QUERY_DESCS = {
    rpr: "Identifies which specific products customer groups buy repeatedly. Consumable items (coffee, tea) lead loyalty rates, whereas hardware items (gaming keyboards) are single sales.",
    cohort: "Cohorts grouped by the calendar month a customer signed up. We track what percentage of customers return to purchase in Month 1, 2, and 3 after joining. Highlights platform stickiness.",
    mom: "Tracks relative changes in category revenues compared to the previous month. Vital for determining which verticals are experiencing accelerating demand.",
    clv: "Calculates the total customer lifetime revenue, average order size, and aggregates users into Platinum, Gold, or Silver loyalty tiers based on absolute commercial value.",
    ranking: "Ranks the top 2 product categories in each destination country by revenue. Provides target information to regional distribution warehouses."
};

// ==========================================
// 3. Mock Dataset Representing PostgreSQL Output Data
// ==========================================
const ANALYTICS_DATA = {
    rpr: {
        labels: ['Arabica Coffee (1kg)', 'Coffee Mug', 'Matcha Green Tea', 'Gaming Keyboard', 'USBC Docking Stn', 'Headphones', 'Cotton T-Shirt', 'Mesh Office Chair'],
        datasets: [
            {
                label: 'Repeat Purchase Rate (%)',
                data: [66.67, 50.00, 40.00, 33.33, 25.00, 20.00, 20.00, 0.00],
                backgroundColor: 'rgba(16, 185, 129, 0.65)',
                borderColor: '#10b981',
                borderWidth: 2,
                yAxisID: 'y'
            },
            {
                label: 'Total Unique Buyers',
                data: [6, 6, 5, 3, 4, 5, 5, 2],
                type: 'line',
                borderColor: '#06b6d4',
                borderWidth: 3,
                pointBackgroundColor: '#06b6d4',
                fill: false,
                yAxisID: 'y1'
            }
        ],
        kpis: [
            { label: "Top Product RPR", value: "66.67%", sub: "Arabica Coffee" },
            { label: "High Loyalty Items", value: "3 Products", sub: ">40% Repeat Rate" },
            { label: "Median Repeat Rate", value: "37.5%", sub: "Across Catalog" }
        ],
        chartType: 'bar'
    },
    cohort: {
        labels: ['Month 0 (Join)', 'Month 1', 'Month 2', 'Month 3'],
        datasets: [
            {
                label: 'Jan Cohort (3 Customers)',
                data: [100, 33.3, 66.7, 33.3],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            },
            {
                label: 'Feb Cohort (3 Customers)',
                data: [100, 66.7, 33.3, 0.0],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            },
            {
                label: 'Mar Cohort (3 Customers)',
                data: [100, 33.3, 33.3, null],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }
        ],
        kpis: [
            { label: "Avg Cohort Size", value: "3 Customers", sub: "Monthly Enrollees" },
            { label: "Month 1 Retention", value: "44.4%", sub: "Overall Avg" },
            { label: "Active Buyers", value: "12 Customers", sub: "Database Total" }
        ],
        chartType: 'line'
    },
    mom: {
        labels: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026'],
        datasets: [
            {
                label: 'Coffee & Gourmet',
                data: [59.96, 54.97, 104.95, 74.96, 54.98, 59.97],
                borderColor: '#10b981',
                fill: false,
                borderWidth: 2
            },
            {
                label: 'Electronics',
                data: [239.97, 0.00, 59.99, 149.98, 89.99, 89.99],
                borderColor: '#06b6d4',
                fill: false,
                borderWidth: 2
            },
            {
                label: 'Apparel',
                data: [0.00, 0.00, 54.97, 19.99, 55.97, 0.00],
                borderColor: '#f59e0b',
                fill: false,
                borderWidth: 2
            }
        ],
        kpis: [
            { label: "Peak Sales Month", value: "$314.94", sub: "Electronics (Jan)" },
            { label: "Baseline Revenue", value: "Coffee Beans", sub: "Most consistent MoM" },
            { label: "MoM Growth Peak", value: "+150%", sub: "Electronics (Apr)" }
        ],
        chartType: 'line'
    },
    clv: {
        labels: ['Aarav Sharma', 'Emily Smith', 'Lucas Müller', 'Liam Johnson', 'James Miller', 'Sophia Brown'],
        datasets: [{
            label: 'Total Lifetime Spend ($)',
            data: [519.88, 389.93, 259.98, 149.95, 179.98, 99.99],
            backgroundColor: [
                'rgba(16, 185, 129, 0.8)', // Plat
                'rgba(16, 185, 129, 0.8)', // Plat
                'rgba(6, 182, 212, 0.8)',  // Gold
                'rgba(148, 163, 184, 0.8)', // Silver
                'rgba(6, 182, 212, 0.8)',  // Gold
                'rgba(148, 163, 184, 0.8)'  // Silver
            ],
            borderWidth: 1,
            borderColor: '#ffffff'
        }],
        kpis: [
            { label: "Platinum Tiers", value: "2 Users", sub: "Spend >= $300" },
            { label: "Gold Tiers", value: "4 Users", sub: "Spend >= $150" },
            { label: "Average Lifetime Spend", value: "$210.82", sub: "Per Customer" }
        ],
        chartType: 'bar'
    },
    ranking: {
        labels: ['India', 'USA', 'Germany', 'UK', 'Canada'],
        datasets: [
            {
                label: 'Electronics Rev ($)',
                data: [89.99, 309.95, 259.98, 89.99, 99.99],
                backgroundColor: 'rgba(6, 182, 212, 0.7)'
            },
            {
                label: 'Coffee & Gourmet Rev ($)',
                data: [259.88, 54.97, 14.99, 59.96, 0.00],
                backgroundColor: 'rgba(16, 185, 129, 0.7)'
            }
        ],
        kpis: [
            { label: "Top Region", value: "India", sub: "$389.85 Combined Rev" },
            { label: "Electronics Hub", value: "USA", sub: "$309.95 Electronics Rev" },
            { label: "Primary Gourmet Market", value: "India", sub: "Highest coffee consumption" }
        ],
        chartType: 'bar'
    }
};

// Global variables
let analyticsChartInstance = null;

// ==========================================
// 4. SQL Syntax Highlighter Engine (Added)
// ==========================================
function highlightSQL(sqlText) {
    // Escape HTML special characters
    let html = sqlText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    
    // Highlight Single-line Comments
    html = html.replace(/(--.*)/g, '<span class="sql-comment">$1</span>');
    
    // Highlight String Literals (e.g. 'Month-to-month')
    html = html.replace(/('[^']*')/g, '<span class="sql-str">$1</span>');
    
    // Highlight SQL Functions
    const sqlFuncs = [
        'SUM', 'COUNT', 'AVG', 'ROUND', 'LAG', 'DENSE_RANK', 
        'DATE_TRUNC', 'CONCAT', 'NULLIF', 'EXTRACT', 'COALESCE'
    ];
    sqlFuncs.forEach(func => {
        const regex = new RegExp(`\\b(${func})\\b`, 'gi');
        html = html.replace(regex, '<span class="sql-func">$1</span>');
    });
    
    // Highlight SQL Keywords
    const sqlKeywords = [
        'WITH', 'SELECT', 'FROM', 'JOIN', 'LEFT JOIN', 'ON', 'WHERE', 
        'GROUP BY', 'ORDER BY', 'AS', 'OVER', 'PARTITION BY', 'CASE', 
        'WHEN', 'THEN', 'ELSE', 'END', 'AND', 'DESC', 'ASC', 'OR', 'NOT', 
        'NULL', 'ROW_NUMBER', 'RANK', 'DECIMAL', 'INTEGER', 'VARCHAR', 
        'SERIAL', 'PRIMARY KEY', 'REFERENCES', 'CHECK', 'DEFAULT'
    ];
    sqlKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g'); // Case-sensitive matching
        html = html.replace(regex, '<span class="sql-keyword">$1</span>');
    });
    
    return html;
}

// ==========================================
// 5. Chart Renderer Logic
// ==========================================
function renderSQLChart(queryKey) {
    const chartContext = document.getElementById('liveAnalyticsChart').getContext('2d');
    const dataConfig = ANALYTICS_DATA[queryKey];
    
    // Destroy existing chart to prevent memory leaks and overlapping canvas
    if (analyticsChartInstance) {
        analyticsChartInstance.destroy();
    }
    
    // Custom chart configurations
    let options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
                    font: { family: 'Inter', size: 12 }
                }
            }
        },
        scales: {
            x: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: {
                    color: getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim(),
                    font: { family: 'Inter', size: 11 }
                }
            },
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: {
                    color: getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim(),
                    font: { family: 'Inter', size: 11 }
                }
            }
        }
    };
    
    // Custom axis for dual y-axis in RPR
    if (queryKey === 'rpr') {
        options.scales = {
            ...options.scales,
            y: {
                type: 'linear',
                position: 'left',
                title: { display: true, text: 'RPR Rate (%)', color: '#10b981' },
                ticks: { color: '#10b981' },
                grid: { color: 'rgba(255, 255, 255, 0.05)' }
            },
            y1: {
                type: 'linear',
                position: 'right',
                title: { display: true, text: 'Unique Buyers Count', color: '#06b6d4' },
                ticks: { color: '#06b6d4' },
                grid: { drawOnChartArea: false } // only want grid lines for left axis
            }
        };
    }
    
    // Render Chart
    analyticsChartInstance = new Chart(chartContext, {
        type: dataConfig.chartType,
        data: {
            labels: dataConfig.labels,
            datasets: dataConfig.datasets
        },
        options: options
    });
    
    // Update KPI panels
    updateKPIs(dataConfig.kpis);
}

function updateKPIs(kpis) {
    const kpiContainer = document.getElementById('kpiLiveGrid');
    kpiContainer.innerHTML = '';
    
    kpis.forEach(kpi => {
        const itemHtml = `
            <div class="kpi-live-item">
                <span class="label">${kpi.label}</span>
                <span class="value">${kpi.value}</span>
                <span class="sublabel">${kpi.sub}</span>
            </div>
        `;
        kpiContainer.insertAdjacentHTML('beforeend', itemHtml);
    });
}

// ==========================================
// 6. DOM Initialization & Event Handlers
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Set initial SQL query lab contents with syntax highlighting
    const initialQueryKey = 'rpr';
    document.getElementById('sqlCodeDisplay').innerHTML = highlightSQL(SQL_QUERIES[initialQueryKey]);
    renderSQLChart(initialQueryKey);
    
    // Handle SQL Query Tabs
    const tabButtons = document.querySelectorAll('.sql-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            const selectedBtn = e.currentTarget;
            selectedBtn.classList.add('active');
            
            const queryKey = selectedBtn.dataset.query;
            
            // Update documentation header
            let titleText = selectedBtn.textContent.replace(/^\d+\s+/, '').trim();
            document.getElementById('queryTitle').textContent = `${titleText} Query`;
            document.getElementById('queryDesc').textContent = QUERY_DESCS[queryKey];
            
            // Update code display with syntax highlighting
            document.getElementById('sqlCodeDisplay').innerHTML = highlightSQL(SQL_QUERIES[queryKey]);
            
            // Re-render chart
            renderSQLChart(queryKey);
        });
    });

    // Code Copy Functionality (ignores HTML syntax tags)
    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        const codeDisplay = document.getElementById('sqlCodeDisplay');
        const codeText = codeDisplay.textContent; // textContent automatically strips HTML span tags!
        navigator.clipboard.writeText(codeText).then(() => {
            const copyBtn = document.getElementById('copyCodeBtn');
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            setTimeout(() => {
                copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // Theme Toggle
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    toggleThemeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', nextTheme);
        
        // Update Icon
        const icon = toggleThemeBtn.querySelector('i');
        if (nextTheme === 'light') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
        
        // Re-render current chart to refresh colors from theme properties
        const activeTab = document.querySelector('.sql-tab-btn.active');
        if (activeTab) {
            renderSQLChart(activeTab.dataset.query);
        }
    });

    // Print Preview Toggle Buttons
    const interactiveMode = document.getElementById('interactiveMode');
    const printMode = document.getElementById('printMode');
    const togglePrintPreviewBtn = document.getElementById('togglePrintPreviewBtn');
    const exitPrintPreviewBtn = document.getElementById('exitPrintPreviewBtn');
    const triggerPrintBtn = document.getElementById('triggerPrintBtn');
    const appHeader = document.getElementById('appHeader');

    togglePrintPreviewBtn.addEventListener('click', () => {
        interactiveMode.classList.add('hidden');
        appHeader.classList.add('no-print');
        printMode.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    exitPrintPreviewBtn.addEventListener('click', () => {
        printMode.classList.add('hidden');
        interactiveMode.classList.remove('hidden');
        appHeader.classList.remove('no-print');
        window.scrollTo(0, 0);
    });

    triggerPrintBtn.addEventListener('click', () => {
        window.print();
    });

    // Scroll active navigation tracking
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Scroll to Top Button Controller (Added)
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Fade-in Scroll Animations Observer (Added)
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // triggers slightly before entering viewport
    });

    document.querySelectorAll('.fade-in-up').forEach(element => {
        fadeObserver.observe(element);
    });
});
