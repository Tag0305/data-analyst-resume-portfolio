export interface Project {
  title: string
  category: string
  problem: string
  approach: string
  result: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  detailedPoints: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  period: string
  location: string
  details?: string
}

export interface Certification {
  name: string
  issuer: string
  status: "Completed" | "In Progress"
  link?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface PortfolioData {
  personalInfo: {
    name: string
    title: string
    tagline: string
    introduction: string
    location: string
    email: string
    phone: string
    github: string
    linkedin: string
    portfolio: string
  }
  skills: SkillGroup[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Ronanki Tagore",
    title: "Data Analyst | SQL Developer | Python and BI Enthusiast",
    tagline: "Converting raw data into useful, structured business insights.",
    introduction: "I am an Electronics and Communication Engineering student with hands-on experience in SQL, Python, business analytics, predictive modelling and dashboard development. I enjoy transforming complex datasets into clear insights that support practical business decisions.",
    location: "Palasa, Srikakulam, Andhra Pradesh, India",
    email: "tagoreronanki77@gmail.com",
    phone: "+91 9390017456",
    github: "https://github.com/Tag0305",
    linkedin: "https://linkedin.com/in/tagoreronanki",
    portfolio: "https://tagore-ronanki.netlify.app"
  },
  skills: [
    {
      category: "Programming and Databases",
      skills: ["Python", "SQL", "PostgreSQL", "SQLite", "MySQL", "HTML", "CSS"]
    },
    {
      category: "Libraries and Frameworks",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "NLTK"]
    },
    {
      category: "Analytics and Business Intelligence",
      skills: ["Power BI", "Tableau", "Microsoft Excel", "Pivot Tables", "VLOOKUP", "Jupyter Notebook"]
    },
    {
      category: "Tools and Platforms",
      skills: ["Git", "GitHub", "pgAdmin", "VS Code"]
    },
    {
      category: "Concepts",
      skills: [
        "Relational Database Design",
        "ETL and ELT Pipeline Automation",
        "Data Cleaning and Wrangling",
        "Cohort Retention Analysis",
        "Customer Lifetime Value",
        "Predictive Modelling",
        "Descriptive Analysis",
        "Statistical Analysis"
      ]
    }
  ],
  projects: [
    {
      title: "SQL E-Commerce Business Analytics",
      category: "SQL & Relational Databases",
      problem: "Extracting actionable customer behavior and sales growth patterns from raw, unstructured transactional logs.",
      approach: "Designed a multi-table normalized PostgreSQL database schema with custom integrity constraints. Developed advanced analytical SQL queries using CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins.",
      result: "Mapped customer cohort retention, tracked monthly growth, and isolated product categories displaying repeat purchase rates over 40% to model business KPIs.",
      technologies: ["PostgreSQL", "SQL", "Database Design", "pgAdmin"],
      githubUrl: "https://github.com/Tag0305/sql-ecommerce-analytics",
      detailedPoints: [
        "Designed and populated a multi-table relational database simulating e-commerce transaction histories.",
        "Implemented strict primary key, foreign key, and custom check constraints to guarantee database referential integrity.",
        "Authored complex analytical SQL scripts featuring CTEs, window functions, and self-joins.",
        "Analyzed month-over-month (MoM) sales growth and calculated rolling user cohorts.",
        "Identified product categories with over 40% repeat purchase rates to optimize inventory restocking.",
        "Translated raw transactional tables into high-level commercial metrics (AOV, CLV, Churn, Retention)."
      ]
    },
    {
      title: "Customer Churn Analytics and Predictive Modelling",
      category: "Python & Machine Learning",
      problem: "Identifying key risk factors and predicting customer cancellations to reduce service churn.",
      approach: "Conducted exploratory data analysis (EDA) in Python. Preprocessed, scaled, and encoded variables, then trained and tuned Logistic Regression and Random Forest classifier models.",
      result: "Achieved 88% prediction accuracy. Isolated contract terms and subscription tenure as the most critical determinants of retention.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/Tag0305/python-customer-churn-prediction",
      detailedPoints: [
        "Analyzed churn patterns on a sample of 1,000 customers using Seaborn and Matplotlib visualization.",
        "Cleaned datasets, handled missing values, and encoded categorical features for modeling.",
        "Engineered numerical scaling and trained Logistic Regression and Random Forest Classifiers.",
        "Achieved 88.0% prediction accuracy on test subsets.",
        "Extracted model feature importances to highlight primary churn indicators.",
        "Formulated data-driven customer loyalty incentives based on retention risks."
      ]
    },
    {
      title: "End-to-End Cloud Data Pipeline Simulation",
      category: "Data Engineering",
      problem: "Automating ingestion and processing of volatile streaming-style asset data in a structured, local replica of a modern data warehouse.",
      approach: "Built a Python-based data ingestion script calling public web APIs. Ingested raw JSON feeds, loaded them into local SQLite tables, and processed ELT schemas using dbt-style modular CTE SQL scripts.",
      result: "Successfully structured, cleaned, and partitioned asset records, outputting automated summary reports on market cap tiers and volume ratios.",
      technologies: ["Python", "SQLite", "dbt-style SQL", "BigQuery Simulation", "APIs"],
      githubUrl: "https://github.com/Tag0305/cloud-data-pipeline-simulation",
      detailedPoints: [
        "Created an automated Python data-ingestion pipeline fetching asset data from public web APIs.",
        "Designed a local staging layer storing raw transactional outputs.",
        "Simulated database staging workflows equivalent to Google Cloud BigQuery.",
        "Executed dbt-style SQL scripts containing CTEs for cleaning and schema formatting.",
        "Partitioned and analyzed market cap tiers and volume-to-market-cap ratio metrics.",
        "Authored an automated dashboard report script to print system status and KPIs in the terminal."
      ]
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology Manipur",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      period: "November 2022 -- May 2026",
      location: "Senapati, Manipur",
      details: "B.Tech candidate with ECE focus, applying engineering mathematics and systems logic to data science."
    },
    {
      institution: "Narayana Junior College",
      degree: "MPC (Intermediate / Class 12)",
      field: "Mathematics, Physics, Chemistry",
      period: "Class of 2022",
      location: "Andhra Pradesh, India"
    },
    {
      institution: "Narayana School",
      degree: "SSC (10th Standard)",
      field: "General Curriculum",
      period: "Class of 2020",
      location: "Andhra Pradesh, India"
    }
  ],
  certifications: [
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      status: "Completed",
      link: "https://www.hackerrank.com/certificates/c234a974911d" // Standard or general verified structure
    },
    {
      name: "Python Intermediate",
      issuer: "HackerRank",
      status: "Completed",
      link: "https://www.hackerrank.com/certificates/60a920be534e"
    },
    {
      name: "Complete Data Analyst Bootcamp",
      issuer: "Udemy",
      status: "In Progress"
    },
    {
      name: "Deep Learning",
      issuer: "NPTEL",
      status: "Completed"
    },
    {
      name: "Joy of Computing Using Python",
      issuer: "NPTEL",
      status: "Completed"
    },
    {
      name: "Digital Image Processing",
      issuer: "NPTEL",
      status: "Completed"
    }
  ]
}
