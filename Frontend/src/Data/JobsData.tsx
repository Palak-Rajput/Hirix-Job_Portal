import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    { title: "Job title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
    { title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelence', 'Internship'] }
];

const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "New York",
        package: "32 LPA",
        postedDaysAgo: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
    },
    {
        jobTitle: "Software Engineer",
        company: "Google",
        applicants: 40,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "San Francisco",
        package: "28 LPA",
        postedDaysAgo: 8,
        description: "Google is looking for a Software Engineer to develop scalable applications for its cloud platform. Ideal for fresh graduates with strong coding skills in Python or Java."
    },
    {
        jobTitle: "Data Analyst",
        company: "Amazon",
        applicants: 32,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "Seattle",
        package: "20 LPA",
        postedDaysAgo: 10,
        description: "Amazon is hiring a Data Analyst to analyze customer behavior and provide insights for business growth. A great opportunity for entry-level candidates with expertise in SQL and Python."
    },
    {
        jobTitle: "UX Designer",
        company: "Apple",
        applicants: 18,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "Cupertino",
        package: "30 LPA",
        postedDaysAgo: 15,
        description: "Apple is searching for a UX Designer to enhance user experiences across its iOS and macOS platforms. Freshers with a strong portfolio in user research and wireframing are encouraged to apply."
    },
    {
        "jobTitle": "AI Research Intern",
        "company": "Spotify",
        "applicants": 50,
        "experience": "Internship",
        "jobType": "Part-Time",
        "location": "Remote",
        "package": "15 LPA",
        "postedDaysAgo": 5,
        "description": "Spotify is looking for an AI Research Intern to contribute to the development of cutting-edge AI models in deep learning, NLP, and music recommendation systems. Ideal for students or fresh graduates passionate about AI and personalized audio experiences."
    },
    
    {
        jobTitle: "Cybersecurity Analyst",
        company: "Microsoft",
        applicants: 27,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "Redmond",
        package: "25 LPA",
        postedDaysAgo: 7,
        description: "Microsoft is hiring a Cybersecurity Analyst to identify and mitigate security threats. Perfect for recent graduates with knowledge of network security and threat analysis."
    },
    {
        "jobTitle": "AI Research Intern",
        "company": "Netflix",
        "applicants": 40,
        "experience": "Internship",
        "jobType": "Part-Time",
        "location": "Remote",
        "package": "14 LPA",
        "postedDaysAgo": 3,
        "description": "Netflix is looking for an AI Research Intern to work on cutting-edge AI models in deep learning, NLP, and content recommendation. This role is ideal for students or fresh graduates passionate about AI and improving personalized streaming experiences."
    },
    {
        "jobTitle": "AI Research Intern",
        "company": "Adobe",
        "applicants": 45,
        "experience": "Internship",
        "jobType": "Part-Time",
        "location": "Remote",
        "package": "14 LPA",
        "postedDaysAgo": 3,
        "description": "Adobe is looking for an AI Research Intern to explore advancements in deep learning, computer vision, and generative AI. This role is ideal for students or fresh graduates passionate about AI-driven creativity, image processing, and digital design innovation."
    }
    
    
]


export { dropdownData, jobList };