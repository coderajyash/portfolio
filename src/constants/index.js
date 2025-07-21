export const HERO_CONTENT = `I’m Yash Raj Singh, a Computer Science graduate (M.Sc. from Queen Mary University of London, 2023-2024) with a passion
for coding and problem-solving. I worked as a Software Engineer at IndiaMART for over a year, where I improved API response
times by 60% using NOSQL database caching and cut manual audit work by 50% with automation.Furthermore, I’m skilled in
Python, API Development, Web Crawling and SQL, and I’ve built projects like a social media backend and an AI calculator for handwritten
math.`;

export const EXPERIENCES = [
  {
    year: "June 2022 - September 2023",
    role: "Analytics Engineer",
    company: "IndiaMart",
    description: `Designed and built automated ETL pipelines using Python-based web scraping to ingest multilingual data from 10+ sources, stored raw data in Azure Data Lake, processed it using Azure Databricks, and served cleaned datasets to ML teams for training a translation model.
| Worked closely with product and QA teams to gather data requirements and validate ML output quality and system performance.
| Wrote complex SQL queries to aggregate KPIs, extract insights, and validate ML outputs across large datasets.
| Developed a regional language transliteration algorithm that improved the audit process by automating key tasks, resulting in a 50% reduction in manual audit workload.`,
    technologies: ["Python", "SQL","Spark","Cassandra", "RabbitMQ"],
  },
  {
    year: "March 2022 - May 2022",
    role: "Internship",
    company: "IndiaMart",
    description: `Processed large datasets using Python libraries, with experience
handling semi-structured data formats (JSON, CSV, XML) in distributed
environments.|Used PySpark to clean and transform large scraped datasets for
analysis, improving processing efficiency and supporting data
preparation for ML tasks.`,
    technologies: ["Python", "Selenium", "Cron", "MySQL","Kibana"],
  },
  {
    year: "June 2021 - July 2021",
    role: "Internship",
    company: "Robust Results",
    description: `I created Python scripts to generate insightful reports on key metrics, such as error rates and traffic patterns, aiding in system monitoring.|To ensure the pipeline ran smoothly, I optimized it for performance and set up automated scheduling using Cron jobs, allowing for regular data updates.`,
    technologies: ["Python", "Pandas", "NumPy", "SQLAlchemy"],
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
    title: "Docker for Developers",
    provider: "Educative",
    link: 'https://www.educative.io/verify-certificate/GZjlABCO64VjvYxGmFrN34jYWvK9cm',
    coursework: ["Docker", "DevOps"]
  },
  {
    title: "Problem Solving (Intermediate)",
    provider: "HackerRank",
    link: 'https://www.hackerrank.com/certificates/8e10b03da0ec',
    coursework: ["Data Structures and Algorithms", "HashMaps, Stacks and Queues", "Optimal Solution"],
  },
  {
    title: "Programming with JavaScript",
    provider: "Coursera - Meta",
    link: 'https://coursera.org/share/0ac9973c3d346276fbba63638216d7a5',
    coursework: ["Creating and manipulating objects and arrays", "Using DOM and events","Writing unit tests using Jest"],
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
  address: "India",
  number: "+91-9773861502 , +44-7407842367",
  email: "yashrajsingh.dg@gmail.com",
};
