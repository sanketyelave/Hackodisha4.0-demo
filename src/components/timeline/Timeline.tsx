import React from "react";
import Image from "next/image";
import up from "./assets/up.png";
import down from "./assets/down.png";
import union from "./assets/union.svg";
export default function Timeline() {
    return (
        <div className="bg-[#181025]">
            <div id="upperImages" className="relative">
                <div>
                    <Image src={up} alt="up" />
                </div>
                <div className="absolute">
                    <header className="flex flex-col gap-2 ml-10 absolute bottom-10">
                        <h1 className="font-light title text-left leading-normal smallmobile:text-md text-[16px] sm:text-[28px] md:text-[40px]">
                            Timeline
                        </h1>
                        <div className="bg-[#0c9794] !h-2 "></div>
                    </header>
                    <Image src={union} alt="union" />
                </div>
                <div>
                    <Image src={down} alt="down" />
                </div>
            </div>
        </div>
    );
}
