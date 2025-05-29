import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../Services/ProfileService";
import React from "react";

const Profile = (props: any) => {
    const {id}=useParams();
    const [profile, setProfile]=useState<any>({});
    useEffect(()=>{
        window.scrollTo(0,0);
        getProfile(id).then((res)=>{
            setProfile(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [id])

    return <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className=" w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="/avatar.png" alt="" />
        </div>
        <div className="px-3 mt-16">
            <div className="text-3xl font-semobold flex justify-between">{props.name}<Button color="brightSun.4" variant="light" >Message</Button>
            </div>
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role} &bull; {props.company}</div>
            <div className="flex gap-1 text-mine-shaft-300 text-lg items-center">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
            </div>
        </div>
        <Divider my="xl" mx="xs" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">About</div>
            <div className="text-sm text-mine-shaft-300 text-justify">
                {props.about}
            </div>
        </div>
        <Divider my="xl" mx="xs" />

        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    props.skills.map((skill: any, index: any) => <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
                }


            </div>
        </div>
        <Divider my="xl" mx="xs" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
                {
                    props.experience.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                }
            </div>
        </div>
        <Divider my="xl" mx="xs" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Certifications</div>
            <div className="flex flex-col gap-8">
                {
                    props.certifications.map((certi: any, index: any) => <CertiCard key={index} {...certi} />)
                }
            </div>
        </div>
    </div>
}
export default Profile;