import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyApps = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const getMyApps = async () => {
            const { data } = await axios.get(
                "https://portfolio-admin-panel-uyro.onrender.com/api/v1/softwareApplication/getAll",
                { withCredentials: true }
            );
            setApps(data.softwareApplications);
        };
        getMyApps();
    }, []);

    return (
        <div>
            <div className="w-full flex flex-col gap-8 sm:gap-12  ">
                <h1 className=" text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px]  text-tubeLight-effect dancing_text mx-auto w-fit ">
                    MY APPS
                </h1>
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  ">
                    {apps &&
                        apps.map((element) => {
                            return (
                                <Card
                                    className=" h-fit flex flex-col justify-center items-center gap-3  "
                                    key={element._id}
                                >
                                    <img
                                        src={element.svg && element.svg.url}
                                        alt={element.title}
                                        className="h-12 mt-2 sm:h-24 w-auto"
                                    />
                                    <p className="text-muted-foreground text-center">
                                        {element.name}
                                    </p>
                                </Card>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default MyApps;
