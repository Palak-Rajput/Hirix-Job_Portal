import {
  TextInput,
  NumberInput,
  FileInput,
  Textarea,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";
import { useSelector } from "react-redux";
import React from "react";

interface ApplicationFormProps {
  jobId: number;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobId }) => {
  const user = useSelector((state: any) => state.user);
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume: null,
      coverLetter: "",
    },
    validate: {
      name: isNotEmpty("Name cannot be empty."),
      email: isNotEmpty("Email cannot be empty."),
      phone: isNotEmpty("Phone cannot be empty."),
      // website: isNotEmpty("Website cannot be empty."),
      resume: isNotEmpty("Resume cannot be empty."),
    },
  });

  const handlePreview = () => {
    form.validate();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!form.isValid()) return;
    setPreview(true);
  };

  const handleSubmit = async () => {
    setSubmit(true);
    try {
      const resumeFile = form.getValues().resume;
      if (!resumeFile) {
        throw new Error("Resume file is required.");
      }
      const resumeBase64 = await getBase64(resumeFile);
      const applicant = {
        ...form.getValues(),
        applicantId: user.id,
        resume: resumeBase64.split(",")[1], // remove base64 prefix
      };

      await applyJob(jobId, applicant);
      successNotification("Success", "Application Submitted Successfully");
      navigate("/job-history");
    } catch (err: any) {
      errorNotification(
        "Error",
        err.response?.data?.errorMessage || "Something went wrong"
      );
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div>
      <LoadingOverlay
        className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("name")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            label="Full Name"
            withAsterisk
            placeholder="Enter Name"
          />
          <TextInput
            {...form.getInputProps("email")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            label="Email"
            withAsterisk
            placeholder="Enter Email"
          />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput
            {...form.getInputProps("phone")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            label="Phone Number"
            withAsterisk
            placeholder="Enter Phone Number"
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
          />
          <TextInput
            {...form.getInputProps("website")}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            label="Personal Website"
            placeholder="Enter URL"
          />
        </div>

        <FileInput
          accept="application/pdf"
          {...form.getInputProps("resume")}
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={preview ? "text-mine-shaft-300 font-semibold" : ""}
          withAsterisk
          leftSection={<IconPaperclip stroke={1.5} />}
          label="Attach your CV"
          placeholder="Your CV"
          leftSectionPointerEvents="none"
        />

        <Textarea
          {...form.getInputProps("coverLetter")}
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={preview ? "text-mine-shaft-300 font-semibold" : ""}
          withAsterisk
          placeholder="Type something about yourself..."
          label="Cover Letter"
          autosize
          minRows={4}
        />

        {!preview ? (
          <Button onClick={handlePreview} color="brightSun.4" variant="light">
            Preview
          </Button>
        ) : (
          <div className="flex gap-10 [&>*]:w-1/2">
            <Button
              fullWidth
              onClick={() => setPreview(false)}
              color="brightSun.4"
              variant="outline"
            >
              Edit
            </Button>
            <Button
              fullWidth
              onClick={handleSubmit}
              color="brightSun.4"
              variant="light"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
