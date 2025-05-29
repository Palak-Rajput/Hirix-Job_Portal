import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import Company from "../CompanyProfile/Company";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const PostJob = () => { 
    const user=useSelector((state:any)=>state.user);
    const navigate=useNavigate();
    const select=fields;
    const form = useForm({
        initialValues: {
            jobTitle: '',
            company: '',
            experience: '',
            jobType: '',
            location: '',
            packageOffered: '',
            skillsRequired: [],
            about: '',
            description: content
        },
        validate: {
            jobTitle: isNotEmpty('Title is required'),
            company: isNotEmpty('Company is required'),
            experience: isNotEmpty('Experience is required'),
            jobType: isNotEmpty('Job Type is required'),
            location: isNotEmpty('Location is required'),
            packageOffered: isNotEmpty('Package is required'),
            skillsRequired: isNotEmpty('Skills is required'),
            about: isNotEmpty('About is required'),
            description: isNotEmpty('Description is required'),
        }
    });
    const handlePost=()=>{
        form.validate();
        if(!form.isValid())return;
        postJob({...form.getValues(), postedBy:user.id, jobStatus:"ACTIVE"}).then((res)=>{
            successNotification("Success", "Job Posted Successfully");
            navigate(`/posted-job/${res.id}`);
        }).catch((err)=>{
            console.log(err);
            errorNotification("Error", err.response.data.errorMessage);
        })
    }
    // const handleDraft=()=>{
    //     postJob({...form.getValues(), postedBy:user.id, jobStatus:"DRAFT"}).then((res)=>{
    //         successNotification("Success", "Job Drafted Successfully");
    //         navigate(`/posted-jobs/${res.id}`);
    //     }).catch((err)=>{
    //         console.log(err);
    //         errorNotification("Error", err.response.data.errorMessage);
    //     })
    // }
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">Post a Job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="experience" {...select[2]} />
                <SelectInput form={form} name="jobType" {...select[3]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="location" {...select[4]} />
                <NumberInput {...form.getInputProps('packageOffered')} label="Salary" withAsterisk min={1} max={300} placeholder="Enter Salary" hideControls clampBehavior="strict" />
            </div>
            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter skill" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />

            <Textarea {...form.getInputProps('about')} withAsterisk label="About Job" autosize minRows={3} placeholder="Enter about job..." />

            <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                <div className="text-sm font-medium">Job Description<span className="text-red-500 ">*</span> </div>
                <TextEditor form={form} />
            </div>
            <div className="flex gap-4">
                <Button color="brightSun.4" onClick={handlePost} variant="light">Publish Job</Button>
                {/* <Button color="brightSun.4" onClick={handleDraft} variant="outline">Save as Draft</Button> */}

            </div>
        </div>

    </div>


}
export default PostJob; 