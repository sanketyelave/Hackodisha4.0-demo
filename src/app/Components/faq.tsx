"use client"
import React from 'react';
import Image from 'next/image';
import "./faq.css"
interface i {
  id:number,
  faq:string,
  answer:string
}

const Faq = () => {
  return (
    <>
    <div className='Container h-full bg-faqback overflow-visible bg-bottom'>
        <div className="faqimage relative top-6 left-14 h-[60px] w-[170px] ">
           <Image src="/Images/Faq1.png" alt='faqimage' fill={true} />
        </div>
        <div className="Gaaraa relative top-10">
           <Image src="/Images/union1.svg" alt='line' height={1600} width={1600}/>
        </div>

          {data1.map ((item:i) =>{
            return (<div className=" faqcontent collapse collapse-plus font-gvonz rounded-[12px] shadow-[-3px_-2px_3px_1px_rgba(248,248,248,0.39)] relative top-20 w-[87rem] left-[3em] mb-5 " key={item.id}>
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title faqquestion text-3xl bg-black/10 ">
              <span className='mr-6 '>{"0"+item.id}</span>
              {item.faq}
                </div>
                <div className="collapse-content faqanswer text-2xl bg-white/[0.1]"> 
                  <p className='p-3'>{item.answer}</p>
                </div>
            </div>)
            }
          )
          }
          <br /><br />
          <br /><br />
    </div>
    </>
  )
}
const data1 = [
  {
    id: 1,
    faq: "What is a hackathon?",
    answer:
      "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
  },
  {
    id: 2,
    faq: "Can we work on old or ongoing project?",
    answer:
      "No, you have to start from scratch. You can use open source libraries and frameworks.",
  },
  {
    id: 3,
    faq: "How many members do we need in a team?",
    answer:
      "You can submit solo as well a team with at max 4 members can be formed.",
  },
  {
    id: 4,
    faq: "Registration costs?",
    answer:
      "Nada.",
  },
  {
    id: 5,
    faq: "Can I apply for multiple tracks?",
    answer:
      "Sure thing! Apply for all the tracks you want, like a kid in a candy store! 🏃🍭😄. Just make sure to be relevant.",
  },
  {
    id: 6,
    faq: "Who can participate?",
    answer:
      "Everyone is welcome to participate, be it, students, professionals, or aliens from different planets!",
  },
  {
    id: 7,
    faq: "Is physical presence required, or can we hack remotely?",
    answer:
      "Nah, no need for pants, go remote! 🏠😄",
  },
];

export default Faq
