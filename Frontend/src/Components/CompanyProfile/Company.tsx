import { Avatar, AvatarGroup, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";
import React from "react";

const Company = () => {
    return <div className="w-3/4">
       <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className=" w-24 h-24 rounded-3xl bg-mine-shaft-950 -bottom-1/3 absolute p-2 -bottom-1/4 left-5 border-mine-shaft-950 border-8 " src="/Icons/Google.png" alt="" />
        </div>
        <div className="px-3 mt-12">
            <div className="text-3xl font-semobold flex justify-between">Google 
                {/* <Avatar.Group>
                <Avatar src="avatar1.png" />
                <Avatar src="avatar2.png" />
                <Avatar src="avatar3.png" />
                <Avatar>+10K</Avatar>
            </Avatar.Group> */}
            </div>
            <div className="flex gap-1 text-mine-shaft-300 text-lg items-center">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> Pune
            </div>
            <Divider my="xl" mx="xs" />
<div>
<Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>

    </Tabs>
</div>
        </div>
    </div>
    
}
export default Company;