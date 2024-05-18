"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import up from "./assets/up.png";
import down from "./assets/down.png";
import union from "./assets/union.svg";
import gola from "./assets/Group 21.svg";
import side from "./assets/Group 26.svg";
import tower from "./assets/Tower.png";
export default function Timeline() {
    const timelineData = [
        {
            day: "Day 1",
            date: "September 9, 2023",
            details: [
                {
                    time: "7:30AM",
                    event: "check-in starts",
                },
                {
                    time: "7:30AM",
                    event: "Doors open for participants",
                },
                {
                    time: "8:00AM",
                    event: "Opening Ceremony",
                },
                {
                    time: "8:30AM",
                    event: "Hacking Starts",
                },
                {
                    time: "9:00AM",
                    event: "Team Building Event",
                },
                {
                    time: "12:00PM",
                    event: "Lunch Break",
                },
                {
                    time: "3:30PM",
                    event: "Fun Event 1",
                },
                {
                    time: "5:00PM",
                    event: "Hacker Hangout",
                },
                {
                    time: "8:00PM",
                    event: "Fun Event 2",
                },
            ],
            position: "left",
        },
        {
            day: "Day 2",
            date: "September 10, 2023",
            position: "right",
            details: [
                {
                    time: "12:00AM",
                    event: "Discord Catch-up session",
                },
                {
                    time: "12:00PM",
                    event: "Lunch Break",
                },
                {
                    time: "2:00PM",
                    event: "Fun Event 3",
                },
                {
                    time: "6:00 PM",
                    event: "Initial Submission Due Hacking ends",
                },
                {
                    time: "9:00 PM",
                    event: "(Submissions hard deadline)",
                },
                {
                    time: "9:20 PM",
                    event: "Closing ceremony",
                },
                {
                    time: "10:00 PM",
                    event: "Demo Starts",
                },
                {
                    time: "10:30 PM",
                    event: "Demo ends",
                },
                {
                    time: "11:00 PM",
                    event: "Event Ends",
                },
            ],
        },
        {
            day: "Day 3",
            date: "September 16, 2023",
            position: "left",
            details: [
                {
                    time: "6:00 PM",
                    event: "Winner Announcement",
                },
            ],
        },
    ];
    function isMobile() {
        return window.innerWidth < 768;
    }
    const [mobile, setMobile] = useState(0);
    // window.addEventListener("resize", () => {
    //     setMobile(isMobile());
    // });

    return (
        <div className="bg-[#181025] bg-opacity-20 pb-10 ">
            <header id="upperImages" className="relative">
                <div className="opacity-50">
                    <Image src={up} alt="up" />
                </div>
                <div className="absolute">
                    <header className="flex flex-col gap-2 ml-10 absolute bottom-10">
                        <h1 className="font-light title text-left text-lg sm:text-xl md:text-4xl">
                            Timeline
                        </h1>
                        <div className="bg-[#0c9794] h-2"></div>
                    </header>
                    <Image src={union} alt="union" />
                </div>
                <div className="opacity-50">
                    <Image src={down} alt="down" />
                </div>
            </header>
            <section className="px-24 relative">
                <Image
                    src={tower}
                    alt="tower"
                    className="object-contain object-center h-[110%] opacity-50 mix-blend-hard-light absolute -z-10"
                />
                <div className="relative pb-20 z-10 flex flex-col items-start justify-start">
                    <div className="timeline-line md:left-[50%] relative right-full md:right-0"></div>
                    {timelineData.map((data, index) => (
                        <div
                            className={`relative w-1/2 md:left-item ${
                                data.position === "left"
                                    ? mobile
                                        ? "right-item"
                                        : "left-item"
                                    : "right-item"
                            }`}
                            key={index}
                        >
                            <div className="flex flex-col justify-start items-start relative right-full md:right-0">
                                <div
                                    id="graphics"
                                    className={`flex items-center flex-row ${
                                        data.position === "left"
                                            ? mobile
                                                ? "flex-row-reverse right-graphics"
                                                : "left-graphics"
                                            : "flex-row-reverse right-graphics"
                                    }`}
                                >
                                    <div className="relative flex items-center justify-center">
                                        <div
                                            id="golaContainer"
                                            className="relative flex items-center justify-center"
                                        >
                                            <Image
                                                src={gola}
                                                alt="gola"
                                                className="scale-150 md:scale-100"
                                            />
                                            <span className="absolute lg:text-xl md:text-2xl text-xs inset-0 flex items-center justify-center">
                                                {data.day}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            data.position === "left"
                                                ? mobile
                                                    ? "right-arm"
                                                    : "left-arm"
                                                : "right-arm"
                                        }`}
                                    >
                                        <Image src={side} alt="side" />
                                    </div>
                                </div>
                                <div
                                    id="details"
                                    className="font-gonzLight mt-5 w-64 lg:w-full"
                                >
                                    <h2 className="text-base md:text-xl lg:text-4xl text-[#b137ba] text-center">
                                        {data.date}
                                    </h2>
                                    <div className="">
                                        {data.details.map((detail, idx) => (
                                            <div
                                                className="my-5 grid grid-cols-2 gap-2 md:gap-5 lg:gap-10 w-full md:w-96 lg:w-96 justify-between items-center md:items-start lg:items-start text-center md:text-left lg:text-left"
                                                key={idx}
                                            >
                                                <div>
                                                    <p className="text-xs md:text-base lg:text-2xl">
                                                        {detail.time}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs md:text-base lg:text-2xl  capitalize md:w-96 text-right">
                                                        {detail.event}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
