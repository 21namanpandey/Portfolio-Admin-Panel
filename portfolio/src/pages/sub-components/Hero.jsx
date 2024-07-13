import { Button } from "@/components/ui/button";
import axios from "axios";
import {
    ExternalLink,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Link2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getMyProfile = async () => {
            const { data } = await axios.get(
                "https://portfolio-admin-panel-uyro.onrender.com/api/v1/user/me/portfolio",
                { withCredentials: true }
            );
            setUser(data.user);
        };
        getMyProfile();
    }, []);

    return (
        <div className="w-full px-6 py-6 bg-gray-900 text-white rounded-md">
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-400 rounded-full h-3 w-3"></span>
                <p className="text-gray-400">Online</p>
            </div>
            <h1 className="overflow-x-hidden text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] tracking-wide mb-4 font-bold text-white">
                Hey, I'm {user.fullName}
            </h1>
            <h2 className="text-green-400 overflow-x-hidden text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] tracking-widest mb-6">
                <Typewriter
                    words={["Full Stack Developer"]}
                    loop={50}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={100}
                />
            </h2>
            <div className="w-fit px-8 py-4 bg-gray-800 rounded-full shadow-lg flex gap-6 items-center mt-4 md:mt-8 lg:mt-10">
                <Link to={user.facebookURL} target="_blank">
                    <Link2 className="text-orange-500 w-7 h-7 hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link to={user.instagramURL} target="_blank">
                    <Mail className="text-white w-7 h-7 hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link to={user.linkedinURL} target="_blank">
                    <Linkedin className="text-blue-700 w-7 h-7 hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link to={user.twitterURL} target="_blank">
                    <Twitter className="text-blue-400 w-7 h-7 hover:scale-110 transition-transform duration-200" />
                </Link>
            </div>
            <div className="mt-6 md:mt-10 lg:mt-12 flex gap-4">
                <Link to={user.githubURL} target="_blank">
                    <Button className="rounded-full flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800 transition-colors duration-200">
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                    </Button>
                </Link>
                <Link to={user.resume && user.resume.url} target="_blank">
                    <Button className="rounded-full flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700 transition-colors duration-200">
                        <ExternalLink className="w-5 h-5" />
                        <span>Resume</span>
                    </Button>
                </Link>
            </div>
            <p className="mt-8 text-lg tracking-wide text-gray-300">
                {user.aboutMe}
            </p>
        </div>
    );
};

export default Hero;
