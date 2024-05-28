import Image from "next/image";
import "./page.css";

export default function home() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
      <body>
        <div className="body absolute text-2xl ">
          <p className=" about text-5xl text-teal-400 pt-5 pl-10"> About us </p>
          <div className="pt-10 border-b-2 border-teal-400">
            <hr />
          </div>
          <img className=" round absolute w-96 opacity-40 my-16 mx-5 " src="https://www.hackodisha.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcircle-anim.fbd86c5f.gif&w=3840&q=75" />
          <img className=" ho3 absolute my-80 mx-48 " src="https://www.hackodisha.tech/Images/HO3.svg" />
          <div className="relative">
            <img className="building absolute pt-40 opacity-45  w-full  block " src="https://www.hackodisha.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcityscape-1.9760960e.webp&w=640&q=75" />
          </div>
          <div className="para pt-20 text-xl text-justify mx-24 pl-72 ">
            <p className=" ml-60">HackOdisha- a thrilling <span class=" ex ">36-hour online hackathon </span>organized by <span class="ex">Webwiz, Nit Rourkela</span>— an event dedicated to fostering community collaboration. With an impressive turnout of<span class="ex"> 3100 + participants in HackOdisha 2.0 </span> & <span class="ex">1600 + participants in HackOdisha 1.0 </span>across India, this hackathon promises to be a platform where innovation knows no bounds.</p>
            <br />
            <p className="ml-60"> Here, we witness groundbreaking projects spanning many fields, including healthcare, education, environment, women's security, and much more. Our participants bring their unique perspectives and expertise to address real-world challenges in these critical areas.</p>
            <br />
            <p className="ml-60">We celebrate the power of technology and the indomitable spirit of our participants. Together, we're shaping a brighter future through innovation and collaboration.</p>
          </div>
          <img className="building absolute opacity-45  w-full  block" src="https://www.hackodisha.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcityscape-2.25c40ddf.webp&w=3840&q=75" />
          <p className="post text-5xl text-teal-400 pt-5 pl-10"> Post Statistics </p>
          <br />
          <img src="https://www.hackodisha.tech/_next/static/media/union1.491f81a6.svg" alt="" />
          


        </div>








      </body>

    </>


  );
}