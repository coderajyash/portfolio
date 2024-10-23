export const HERO_CONTENT = `As a dedicated software engineer with a strong foundation in full-stack development, I bring a combination of technical expertise and a passion for solving complex problems. With experience in developing high-performance applications, optimizing API response times, and managing robust data processes, I have consistently delivered solutions that enhance both user experience and operational efficiency. Skilled in a variety of programming languages and frameworks, I thrive in collaborative environments, where I can contribute to innovative solutions that push boundaries.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2022 - September 2023",
    role: "Software Engineer",
    company: "IndiaMart",
    description: `I achieved upto 60% improvement in API response times, minimizing redundant api queries, for this I integrated RabbitMQ for asynchronous messaging, and utilized Cassandra to store search results according to required business logic, this improved the overall efficiency of our systems. In collaboration with cross-functional teams, I developed an internal platform using ReactJS for API calibration, empowering teams to access and analyze production-level results seamlessly. Additionally, I streamlined ETL processes by optimizing Python scripts to extract data from various sources, including API logs and unstructured data. My approach to managing both relational and non-relational databases improved the speed and reliability of our data pipelines. Furthermore, I automated the extraction of audit-relevant data using Python scripts and Cron jobs, significantly reducing manual effort and ensuring accurate, timely data collection for audit processes.`,
    technologies: ["Python", "Flask","React.js", "Next.js", "Cassandra", "RabbitMQ","Git","Elasticsearch"],
  },
  {
    year: "March 2022 - May 2022",
    role: "Internship",
    company: "IndiaMart",
    description: `I developed a web crawler using Selenium to aggregate data from various web sources, enabling audits of model performance. Additionally, I optimized SQL queries to extract and analyze large datasets (over 1 crore rows) from multiple tables, improving performance for complex data retrieval and ensuring efficient data analysis.`,
    technologies: ["Python", "Selenium", "Cron", "MySQL","Kibana"],
  },
  {
    year: "June 2021 - July 2021",
    role: "Internship",
    company: "Robust Results",
    description: `I created Python scripts to generate insightful reports on key metrics, such as error rates and traffic patterns, aiding in system monitoring. To ensure the pipeline ran smoothly, I optimized it for performance and set up automated scheduling using Cron jobs, allowing for regular data updates.`,
    technologies: ["Python", "Pandas", "NumPy", "SQLAlchemy"],
  }
];

export const EDUCATIONS = [
  {
    year: "2023 - 2024",
    degree: "Master of Science in Computer Science",
    university: "Queen Mary University of London, UK",
    grade: `CGPA: 6.8/10`,
    coursework: ["Logic in Computer Science", "Semi-structured Data Engineering", "Security and Authentication.", "Machine Learning","Interactive System Design"],
  },
  {
    year: "2018 - 2022",
    degree: "Bachelor of Technology in Information Technology",
    university: "AKTU, India",
    grade: `CGPA: 8.03/10`,
    coursework: ["Algorithm design", "Data Structures","Database Management", "Operating System", "Computer Networks","Object Oriented Programming","Software Project Management"],
  },
  {
    year: "2016 - 2017",
    degree: "A-levels",
    university: "City Montessori School, India",
    grade: `CGPA: 9.1/10`,
    coursework: ["Mathematics", "Computer Application", "Physics", "Chemistry"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
    "The portfolio website is a modern, visually appealing, and highly responsive platform built using React for seamless UI development, Tailwind CSS for sleek and customizable styling, and Framer Motion for smooth animations. The site showcases personal projects, technical skills, and a professional profile. With a minimalist design, the site adapts beautifully to various devices, offering a smooth navigation experience.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "Groundwater Recharge Rate Analysis",
    category: "Data Analysis",
    description:
      "Conducted time series analysis, employing Seasonal Autoregressive Integrated Moving Average (SARIMA) techniques to assess groundwater recharge rates in Nashik relative to rainfall patterns. Detected unbalanced rainfall and groundwater levels by analyzing 20 years of rainfall records, river data, and standardized groundwater level metrics from various sources",
    technologies: ["Pandas", "Numpy", "Sklearn", "Time Series Analysis", "Seaborn"],
  },
  {
    title: "E-Commerce Website",
    category: "Full Stack Web Development",
    description:
      "In this eCommerce project, I developed a secure authentication system using JSON Web Tokens (JWT) to differentiate between admin and user login paths, ensuring role-based access control. The front-end was designed using ReactJS and Bootstrap, providing a responsive and visually appealing interface, which enhanced the overall user experience across various devices. On the back-end, I utilized Node.js and MongoDB to create a robust and scalable system for efficient data management, enabling seamless product handling, user orders, and inventory updates. Additionally, a separate admin login was implemented to allow administrators to perform actions such as adding, editing, and removing products, which are directly reflected on the eCommerce platform.",
    technologies: ["HTML", "Bootstrap", "React", "Node.js", "MongoDB","Express"],
  },
  {
    title: "Image Archive Platform",
    category: "Android App",
    description:
      "In this project, I developed an Android application that allows users to upload images and add personalized memories associated with them, creating a virtual gallery of meaningful moments. The app was built using Java and Android Studio, with Firebase integrated as the backend to manage user authentication, image storage, and database functions. The front-end of the app was designed using XML, providing a clean and user-friendly interface for seamless navigation and interaction. Firebase's real-time capabilities ensured smooth data synchronization, offering users a dynamic and responsive experience when uploading and retrieving their memories.",
    technologies: ["Java", "Firebase", "Android Studio", "XML"],
  }
];

export const CONTACT = {
  address: "London, UK",
  number: "+447407842367 | +919773861502",
  email: "yashrajsingh.dg@gmail.com",
};
