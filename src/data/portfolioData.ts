export interface PersonalInfo {
  name: string
  title: string
  roles: string[]
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  portfolio: string
  summary: string
}

export interface Project {
  title: string
  category: string
  problem: string
  approach: string
  result: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  detailedPoints: string[]
}

export interface Education {
  institution: string
  degree: string
  field?: string
  location: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
  status: string
  link?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export const portfolioData = {
  personalInfo: {
    name: "Ronanki Tagore",
    title: "Data Analyst | SQL Developer | Python & Business Intelligence Enthusiast",
    roles: [
      "Data Analyst",
      "SQL Developer",
      "Python Enthusiast",
      "Business Intelligence Enthusiast"
    ],
    location: "Palasa, Srikakulam, Andhra Pradesh, India",
    email: "tagoreronanki77@gmail.com",
    phone: "+91 9390017456",
    github: "https://github.com/Tag0305",
    linkedin: "https://linkedin.com/in/tagoreronanki",
    portfolio: "https://tagore-ronanki.netlify.app",
    summary: "I am an Electronics and Communication Engineering student at IIIT Manipur with hands-on experience in SQL, Python, business analytics, predictive modelling and data pipeline development. I enjoy transforming complex datasets into clear, practical insights that support business decisions."
  },
  skills: {
    programming: ["Python", "SQL", "PostgreSQL", "SQLite", "MySQL", "HTML", "CSS"],
    libraries: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "NLTK"],
    bi: ["Power BI", "Tableau", "Microsoft Excel", "Pivot Tables", "VLOOKUP"],
    tools: ["Git", "GitHub", "pgAdmin", "Jupyter Notebook", "VS Code"],
    concepts: [
      "Relational Database Design",
      "ETL and ELT",
      "Data Cleaning",
      "Data Wrangling",
      "Cohort Retention Analysis",
      "Customer Lifetime Value",
      "Predictive Modelling",
      "Statistical Analysis",
      "Descriptive Analysis"
    ]
  },
  projects: [
    {
      title: "SQL E-Commerce Business Analytics",
      category: "PostgreSQL & SQL Analytics",
      problem: "Unstructured e-commerce transaction histories required quantitative analysis to identify high-value customer segments, calculate retention, and pinpoint products driving repeat purchases.",
      approach: "Designed and populated a multi-table relational database with custom constraints. Applied advanced SQL techniques including CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins.",
      result: "Identified product categories with >40% repeat purchase rates and formulated monthly MoM revenue growth models.",
      technologies: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "Schema Design"],
      githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio",
      detailedPoints: [
        "Designed and populated a multi-table relational database simulating e-commerce transaction histories.",
        "Enforced custom database integrity constraints and structured primary/foreign keys.",
        "Utilized CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins for complex analytics.",
        "Analysed monthly growth and customer cohort retention month-over-month.",
        "Identified key product categories achieving over 40% repeat purchase rates.",
        "Translated raw database structures into business KPI executive dashboards."
      ]
    },
    {
      title: "Customer Churn Analytics and Predictive Modelling",
      category: "Python & Machine Learning",
      problem: "A subscription business faced customer churn without knowing which operational metrics or contract terms were driving cancellations.",
      approach: "Preprocessed a 1,000-customer dataset, conducted thorough exploratory data analysis (EDA), engineered domain features, and evaluated machine learning classifiers.",
      result: "Achieved 88% prediction accuracy with Random Forest and identified contract length & tenure as top retention indicators.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio",
      detailedPoints: [
        "Analysed a dataset of 1,000 subscription customers using Pandas and Seaborn.",
        "Performed thorough exploratory data analysis to identify cancellation patterns.",
        "Engineered and scaled numerical and categorical features for optimal model performance.",
        "Compared Logistic Regression and Random Forest classification algorithms.",
        "Achieved 88% prediction accuracy on test splits.",
        "Extracted feature importances, pinpointing contract terms and subscription tenure as primary retention factors."
      ]
    },
    {
      title: "End-to-End Cloud Data Pipeline Simulation",
      category: "Python & Data Engineering",
      problem: "Manual market data collection was prone to errors, lacking real-time stream ingestion, automated transformations, and structured staging.",
      approach: "Developed an automated Python ingestion script that fetches market asset data via REST APIs, streams it to a local warehouse, and executes dbt-style SQL CTE transformations.",
      result: "Automated ingestion of live asset records, calculating volume-to-market-cap ratios and generating automated report outputs.",
      technologies: ["Python", "SQLite", "SQL", "dbt-style CTEs", "REST APIs"],
      githubUrl: "https://github.com/Tag0305/data-analyst-resume-portfolio",
      detailedPoints: [
        "Created an automated Python ingestion pipeline fetching real-time market asset metrics via REST APIs.",
        "Loaded streaming-style raw data into a local warehouse (SQLite staging tables).",
        "Simulated enterprise cloud workflows (SQLite/BigQuery structure).",
        "Applied modular dbt-style CTE SQL transformations to clean, filter, and partition raw data.",
        "Modelled market-cap tiers and volume-to-market-cap financial ratios.",
        "Created an automated reporting dashboard script to export analytics outputs."
      ]
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology Manipur",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      location: "Senapati, Manipur, India",
      period: "Nov 2022 – May 2026"
    },
    {
      institution: "Narayana Junior College",
      degree: "MPC, Intermediate / Class 12",
      field: "Mathematics, Physics, Chemistry",
      location: "Andhra Pradesh, India",
      period: "Completed 2022"
    },
    {
      institution: "Narayana School",
      degree: "SSC / Class 10",
      field: "General Education",
      location: "Andhra Pradesh, India",
      period: "Completed 2020"
    }
  ],
  certifications: [
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      status: "Verified Credential",
      link: "https://www.hackerrank.com/certificates/summary"
    },
    {
      name: "Python Intermediate",
      issuer: "HackerRank",
      status: "Verified Credential",
      link: "https://www.hackerrank.com/certificates/summary"
    },
    {
      name: "Complete Data Analyst Bootcamp",
      issuer: "Udemy",
      status: "In Progress"
    },
    {
      name: "Deep Learning",
      issuer: "NPTEL (IITs)",
      status: "Completed"
    },
    {
      name: "Joy of Computing Using Python",
      issuer: "NPTEL (IITs)",
      status: "Completed"
    },
    {
      name: "Digital Image Processing",
      issuer: "NPTEL (IITs)",
      status: "Completed"
    }
  ]
}
