import { IconAnchor, IconArrowLeft } from "@tabler/icons-react";
import SignUp from "../Components/SignUpLogin/SignUp";
import Login from "../Components/SignUpLogin/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import React from "react";

const SignUpPage = () => {
    const location=useLocation();
    const navigate=useNavigate();
    return (
        <div className={`h-[100vh] w-[100vh] overfloow-hidden relative`}>
                <Button className="!absolute left-5 z-10" leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" my='md' onClick={()=>navigate("/")} variant="light">Home</Button>

            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
                <Login/>
                <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex items-center justify-center gap-5 flex-col`}>
                    <div className="flex gap-1 items-center text-bright-sun-400">
                        <IconAnchor className="h-16 w-16" stroke={2.5} />
                        <div className="text-3xl font-semibold">Hirix</div>
                    </div>
                    <div className="text-2xl text-mine-shaft-200 font-semibold">
                        Find the job made for you
                    </div>
                </div>

                {/* Right Section (SignUp Component) */}
                <div className="w-1/2 flex items-center justify-center">
                    <SignUp />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
