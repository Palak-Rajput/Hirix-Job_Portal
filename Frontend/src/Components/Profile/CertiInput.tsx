import { Button, TextInput } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import React from "react";


const CertiInput=(props:any)=>{
    const dispatch=useDispatch();
    const select=fields;
    const profile=useSelector((state:any)=>state.profile);
    const form=useForm({
            mode: 'controlled',
            validateInputOnChange:true,
            initialValues: {
                name: '',
                issuer: '',
                issueDate: new Date(),
                certificateId:''
            },
            validate:{
                name:isNotEmpty("Title is required"),
                issuer:isNotEmpty("Issuer is required"),
                issueDate:isNotEmpty("Issue Date is required"),
                certificateId:isNotEmpty("Certificate ID is required"),
            }
        })
        const handleSave=()=>{
            form.validate();
        if(!form.isValid())return;
        let certi=[...profile.certifications];
        certi.push(form.getValues());
        certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
        let updatedProfile={...profile, certifications:certi};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Success", "Certificate Added Successfully");
        }
        return <div className="flex flex-col gap-3">
        <div text-lg font-semibold>Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
               <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder="Enter title"/>

               <SelectInput form={form} name="issuer" {...select[1]} />  
            </div>
        <div className="flex gap-10 [&>*]:w-1/2">

              <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk maxDate={new Date()} label="Issue Date" placeholder="Pick Date" /> 

              <TextInput {...form.getInputProps("certificateId")} label="Certificate ID" withAsterisk placeholder="Enter ID"/>

            </div>
            <div className="flex gap-5">
                            <Button onClick={handleSave} color="green.8" variant="light" >Save</Button>
                            <Button color="red.8" onClick={()=>props.setEdit(false)} variant="light" >Cancel</Button>
                        </div>
    </div>
}
export default CertiInput;