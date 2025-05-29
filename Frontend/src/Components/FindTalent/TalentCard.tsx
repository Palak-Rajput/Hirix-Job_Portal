import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../../Services/ProfileService";
import { changeAppStatus } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { formatInterviewTime, openBase64PDF } from "../../Services/Utilities";

interface TalentCardProps {
  name: string;
  applicantId: string;
  applicationId: string;
  email: string;
  website: string;
  resume: string;
  CoverLetter: string;
  invited?: boolean;
  posted?: boolean;
  interviewTime?: string;
}

const TalentCard: React.FC<TalentCardProps> = (props) => {
  const { id: jobId } = useParams<{ id: string }>();
  const [opened, { open, close }] = useDisclosure(false);
  const [appModal, { open: openApp, close: closeApp }] = useDisclosure(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<any>({});

  // Debug: ensure applicationId is coming through
  useEffect(() => {
    console.log("TalentCard received applicationId:", props.applicationId);
  }, [props.applicationId]);

  useEffect(() => {
    if (props.applicantId) {
      getProfile(props.applicantId)
        .then(res => setProfile(res))
        .catch(console.error);
    } else {
      setProfile(props);
    }
  }, [props]);

  const handleOffer = (status: "INTERVIEWING" | "OFFERED" | "REJECTED") => {
    // Guard against missing ID
    if (!props.applicationId) {
      errorNotification("Error", "Missing application ID");
      return;
    }

    // Build payload exactly as backend expects
    const payload: any = {
      applicationId: props.applicationId,
      newStatus: status,
    };

    // If scheduling interview, require date/time and set scheduleDate
    if (status === "INTERVIEWING") {
      if (!date || !time) {
        errorNotification("Error", "Please select both date and time");
        return;
      }
      const [hours, minutes] = time.split(":").map(Number);
      date.setHours(hours, minutes);
      payload.scheduleDate = date.toISOString();
    }

    // Call backend
    changeAppStatus(payload)
      .then(() => {
        if (status === "INTERVIEWING") {
          successNotification("Interview Scheduled", "Interview scheduled successfully");
        } else if (status === "OFFERED") {
          successNotification("Offered", "Offer sent successfully");
        } else {
          successNotification("Rejected", "Applicant has been rejected");
        }
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
        errorNotification("Error", err?.response?.data?.errorMessage || "Something went wrong");
      });
  };

  return (
    <div className="mx-4 bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar
              size="lg"
              src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "/Avatar.png"}
            />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {profile.jobTitle} &bull; {profile.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>

      {/* Skills */}
      <div className="flex gap-2">
        {profile.skills?.slice(0, 4).map((skill: string, idx: number) => (
          <div key={idx} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
            {skill}
          </div>
        ))}
      </div>

      {/* About */}
      <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {profile.about}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {/* Interview vs Package */}
      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth className="w-5 h-5" />
          Interview: {formatInterviewTime(props.interviewTime!)}
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">23 LPA</div>
          <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mineShaft.7" />

      {/* Action Buttons */}
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {!props.invited ? (
          <>
            <Link to={`/talent-profile/${profile.id}`}>
              <Button color="brightSun.4" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            {props.posted ? (
              <Button
                onClick={open}
                rightSection={<IconCalendarMonth className="w-5 h-5" />}
                color="brightSun.4"
                variant="light"
                fullWidth
              >
                Schedule
              </Button>
            ) : (
              <Button color="brightSun.4" variant="light" fullWidth>
                Message
              </Button>
            )}
          </>
        ) : (
          <>
            <Button
              color="brightSun.4"
              onClick={() => handleOffer("OFFERED")}
              variant="outline"
              fullWidth
            >
              Accept
            </Button>
            <Button
              color="brightSun.4"
              onClick={() => handleOffer("REJECTED")}
              variant="light"
              fullWidth
            >
              Reject
            </Button>
          </>
        )}
      </div>

      {(props.invited || props.posted) && (
        <Button color="brightSun.4" variant="filled" fullWidth onClick={openApp} autoContrast>
          View Application
        </Button>
      )}

      {/* Schedule Interview Modal */}
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-4">
          <DateInput
            value={date}
            onChange={setDate}
            minDate={new Date()}
            label="Date"
            placeholder="Select date"
          />
          <TimeInput
            label="Time"
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button onClick={() => handleOffer("INTERVIEWING")} fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>

      {/* Application Details Modal */}
      <Modal opened={appModal} onClose={closeApp} title="Application" centered radius="lg">
        <div className="flex flex-col gap-4">
          <div>
            Email:{" "}
            <a href={`mailto:${props.email}`} className="text-bright-sun-400 hover:underline">
              {props.email}
            </a>
          </div>
          <div>
            Website:{" "}
            <a href={props.website} target="_blank" className="text-bright-sun-400 hover:underline">
              {props.website}
            </a>
          </div>
          <div>
            Resume:{" "}
            <span
              className="text-bright-sun-400 hover:underline cursor-pointer"
              onClick={() => openBase64PDF(props.resume)}
            >
              {props.name}
            </span>
          </div>
          <div>
            Cover Letter: <div>{props.CoverLetter}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
