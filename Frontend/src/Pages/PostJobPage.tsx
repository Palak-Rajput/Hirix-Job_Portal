import { Divider } from "@mantine/core";
import PostJob from "../Components/PostJob/PostJob";
import React from "react";



const PostJobPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs" mx="md" />
            <PostJob/>
            </div>

    )
}
export default PostJobPage;