import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const fields=[
    {
        label:"Job Title",
        placeholder:"Enter Job Title",
        options: ['Designer', 'Developer', 'Tester', 'Product Manager', 'Data Analyst', 'Data Scientist', 'DevOps Engineer', 'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Project Manager', 'Business Analyst', 'System Administrator', 'Network Engineer', 'Security Analyst', 'AI Engineer', 'Machine Learning Engineer', 'Cloud Architect'],
        leftSection:IconBriefcase
            },

    {
        label:"Company",
        placeholder:"Enter Company Name",
        options: ['Google', 'Amazon', 'Netflix', 'Meta', 'Spotify', 'Microsoft', 'Apple', 'Tesla', 'Twitter (X)', 'LinkedIn', 'Adobe', 'IBM', 'Intel', 'Samsung', 'Oracle', 'Salesforce', 'Zoom', 'Airbnb', 'Uber', 'Nvidia', 'TikTok', 'Reddit', 'Dropbox', 'Pinterest'],
        leftSection:IconBriefcase  
    },
    {
        label:"Location",
        placeholder:"Enter Job Location",
        options: ['Delhi', 'Noida', 'Pune', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Lucknow', 'Indore', 'Bhopal', 'Coimbatore', 'Visakhapatnam', 'Surat', 'Nagpur', 'Thiruvananthapuram', 'Patna'],
        leftSection:IconMapPin
    }
]
export default fields;