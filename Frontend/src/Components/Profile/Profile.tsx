import { ActionIcon,  Divider, TagsInput, Textarea } from "@mantine/core";
import {  IconDeviceFloppy,  IconPencil,  IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";

import Certificate from "./Certificate";
import React from "react";

const Profile = () => {
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>state.user);
    const profile=useSelector((state:any)=>state.profile);
    const [skills, setSkills]=useState(["React","HTML","CSS","AWS"]);
    const [about, setAbout] = useState('As a Software Engineer at TechCorp, I specialize in building scalable applications with cutting-edge technologies. My expertise in JavaScript, React, and Node.js enables me to develop efficient full-stack solutions, while my experience with MongoDB ensures optimized database management. Additionally, my knowledge of AWS supports cloud-based deployments and high-performance applications. I am passionate about solving complex technical challenges and optimizing system performance.');
    const [edit, setEdit]=useState([false,false,false,false,false]);
    const [addExp, setAddExp]=useState(false);
    const [addCerti, setAddCerti]=useState(false);
    const handleEdit=(index:any)=>{
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }
    useEffect(()=>{
        getProfile(user.id).then((data:any)=>{
            dispatch(setProfile(data));
        }).catch((error:any)=>{
            console.log(error);
        });
    }, [])
    return (
    <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className=" w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="/avatar.png" alt="" />
        </div>
        <div className="px-3 mt-16">
            <Info/>
            

            
        <Divider my="xl" mx="xs" />
        <About/>
        <Divider my="xl" mx="xs" />

       <Skills/>
        <Divider my="xl" mx="xs" />
        <Experience/>
        <Divider my="xl" mx="xs" />
        <Certificate/>
    </div>
    </div>
    )
}
export default Profile;