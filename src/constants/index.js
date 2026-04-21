export const HERO_CONTENT = `With an MSc in Computer Science and hands-on industry experience, I sit at the crossroads of data engineering, backend development, and AI. I've shipped transformer-based search systems that moved the needle on CTR, built fully offline LLM-powered RAG pipelines, and automated data quality workflows that eliminated hours of manual overhead. Whether it's designing ETL pipelines from scratch, optimising API performance under load, or integrating LLMs into production workflows - I bring engineering precision and a data-first mindset to every challenge. Proficient in Python, SQL, PySpark, Azure, Databricks, Snowflake, FastAPI, and LangChain, I thrive in fast-paced environments where the goal is clear and the path isn't. Enough of the tech side of me, I am also a die hard anime fan and passionate gamer.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Domain Expert (Data Analytics)",
    company: "Outlier AI",
    description: `Designed scoring rubrics for AI training tasks, ensuring consistent and accurate annotation across
datasets.
| Identified logical flaws, runtime risks, edge-case failures, and inefficient query structures in
AI-generated code`,
    technologies: ["Data Analysis", "SQL", "Python", "LLM Prompting"],
  },
  {
    year: "October 2024 - February 2025",
    role: "Customer Analyst",
    company: "Golds Gym UK",
    description: `Analyzed customer membership trends and churn patterns using Excel PivotTables, VLOOKUP, and
conditional logic to identify factors influencing member retention and drop-off.
| Performed cohort analysis using Excel to evaluate the effectiveness of promotions and
loyalty programs in improving long-term member value.`,
    technologies: ["Data Analysis", "SQL", "Tableau"],
  },
  {
    year: "March 2022 - September 2023",
    role: "Software Engineer (Big Data)",
    company: "IndiaMart",
    description: `Implemented a distributed caching mechanism using a NoSQL database and
