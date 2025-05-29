import { Badge, Tabs } from "@mantine/core";
import Job from "../JobDesc/Job";
import TalentCard from "../FindTalent/TalentCard";
import React from "react";

const PostedJobDesc = (props: any) => {
  return (
    <div className="mt-5 w-3/4 px-5">
      {props.jobTitle ? (
        <>
          <div className="text-2xl font-semibold flex items-center">
            {props.jobTitle}
            <Badge variant="light" ml="sm" color="brightSun.4" size="sm">
              {props.jobStatus}
            </Badge>
          </div>
          <div className="font-medium text-mine-shaft-300 mb-5">
            {props.location}
          </div>
          <div>
            <Tabs variant="outline" radius="lg" defaultValue="overview">
              <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="invited">Invited</Tabs.Tab>
                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>

              {/* Job Overview Panel */}
              <Tabs.Panel value="overview" className="[&>div]:w-full">
                <Job {...props} edit />
              </Tabs.Panel>

              {/* Applicants Panel */}
              <Tabs.Panel value="applicants">
                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                  {props.applicants
                    ?.filter((x: any) => x.applicationStatus === "APPLIED")
                    .map((talent: any, index: number) => (
                      <TalentCard
                        key={index}
                        {...talent}
                        applicationId={talent.applicationId}
                        posted={true}
                      />
                    ))}
                </div>
              </Tabs.Panel>

              {/* Invited Panel */}
              <Tabs.Panel value="invited">
                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                  {props.applicants
                    ?.filter((x: any) => x.applicationStatus === "INTERVIEWING")
                    .map((talent: any, index: number) => (
                      <TalentCard
                        key={index}
                        {...talent}
                        applicationId={talent.applicationId}
                        invited
                      />
                    ))}
                </div>
              </Tabs.Panel>

              {/* Offered Panel */}
              <Tabs.Panel value="offered">
                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                  {props.applicants
                    ?.filter((x: any) => x.applicationStatus === "OFFERED")
                    .map((talent: any, index: number) => (
                      <TalentCard
                        key={index}
                        {...talent}
                        applicationId={talent.applicationId}
                        offered
                      />
                    ))}
                </div>
              </Tabs.Panel>

              {/* Rejected Panel */}
              <Tabs.Panel value="rejected">
                <div className="mt-10 flex flex-wrap gap-5 justify-around">
                  {props.applicants
                    ?.filter((x: any) => x.applicationStatus === "REJECTED")
                    .map((talent: any, index: number) => (
                      <TalentCard
                        key={index}
                        {...talent}
                        applicationId={talent.applicationId}
                        offered
                      />
                    ))}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="text-2xl font-semibold flex min-h-[70vh] justify-center items-center">
          No Job Selected
        </div>
      )}
    </div>
  );
};

export default PostedJobDesc;
