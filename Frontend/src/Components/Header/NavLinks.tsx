import { Link, useLocation } from "react-router-dom";
import React from "react";

const NavLinks = () => {
    const location = useLocation();

    // ✅ Get user from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const isLoggedIn = !!user;
    const accountType = user?.accountType;

    // ✅ Role-based links
    const allLinks = [
        { name: "Find Jobs", url: "/find-jobs", roles: ["APPLICANT"] },
        { name: "Job History", url: "/job-history", roles: ["APPLICANT"] },
        { name: "Find Talent", url: "/find-talent", roles: ["EMPLOYER"] },
        { name: "Post Job", url: "/post-job", roles: ["EMPLOYER"] },
        { name: "Posted Job", url: "/posted-job/0", roles: ["EMPLOYER"] },
        
    ];

    // ✅ Filter based on user login status and role
    const visibleLinks = allLinks.filter(link => {
        if (!isLoggedIn) return link.roles.includes("GUEST");
        return link.roles.includes(accountType);
    });

    return (
        <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
            {visibleLinks.map((link, index) => (
                <div
                    key={index}
                    className={`${
                        location.pathname === link.url
                            ? "border-bright-sun-400 text-bright-sun-400"
                            : "border-transparent"
                    } border-t-[3px] h-full flex items-center`}
                >
                    <Link to={link.url}>{link.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
