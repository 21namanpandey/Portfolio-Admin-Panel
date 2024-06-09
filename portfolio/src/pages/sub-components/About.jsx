import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getMyProfile = async () => {
            const { data } = await axios.get(
                "http://localhost:4000/api/v1/user/me/portfolio",
                { withCredentials: true }
            );
            setUser(data.user);
        };
        getMyProfile();
    }, []);
    return (
        <div className="w-full flex flex-col overflow-x-hidden ">
            <div className="relative">
                <h1
                    className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold  "
                    style={{ background: "hsl(222.2 84% 4.9%)" }}
                >
                    ABOUT
                    <span className="text-tubeLight-effect font-extrabold">
                        ME
                    </span>
                </h1>
                <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200 "></span>
            </div>
            <div>
                <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
                    <div className="flex justify-center items-center ">
                        <img
                            src={user.avatar && user.avatar.url}
                            alt={user.fullName}
                            className=" bg-white p-2 sm:p-4 h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] "
                        />
                    </div>
                    <div className=" flex justify-center flex-col tracking-[1px] text-xl gap-5 ">
                        <p>
                            I have a profound passion for programming and an
                            insatiable thirst for the latest technological
                            developments. From MERN Full Stack Web Development
                            to mastering Java, Python, C, and unraveling the
                            secrets of Data Structures and Algorithms (DSA), I'm
                            always on the lookout for new challenges and
                            exciting opportuniti.🔍💻
                        </p>
                        <p>
                            I'm a curious and creative undergraduate Computer
                            Science and Engineering student pursuing my B.Tech
                            degree at Rajkiye Engineering College Sonbhadra.
                            💡🚀
                        </p>
                    </div>
                </div>
                <div className="gap-5 flex flex-col tracking-[1px] text-xl">
                    <p className=" tracking-[1px] text-xl ">
                        Join me on this exhilarating journey as I dive into the
                        world of code and unleash my potential. Together, let's
                        shape the future through innovation, collaboration, and
                        relentless curiosity. 🌟👨‍💻{" "}
                    </p>
                    <p className=" tracking-[1px] text-xl  ">
                        If you share my love for tech, let's connect! I'm eager
                        to meet fellow professionals, mentors, and trailblazers
                        in the industry. Together, we can create magic and make
                        a lasting impact! ✨🤝
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
