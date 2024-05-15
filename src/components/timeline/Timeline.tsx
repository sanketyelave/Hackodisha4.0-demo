import React from "react";
import Image from "next/image";
import up from "./assets/up.png";
import down from "./assets/down.png";
import union from "./assets/union.svg";
import gola from "./assets/Group 21.svg";
import side from "./assets/Group 26.svg";
export default function Timeline() {
    return (
        <div className="bg-[#181025] bg-opacity-50">
            <header id="upperImages" className="relative">
                <div className="opacity-50">
                    <Image src={up} alt="up" />
                </div>
                <div className="absolute">
                    <header className="flex flex-col gap-2 ml-10 absolute bottom-10">
                        <h1 className="font-light title text-left leading-normal smallmobile:text-md text-lg sm:text-xl md:text-4xl">
                            Timeline
                        </h1>
                        <div className="bg-[#0c9794] h-2 "></div>
                    </header>
                    <Image src={union} alt="union" />
                </div>
                <div className="opacity-50">
                    <Image src={down} alt="down" />
                </div>
            </header>
            <main className="px-20 w-full flex flex-row justify-center">
                <div className="flex items-center">
                    <div id="graphics" className="flex flex-col items-center">
                        <div className="relative flex items-center justify-center flex-col">
                            <div
                                id="golaContainer"
                                className="relative flex items-center justify-center"
                            >
                                <Image src={gola} alt="gola" />
                                <span className="absolute text-3xl inset-0 flex items-center justify-center">
                                    DAY 1
                                </span>
                            </div>
                            <div
                                id="details"
                                className="font-gonzLight z-10 mt-2"
                            >
                                <h2 className="text-4xl text-[#b137ba]">
                                    September 9, 2023
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div id="sidearm" className="opacity-60 ml-4">
                        <Image src={side} alt="side" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="rounded-full h-10 w-10 bg-[#07d6d1] opacity-60"></div>
                    <div className="h-96 w-2 bg-[#07d6d1] opacity-60"></div>
                    <div className="rounded-full h-10 w-10 bg-[#07d6d1] opacity-60"></div>
                </div>
            </main>
        </div>
    );
}
