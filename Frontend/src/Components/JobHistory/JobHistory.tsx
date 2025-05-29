import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "./Card";
import React from "react";


const JobHistory = () => {
  const user = useSelector((state: any) => state.user);
  const [activeTab, setActiveTab] = useState<string>("APPLIED");
  const [jobList, setJobList] = useState<any[]>([]);
  const [showList, setShowList] = useState<any[]>([]);

  useEffect(() => {
    if (!user?.id) return;

    axios
      .get(`http://localhost:8080/jobs/applications/${user.id}`)
      .then((res) => {
        console.log("APPLICATION RESPONSE 👉", res.data);
        setJobList(res.data || []);
        setShowList(
          res.data.filter((app: any) => app.applicationStatus === activeTab)
        );
      })
      .catch((err) => {
        console.error("Error loading job applications", err);
      });
  }, [user, activeTab]);

  const handleTabChange = (value: string | null) => {
    const newTab = value || "APPLIED";
    setActiveTab(newTab);
    setShowList(jobList.filter((app: any) => app.applicationStatus === newTab));
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Job History</div>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="outline"
        radius="lg"
        defaultValue="APPLIED"
      >
        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
          <Tabs.Tab value="APPLIED">APPLIED</Tabs.Tab>
          <Tabs.Tab value="OFFERED">OFFERED</Tabs.Tab>
          <Tabs.Tab value="INTERVIEWING">INTERVIEWING</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={activeTab}>
  <div className="mt-10 flex flex-wrap gap-5">
    {showList.map((item: any, index: number) => (
      <Card
        key={index}
        {...item}
        invited={activeTab === "INTERVIEWING"} // ✅ fixes Accept/Reject button rendering
      />
    ))}
  </div>
</Tabs.Panel>

      </Tabs>
    </div>
  );
};

export default JobHistory;
