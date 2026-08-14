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

export interface ExperienceProject {
  name: string
  status: string
  description: string
  responsibilities: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  projects?: ExperienceProject[]
  description?: string[]
  technologies: string[]
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
    title: "Data Analyst | SQL Developer | Freelance AI Evaluation & Benchmark Developer",
    roles: [
      "Freelance AI Evaluation & Benchmark Developer @ Airdawgs",
      "Data Analyst",
      "SQL Developer",
      "Python Enthusiast"
    ],
    location: "Palasa, Srikakulam, Andhra Pradesh, India",
    email: "tagoreronanki77@gmail.com",
    phone: "+91 9390017456",
    github: "https://github.com/Tag0305",
    linkedin: "https://linkedin.com/in/tagoreronanki",
    portfolio: "https://data-analyst-resume-portfolio.vercel.app",
    summary: "I am an Electronics and Communication Engineering student at IIIT Manipur with hands-on experience in SQL, Python, business analytics, predictive modelling and data pipeline development. Currently working as a Freelance AI Evaluation & Benchmark Developer with Airdawgs, having completed Project Terminus and currently working on Project Sentinel."
  },
  experience: [
    {
      title: "Freelance AI Evaluation & Benchmark Developer",
      company: "Airdawgs · Freelance",
      period: "July 2026 – Present",
      projects: [
        {
          name: "PROJECT TERMINUS",
          status: "COMPLETED",
          description: "Worked on AI benchmark task authoring, evaluation, validation, and technical quality assurance for coding and machine-learning tasks.",
          responsibilities: [
            "Created and reviewed deterministic technical benchmark tasks",
            "Worked with Docker-based execution environments and automated test suites",
            "Developed and validated oracle solutions and scoring rubrics",
            "Tested edge cases, invalid inputs, recovery behavior, and reproducibility",
            "Debugged verifier, runtime, Docker, packaging, and task-quality issues",
            "Reviewed task difficulty and ensured requirements were clearly specified",
            "Worked with Python, Go, Java, Bash, Docker, Linux, Git, and automated testing workflows"
          ]
        },
        {
          name: "PROJECT SENTINEL",
          status: "CURRENT",
          description: "Currently working on technical AI evaluation and coding-task review, focusing on task validity, test coverage, instruction quality, and reliable model evaluation.",
          responsibilities: [
            "Review technical coding and machine-learning tasks for correctness and validity",
            "Evaluate whether task requirements are properly covered by tests",
            "Check whether tested behavior is clearly documented in task instructions",
            "Review fail-to-pass tests and regression protection",
            "Review oracle solutions against the documented requirements",
            "Evaluate task difficulty and technical edge cases",
            "Identify overly prescriptive instructions or accidental solution leakage",
            "Improve task specifications while preserving fairness and intended scope",
            "Review implementation dependencies, edge cases, and validation behavior"
          ]
        }
      ],
      technologies: ["Python", "Docker", "Go", "Java", "Bash", "Linux", "Git", "Project Terminus", "Project Sentinel", "AI Benchmark Evaluation", "Oracle Verification", "Automated Testing"]
    }
  ],
  skills: {
    programming: ["Python", "SQL (PostgreSQL, SQLite, MySQL)", "HTML/CSS"],
    libraries: ["Pandas", "NumPy", "Scikit-Learn", "Seaborn", "Matplotlib", "NLTK"],
    bi: ["Power BI", "Tableau", "Excel (Pivot Tables, VLOOKUP)"],
    tools: ["Git", "GitHub", "pgAdmin", "Jupyter Notebooks", "VS Code", "Docker", "Linux"],
    concepts: [
      "Relational Database Design",
      "ETL/ELT Pipeline Automation",
      "Cohort Retention Analysis",
      "Customer Lifetime Value (CLV)",
      "Predictive Modeling",
      "Data Wrangling & Cleaning",
      "Descriptive & Statistical Analysis",
      "Deterministic AI Benchmarking"
    ]
  },
  projects: [
    {
      title: "SQL E-Commerce Business Analytics",
      category: "PostgreSQL & SQL Analytics",
      problem: "Unstructured e-commerce transaction histories required quantitative analysis to identify high-value customer segments, calculate retention, and pinpoint products driving repeat purchases.",
      approach: "Designed and loaded a multi-table relational database with custom constraints. Applied advanced SQL techniques including CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins.",
      result: "Identified product categories with >40% repeat purchase rates to support marketing and inventory decisions.",
      technologies: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "Schema Design"],
      githubUrl: "https://github.com/Tag0305/sql-ecommerce-analytics",
      detailedPoints: [
        "Designed and loaded a multi-table PostgreSQL database simulating e-commerce transaction histories with custom constraints.",
        "Optimized SQL queries using CTEs, window functions (LEAD, LAG, DENSE_RANK), and self-joins to analyze monthly growth and cohort retention.",
        "Identified product categories with 40%+ repeat purchase rates to support marketing and inventory decisions through business KPI models."
      ]
    },
    {
      title: "Customer Churn Analytics & Predictive Modeling",
      category: "Python & Machine Learning",
      problem: "A subscription business faced customer churn without knowing which operational metrics or contract terms were driving cancellations.",
      approach: "Preprocessed a 1,000-customer dataset, conducted thorough exploratory data analysis (EDA), engineered domain features, and evaluated machine learning classifiers.",
      result: "Achieved 88.0% prediction accuracy with Random Forest and identified contract length & tenure as top retention indicators.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/Tag0305/python-customer-churn-prediction",
      detailedPoints: [
        "Performed exploratory data analysis on a 1,000-customer dataset to identify patterns associated with customer cancellations.",
        "Engineered and scaled features, then compared Logistic Regression and Random Forest models to achieve 88.0% prediction accuracy.",
        "Analyzed feature importance and found contract terms and subscription tenure to be the strongest retention indicators."
      ]
    },
    {
      title: "End-to-End Cloud Data Pipeline Simulation",
      category: "Python & Data Engineering",
      problem: "Manual market data collection was prone to errors, lacking real-time stream ingestion, automated transformations, and structured staging.",
      approach: "Developed an automated Python ingestion script that fetches market asset data via REST APIs, streams it to a local warehouse, and executes dbt-style SQL CTE transformations.",
      result: "Automated ingestion of live asset records, calculating volume-to-market-cap ratios and generating automated report outputs.",
      technologies: ["Python", "SQLite", "BigQuery", "SQL", "dbt-style CTEs"],
      githubUrl: "https://github.com/Tag0305/cloud-data-pipeline-simulation",
      detailedPoints: [
        "Built an automated Python pipeline to ingest real-time market asset data through an API.",
        "Loaded data into a SQLite/BigQuery-style warehouse and applied dbt-style CTE transformations for cleaning, partitioning, and market analysis.",
        "Developed an automated reporting dashboard script to present live data metrics."
      ]
    }
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology (IIIT) Manipur",
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      location: "Senapati, Manipur",
      period: "Nov. 2022 – May 2026"
    },
    {
      institution: "Narayana Junior College",
      degree: "MPC (Intermediate / Class 12)",
      location: "Andhra Pradesh, India",
      period: "Class of 2022"
    },
    {
      institution: "Narayana School",
      degree: "SSC (10th Standard)",
      location: "Andhra Pradesh, India",
      period: "Class of 2020"
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