asynchronous message queues, improving API response time by 40%.
| Developed transformer-based query intent classification models to enhance search
ranking quality, resulting in a 12% improvement in click-through rate (CTR).
| Created automated web scraping pipelines using Python, BeautifulSoup, and Selenium to collect
and preprocess bilingual datasets (500,000+ records) for NLP model training.
| Designed modular, testable backend components by enforcing separation of concerns,
improving maintainability and enabling independent testing of business logic.
| Automated data quality checks and validation workflows by integrating LLM capabilities,
significantly reducing manual operational overhead and accelerating audit cycles.`,
    technologies: ["Python", "SQL", "PySpark","Azure", "RabbitMQ"],
  }
];

export const EDUCATIONS = [
  {
    year: "2023 - 2024",
    degree: "Master of Science in Computer Science",
    university: "Queen Mary University of London, UK",
    grade: `GPA: 3.7/4.0`,
    coursework: ["Logic in Computer Science | ", "Semi-structured Data Engineering | ", "Security and Authentication | ", "Machine Learning | ","Interactive System Design"],
  },
  {
    year: "2018 - 2022",
    degree: "Bachelor of Technology in Information Technology",
    university: "AKTU, India",
    grade: `GPA: 4.0/4.0`,
    coursework: ["Algorithm design | ", "Data Structures | ","Database Management | ", "Operating System | ", "Computer Networks | ","Object Oriented Programming | ","Software Project Management"],
  },
  {
    year: "2016 - 2017",
    degree: "A-levels/12th",
    university: "City Montessori School, India",
    grade: `GPA: 4.0/4.0`,
    coursework: ["Mathematics |", "Computer Application | ", "Physics | ", "Chemistry"],
  }
];

export const CERTIFICATIONS = [
  {
    title: "Associate Data Engineer",
    provider: "DataCamp",
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/4a4fd049711b9d62b665a2476b99fea899f10e3f',
    coursework: ["Data Engineering", "Data Pipelines", "Data Warehousing"],
  },
  {
    title: "Problem Solving (Intermediate)",
    provider: "HackerRank",
    link: 'https://www.hackerrank.com/certificates/8e10b03da0ec',
    coursework: ["Data Structures and Algorithms", "HashMaps, Stacks and Queues", "Optimal Solution"],
  },
  {
    title: "Claude Code in Action",
    provider: "Anthropic",
    link: 'https://verify.skilljar.com/c/2jnqrbcxpswr',
    coursework: ["Agentic AI", "Efficient Prompting","MCP"],
  },
  {
    title: "Machine Learning with Python",
    provider: "Coursera - IBM",
    link: 'https://coursera.org/share/65b6c912935f854adcac6f7042e77292',
    coursework: ["Linear Regression, Decision Trees, SVM","Evaluation using metrics, cross-validation, and hyperparameter tuning"],
  },
];

export const PROJECTS = [
    {
    title: "PDFOracle - Local RAG PDF Chat Application",
    category: "AI Development",
    link: 'https://github.com/coderajyash/RAG-pdf-chat',
    description:"• Built a local RAG application to query PDF documents using natural language with HuggingFace embeddings, Qdrant vector store, and Llama 3.2 via Ollama - zero API cost. • Implemented a semantic search pipeline using all-MiniLM-L6-v2 embeddings and cosine similarity to retrieve context-relevant document chunks for LLM-grounded answers.• Designed a two-phase LangChain pipeline covering PDF ingestion, text chunking, vector embedding, retrieval, and prompt-based answer generation using LCEL chain composition.• Replaced all paid cloud AI services with a fully offline, privacy-first stack using open-source models, eliminating external API dependencies entirely.",
    technologies: ["LangChain", "Docker", "Python", "VectorDB"],
  },
  {
    title: "Django Social Media Backend with RESTful API",
    category: "Backend Development",
    link: 'https://github.com/coderajyash/backend',
    description: "• Designed and implemented a Django-based RESTful API for a social media app enabling core functionalities like user authentication (JWT), posts, likes, and comments, leveraging Django REST Framework and PostgreSQL for efficient data management.• Utilized Django ORM to design relational database models and migrations for posts, comments, and profiles, improving query performance and supporting complex social media interactions.• Configured Pytest to write and execute comprehensive test cases for Django models and viewsets, achieving robust API reliability and reducing bugs in production.• Dockerized the Django application using Docker and Docker Compose, and automated deployment to AWS EC2 via GitHub Actions, establishing a CI/CD pipeline for efficient and scalable cloud hosting.",
    
    technologies: ["Django", "Docker", "PyTest", "Postgresql", "CI/CD"],
  },
  {
    title: "AI-Powered Handwritten Expression Calculator",
    category: "AI and Web Development",
    link: 'https://calc-fe-math.vercel.app/',
    description: "• An advanced calculator application built using ReactJS for the frontend and Python FastAPI for the backend. Integrating AI-driven handwriting recognition for mathematical computations.• Utilizes a canvas to interpret and process hand-drawn mathematical expressions.• Leverages Google’s Gemini Flash API for accurate mathematical expression recognition and problem-solving. Advanced Computation Capabilities: Supports algebraic equations (1x + 2y = ?), physics based problems (e.g., relative velocity calculations), and more.",
    technologies: ["ReactJs", "Tailwind CSS", "Python", "FastAPI", "Gemini"],
  },
  {
    title: "Search Space Reduction in Fashion E-Commerce",
    category: "Machine Learning and Web Development",
    link: 'https://github.com/coderajyash/Msc-Project',
    description: "• Implemented custom NER models using SpaCy to extract brand names from user queries and a Logistic Regression classifier to categorize search terms, reducing search space effectively.• Integrated models with Elasticsearch to refine search results dynamically, enhancing efficiency and reducing irrelevant product listings for users.• Built a Flask-based web application featuring both simple and advanced search modes, leading to a measurable reduction in search result volume and improved user experience.",
    technologies: ["Pandas", "Numpy", "SpaCy", "Elasticsearch", "Flask"],
  }
];

export const CONTACT = {
  address: "UK | India",
  number: "+91-9773861502 , +44-7407842367",
  email: "yashrajsingh.dg@gmail.com",
};
