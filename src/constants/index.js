export const HERO_CONTENT = `As a dedicated software engineer with a strong foundation in full-stack development, I bring a combination of technical expertise and a passion for solving complex problems. With experience in developing high-performance applications, optimizing API response times, and managing robust data processes, I have consistently delivered solutions that enhance both user experience and operational efficiency. Skilled in a variety of programming languages and frameworks, I thrive in collaborative environments, where I can contribute to innovative solutions that push boundaries.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2022 - September 2023",
    role: "Software Engineer",
    company: "IndiaMart",
    description: `Enhanced the search query correction process (spell correction, language detection, translation) by
implementing a caching mechanism with Flask, CassandraDB and RabbitMQ, reducing response times
significantly by asynchronously storing corrected queries for rapid retrieval.
• Built scalable web scraping pipelines to extract structured data from large online sources (1000+ pages),
preparing it for training ML models in language detection and translation.
• Worked with LLM models like ChatGPT and Bard API to generate English translations for a local search
string, building an audit dataset to evaluate the performance of in-house translation models.
• Designed an interactive calibration tool for auditing ML model outputs, collaborating with multiple teams
to ensure accurate evaluations and seamless integration into workflows.`,
    technologies: ["Python", "Flask","React.js", "Cassandra", "RabbitMQ"],
  },
  {
    year: "March 2022 - May 2022",
    role: "Internship",
    company: "IndiaMart",
    description: `I developed a web crawler using Selenium to aggregate data from various web sources, enabling audits of model performance. • Optimized SQL queries to extract and analyze large datasets (over 1 crore rows) from multiple tables, improving performance for complex data retrieval and ensuring efficient data analysis.`,
    technologies: ["Python", "Selenium", "Cron", "MySQL","Kibana"],
  },
  {
    year: "June 2021 - July 2021",
    role: "Internship",
    company: "Robust Results",
    description: `I created Python scripts to generate insightful reports on key metrics, such as error rates and traffic patterns, aiding in system monitoring. • To ensure the pipeline ran smoothly, I optimized it for performance and set up automated scheduling using Cron jobs, allowing for regular data updates.`,
    technologies: ["Python", "Pandas", "NumPy", "SQLAlchemy"],
  }
];

export const EDUCATIONS = [
  {
    year: "2023 - 2024",
    degree: "Master of Science in Computer Science",
    university: "Queen Mary University of London, UK",
    grade: `CGPA: 6.8/10`,
    coursework: ["Logic in Computer Science | ", "Semi-structured Data Engineering | ", "Security and Authentication | ", "Machine Learning | ","Interactive System Design"],
  },
  {
    year: "2018 - 2022",
    degree: "Bachelor of Technology in Information Technology",
    university: "AKTU, India",
    grade: `CGPA: 8.03/10`,
    coursework: ["Algorithm design | ", "Data Structures | ","Database Management | ", "Operating System | ", "Computer Networks | ","Object Oriented Programming | ","Software Project Management"],
  },
  {
    year: "2016 - 2017",
    degree: "A-levels",
    university: "City Montessori School, India",
    grade: `CGPA: 9.1/10`,
    coursework: ["Mathematics |", "Computer Application | ", "Physics | ", "Chemistry"],
  }
];

export const CERTIFICATIONS = [
  {
    title: "Programming with JavaScript",
    provider: "Coursera - Meta",
    link: 'https://coursera.org/share/0ac9973c3d346276fbba63638216d7a5',
    coursework: ["Creating and manipulating objects and arrays", "Using DOM and events","Writing unit tests using Jest"],
  },
  {
    title: "Python for Data Science, AI & Development",
    provider: "Coursera - IBM",
    link: 'https://coursera.org/share/3afca392d6194a242cacf553d07393f5',
    coursework: ["Strong understanding of Variables, Data Structures, Loops, Functions, and OOP", " Pandas, NumPy, Beautiful Soup", "Regular Expressions"],
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
    title: "AI-Powered Handwritten Expression Calculator",
    category: "AI and Frontend Development",
    link: 'https://calc-fe-math.vercel.app/',
    description: "An advanced calculator application built using ReactJS for the frontend and Python FastAPI for the backend. Integrating AI-driven handwriting recognition for mathematical computations. Utilizes a canvas to interpret and process hand-drawn mathematical expressions. Leverages Google’s Gemini Flash API for accurate mathematical expression recognition and problem-solving. Advanced Computation Capabilities: Supports algebraic equations (1x + 2y = ?), physics based problems (e.g., relative velocity calculations), and more.",
    technologies: ["ReactJs", "Tailwind CSS", "Python", "FastAPI", "Gemini"],
  },
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    link: 'https://portfolio-yashraj.vercel.app/',
    description: "The portfolio website is a modern, visually appealing, and highly responsive platform built using React for seamless UI development, Tailwind CSS for sleek and customizable styling, and Framer Motion for smooth animations. The site showcases personal projects, technical skills, and a professional profile. With a minimalist design, the site adapts beautifully to various devices, offering a smooth navigation experience.",
    technologies: ["ReactJs", "Tailwind CSS", "Framer"],
  },
  {
    title: "Search Space Reduction in Fashion E-Commerce",
    category: "Data Analysis and Backend Development",
    link: 'https://github.com/coderajyash/Msc-Project',
    description: "Implemented custom NER models using SpaCy to extract brand names from user queries and a Logistic Regression classifier to categorize search terms, reducing search space effectively. Integrated models with Elasticsearch to refine search results dynamically, enhancing efficiency and reducing irrelevant product listings for users. Built a Flask-based web application featuring both simple and advanced search modes, leading to a measurable reduction in search result volume and improved user experience.",
    technologies: ["Pandas", "Numpy", "SpaCy", "Elasticsearch", "Flask"],
  }
];

export const CONTACT = {
  address: "India",
  number: "+919773861502",
  email: "yashrajsingh.dg@gmail.com",
};
