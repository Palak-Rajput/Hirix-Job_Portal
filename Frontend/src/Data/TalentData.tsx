import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields=[
    { title: "Job title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Skills", icon: IconRecharging, options: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular','Node.js', 'Python', 'Java', 'Ruby', 'PHP','SQL', 'MongoDB', 'DeveOps', 'AWS', 'Azure','Google Cloud'] }
]

const talents = [
    {
        name: "Bob Smith",
        role: "Backend Developer",
        company: "Amazon",
        topSkills: ["Node.js", "Express", "MySQL"],
        about: "As a Backend Developer at Amazon, I specialize in server-side development and database management. My skills in Node.js and Express allow me to build rubust and scable APIs, while my experience with MySQL ensures efficient data handling and storage. I am passionate about optimizing backend processes to support high-traffic applications and improve system performance. My approach to development emphasizes reliability, security, and the ability to adapt to evolving technological demands.",
        expectedCtc: "₹50 - 65LPA",
        location: "Seattle, United States",
        image:"avatar"
    },
    {
        name: "Alice Johnson",
        role: "Frontend Developer",
        company: "Google",
        topSkills: ["HTML", "CSS", "JavaScript", "React", "Angular"],
        about: "As a Frontend Developer at Google, I specialize in building responsive and interactive user interfaces. My expertise in React and Angular enables me to create seamless web applications, while my deep understanding of HTML, CSS, and JavaScript ensures accessibility and performance. I am passionate about crafting intuitive digital experiences and optimizing UI components for scalability and efficiency.",
        expectedCtc: "₹40 - 55LPA",
        location: "Mountain View, United States",
        image: "avatar1"
    },
    {
        name: "David Lee",
        role: "Full Stack Developer",
        company: "Microsoft",
        topSkills: ["JavaScript", "Node.js", "Python", "MongoDB", "SQL"],
        about: "As a Full Stack Developer at Microsoft, I build scalable and high-performance applications using JavaScript and Node.js for backend development. My proficiency in Python enhances automation and data processing, while my expertise in MongoDB and SQL ensures robust data management. I am dedicated to creating efficient, secure, and scalable solutions for modern cloud-based applications.",
        expectedCtc: "₹45 - 60LPA",
        location: "Redmond, United States",
        image: "avatar2"
    },
    {
        name: "Emma Davis",
        role: "Cloud Engineer",
        company: "Adobe",
        topSkills: ["DevOps", "AWS", "Azure", "Google Cloud", "SQL"],
        about: "As a Cloud Engineer at Adobe, I focus on deploying and managing cloud infrastructures using AWS, Azure, and Google Cloud. My expertise in DevOps ensures smooth CI/CD pipelines, while my proficiency in SQL enables efficient data handling across cloud environments. I am passionate about cloud automation, infrastructure optimization, and ensuring system reliability and security.",
        expectedCtc: "₹55 - 70LPA",
        location: "San Jose, United States",
        image: "avatar3"
    },
    {
        name: "John Doe",
        role: "Software Engineer",
        company: "TechCorp",
        topSkills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
        about: "As a Software Engineer at TechCorp, I specialize in building scalable applications with cutting-edge technologies. My expertise in JavaScript, React, and Node.js enables me to develop efficient full-stack solutions, while my experience with MongoDB ensures optimized database management. Additionally, my knowledge of AWS supports cloud-based deployments and high-performance applications. I am passionate about solving complex technical challenges and optimizing system performance.",
        expectedCtc: "₹50 - 70LPA",
        location: "Bangalore, India",
        image: "avatar"
    },
    {
        name: "Sophia Martinez",
        role: "Backend Engineer",
        company: "Netflix",
        topSkills: ["Node.js", "Python", "SQL", "AWS", "DevOps"],
        about: "As a Backend Engineer at Netflix, I focus on building robust and scalable backend services. My expertise in Node.js and Python allows me to develop high-performance APIs, while my knowledge of SQL ensures efficient database management. With AWS and DevOps experience, I optimize cloud-based infrastructures and CI/CD pipelines for seamless deployment. I am passionate about backend optimization, system security, and handling high-traffic applications.",
        expectedCtc: "₹55 - 75LPA",
        location: "Los Gatos, United States",
        image: "avatar1"
    }
  
    
]

const profile={
    name: "Jarrod Martinez",
    role: "Software Engineer",
    company: "Netflix",
    location: "Los Gatos, United States",
    about: "As a Software Engineer at Netflix, I specialize in designing and developing scalable applications using modern technologies. My expertise in Node.js and Python enables me to build high-performance APIs and backend services, while my knowledge of SQL ensures efficient data management. With AWS and DevOps experience, I optimize cloud-based infrastructures and automate deployment pipelines for seamless integration. I am passionate about software architecture, system optimization, and solving complex engineering challenges to enhance performance and reliability at scale.",
    skills: ["Node.js", "Python", "SQL", "AWS", "DevOps","Docker","React","Figma","HTML","CSS"],
    experience: [
        {
            title : "Software Engineer III",
            company : "Netflix",
            location : "Los Gatos, United States",
            startDate : "Apr 2022",
            endDate : "Present",
            description: "As a Software Engineer III at Netflix, I develop scalable backend services using Node.js and Python, optimize databases with SQL, and enhance cloud deployments with AWS and DevOps. I focus on improving system performance, security, and reliability in high-traffic environments."
        },
        {
            title: "Senior Software Engineer",
            company: "Google",
            location: "Mountain View, United States",
            startDate: "Jan 2020",
            endDate: "Dec 2023",
            description: "As a Senior Software Engineer at Google, I designed and implemented high-performance distributed systems using Java and Go. I worked on optimizing large-scale data pipelines, improving system efficiency, and ensuring security and scalability in cloud-based environments."
        }
        
    ],
    certifications: [
        {
            name: "Google Professional Cloud Architect",
            issuer: "Google",
            issueDate: "Aug 2023",
            CertificateId: "CHFS57GSJ"
        },
        {
            name: "Microsoft Certified: Azure Solutions Architect Expert",
            issuer: "Microsoft",
            issueDate: "Oct 2021",
            CertificateId: "AZURE12345X"
        }
        
    ]
}

export {talents, searchFields, profile};