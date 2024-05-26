import Image from "next/image";
import footerBuilding from "./assets/footerBuilding.svg";
import Hack from "./assets/HO3 png 1.png"
import Center from "./assets/centerLine.svg";
import discord from "./assets/discord.svg";
import insta from "./assets/insta.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import centerLineImage from "./assets/centerLineMobile.svg";
export default function Home() {
  return (
    <>
     <div className="bg-black w-full overflow-hidden relative 2xl:-mt-20 pt-20 hidden lg:block">
      <Image src={footerBuilding} className="absolute object-cover block 2xl:block" alt="Building" />
      <div className="mt-60 relative">
        <div className="">
          <div className="grid grid-cols-4">
            <div className="ml-24 col-span-2">
              <Image src={Hack} className="w-310 h-113 mb-[48px] max-w-[20vw] lg:w-64" alt="HackOdisha Logo" />
            </div>
            <p className="text-[#06EBE5] lg:text-4xl text-2xl mb-2 text-center font-gvonz">
                Sitemap
              </p>
              <p className="text-[#06EBE5] lg:text-4xl text-2xl mb-2 text-center font-gvonz">
                Socials
              </p>
          </div>
          <div className="-m-16">
            <Image src={Center} alt="Line" />
          </div>
          <div className="grid grid-cols-4 text-white">
          <div className="flex flex-col gap-8 md:gap-20 col-span-2 ml-24 py-12 lg:text-2xl text-lg leading-loose">
                <p className="flex mt-12 font-syoog">
                  Want to Become a Sponsor <br /> of HackOdisha 3.0?
                </p>
              <a target="_blank" rel = "noreferrer" href="mailto:sponsorships@hackodisha.tech" >
                <button className=" bg-[#CA40CD] font-syoog rounded-[3.5rem] md:rounded-[3.5625rem] px-4 py-2  md:px-6 md:py-3 lg:px-12 lg:py-6 text-[#FFEAEA] text-sm 2xl:text-lg font-bold leading-[147%] hover:bg-fuchsia-400 ease-in duration-100 text-center w-fit">
                  Become a sponsor
                </button>
                </a>
              </div>
              <ul className="inline-flex flex-col lg:--mt-0 xl:-mt-0 mt-6 text-start w-fit mx-auto gap-4 text-base md:text-xl font-syoog">
                <a href="/home"><li className="hover:text-slate-500 cursor-pointer ">Home</li></a>
                <a href="/about-us"><li className="hover:text-slate-500 cursor-pointer ">
                  About us
                </li>
                </a>
                <a  href="/prizes"><li className="hover:text-slate-500 cursor-pointer ">Prizes</li></a>
                <a  href="mailto:mail@hackodisha.tech"><li className="hover:text-slate-500 cursor-pointer ">
                  Contact us
                </li></a>
                <a  href="/sponsors"><li className="hover:text-slate-500 cursor-pointer ">
                  Sponsors
                </li>
                </a>
                <a href="/faq"><li className="hover:text-slate-500 cursor-pointer ">FAQs</li></a>
              </ul>
              <ul className="inline-flex flex-col text-start w-fit mx-auto lg:--mt-2 xl:-mt-0 mt-6 gap-4 text-lg md:text-2xl">
                <li>
                       <a className="text-center mb-5" href="https://discord.gg/ewun7cxkJh">
                          <Image className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 brightness-200  hover:brightness-75 transition-all ease-in" src={discord} alt="Discord" />
                          </a>
                </li>
                <li>
                       <a className="text-center mb-5" href="https://www.instagram.com/webwiz.nitr/">
                        <Image className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 fill-[#8e8e8e] hover:brightness-75 transition-all ease-in" src={insta} alt="Instagram" />
                       </a>
                </li>
                <li>
                        <a className="text-center mb-5" href="https://www.linkedin.com/company/hackodisha3/">
                           <Image className="w-[2rem] h-[2rem] m-auto mb-5  hover:brightness-75 transition-all ease-in" src={linkedin} alt="LinkedIn" />
                       </a>
                </li>
                <li>
                      <a className="text-center mb-5" href="https://x.com/webwiznitr">
                        <Image className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  hover:brightness-75 transition-all ease-in" src={twitter} alt="Twitter" />
                      </a>
                </li>
              </ul>
          </div>
          <hr className=" opacity-25" />
            <h3 className="text-xl mx-auto w-fit py-10 text-white max-w-[90vw] text-center font-syoog">

              Hackodisha 3.0 2023. Powered by Webwiz, NIT Rourkela.

            </h3>
        </div>
      </div>
      </div>
      <div className=" bg-black overflow-hidden relative 2xl:-mt-20 pt-20 w-full lg:hidden">
      <Image src={footerBuilding} className=" absolute object-contain object-bottom " alt="Building" />
        <div className=" my-4">
          <Image src={centerLineImage} className=" w-full" alt="Line" />
        </div>
        <div>
          <div className=" w-fit mx-auto">
            <Image src={Hack} className="px-8 max-w-[60vw]"  width={310} height={113} alt="HackOdisha Logo" />
            <ul className=" inline-flex justify-between gap-8 ml-8 mt-6 text-lg sm:mx-2 lg:-ml-4 xl:-mt-12 md:text-2xl opacity-65">
              <li>
                <a href="https://discord.gg/ewun7cxkJh">
                <Image src={discord} className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  brightness-200  hover:brightness-75 transition-all ease-in" alt="Discord" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/webwiz.nitr/">
                <Image src={insta} className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  brightness-200  hover:brightness-75 transition-all ease-in" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/hackodisha3/">
                <Image src={linkedin} className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  brightness-200  hover:brightness-75 transition-all ease-in" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://x.com/webwiznitr">
                <Image src={twitter} className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  brightness-200  hover:brightness-75 transition-all ease-in" alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <Image src={centerLineImage} className=" w-full" alt="Line" />
          </div>
          <div className=" text-white flex flex-col text-sm leading-loose gap-6 items-center  mx-auto w-fit font-syoog">
               <p>
                Want to Become a Sponsor <br /> of HackOdisha 3.0?
              </p>
              <a href="mailto:sponsorships@hackodisha.tech">
              <button className=" bg-[#CA40CD] mb-4 rounded-[3.5rem] md:rounded-[3.5625rem] px-4 py-2 font-syoog  text-[#FFEAEA] text-[0.75rem] font-bold leading-[147%] hover:bg-fuchsia-400 ease-in duration-100 text-center w-fit">
                Become a sponsor
              </button>
              </a>
          </div>
          <hr className="px-4 opacity-25" />
            <h3 className="text-xs mx-auto w-fit py-10 text-white max-w-[90vw] text-center font-syoog">

              Hackodisha 3.0 2023. Powered by Webwiz, NIT Rourkela.

            </h3>
        </div>
      </div>
    </>
  );
}