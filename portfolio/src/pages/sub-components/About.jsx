import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getMyProfile = async () => {
            try {
                const { data } = await axios.get(
                    "https://portfolio-admin-panel-uyro.onrender.com/api/v1/user/me/portfolio",
                    { withCredentials: true }
                );
                setUser(data.user);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        getMyProfile();
    }, []);

    return (
        <div className="w-full flex flex-col overflow-x-hidden">
            <div className="relative mb-12">
                <h1
                    className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold  "
                    style={{ background: "hsl(222.2 84% 4.9%)" }}
                >
                    ABOUT
                    <span className="text-tubeLight-effect font-extrabold">
                        ME
                    </span>
                </h1>
                <h1
                    className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] mx-auto w-fit font-extrabold"
                    style={{ background: "hsl(222.2 84% 4.9%)" }}
                >
                    <span className="tracking-[5px]">ABOUT</span>
                    <span className="text-tubeLight-effect font-extrabold tracking-[5px]">ME</span>
                </h1>

                <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200 "></span>
            </div>
            <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
                <div className="flex justify-center items-center">
                    <img
                        src={user.avatar && user.avatar.url}
                        alt={user.fullName}
                        className="bg-white p-2 sm:p-4 h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] rounded-lg shadow-xl"
                    />
                </div>
                <div className="flex flex-col gap-5 text-lg text-gray-300">
                    <p>
                        Hello! I'm a passionate full-stack web developer with a knack for
                        building dynamic and responsive web applications. With a strong
                        foundation in both frontend and backend development, I love
                        transforming ideas into real-world applications that make a
                        difference.
                    </p>
                    <p>
                        I'm always on the lookout for the latest advancements in technology
                        to enhance my projects. My commitment to writing clean, maintainable
                        code and following best practices ensures that my applications are
                        reliable and scalable.
                    </p>
                    <p>
                        Let's connect and collaborate! I'm eager to meet fellow tech
                        enthusiasts, mentors, and industry leaders. Together, we can
                        innovate and create solutions that shape the future of technology.
                        ✨🤝
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
