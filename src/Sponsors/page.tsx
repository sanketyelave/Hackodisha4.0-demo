
export default function Home() {
    return (
      <div className="w-full h-screen">
        {/* <img src="/mergeimagefinal.jpg" className="relative w-full "/> */}
        <div className="fullcontent w-full bg-[url('/mergeimageoverlaylast.jpg')] object-container object-center">
        <div className="sponsorSection w-full">
          <div className="SponsorTitle sm:text-[1.75rem] md:text-[2rem] lg:text-[3.25rem] text-[1.5rem] sm:mx-8 lg:mx-16 mx-4 underline underline-offset-[2px] sm:underline-offset-[8px] lg:underline-offset-[16px] text-[#0C9794] pt-4"><p className="text-[#0C9794]">Sponsors</p></div>
          <div><img src="/Union.svg" className="w-full mb-8"/></div>
        </div>
  
        <div className="PlatinumSection ">
          <div className="PlatinumTitle border-y-4 border-l-4 border-white-800 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
            <p className="sm:text-[2rem] md:text-[1.8rem] lg:text-[3rem] text-[1.9rem] ml-8 pt-8 pb-8 text-[#CA40CD] font-bold">{data[0].level}</p>
          </div>
          
          <div className="PlatinumTitleImages flex sm:flex-row flex-col items-center sm:justify-center border-r-4 border-b-4 border-white-800 pt-4 pb-4 sm:pt-12 sm:pb-12 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
          {data[0].list.map((item,key)=>(
            <div key={key} className="sm:w-48 sm:h-48 w-32 h-32 sm:mr-24 mb-4">
              <img key={key}src={item.src} alt={item.level} className="w-full h-full object-contain object-center"/>
            </div>
          ))}
          </div>
        </div>
        <div className="Gold Section">
          <div className="GoldTitle border-l-4 border-b-4 border-white-800 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
            <p className="sm:text-[2rem] md:text-[1.8rem] lg:text-[3rem] text-[1.9rem] ml-8 pt-8 pb-8 text-[#CA40CD] font-bold">{data[1].level}</p>
          </div>
          <div className="GoldTitleImages flex sm:flex-row flex-col items-center sm:justify-center border-r-4 border-b-4 border-white-800 pt-4 pb-4 sm:pt-12 sm:pb-12 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
          {data[1].list.map((item,key)=>(
            <div key={key} className="sm:w-32 sm:h-32 w-24 h-24 sm:mr-24 mb-4">
              <img key={key}src={item.src} alt={item.level} className="w-full h-full object-contain object-center"/>
            </div>
          ))}
          </div>
        </div>
        <div className="Silver Section">
          <div className="SilverTitle border-l-4 border-b-4 border-white-800 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
            <p className="sm:text-[2rem] md:text-[1.8rem] lg:text-[3rem] text-[1.9rem] ml-8 pt-8 pb-8 text-[#CA40CD] font-bold">{data[2].level}</p>
          </div>
          <div className="SilverTitleImages flex sm:flex-row flex-col items-center sm:justify-center border-r-4 border-b-4 border-white-800 pt-4 pb-4 sm:pt-12 sm:pb-12 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
          {data[2].list.map((item,key)=>(
            <div key={key} className="sm:w-32 sm:h-32 w-24 h-24 sm:mr-24 mb-4">
              <img key={key}src={item.src} alt={item.level} className="w-full h-full object-contain object-center"/>
            </div>
          ))}
          </div>
        </div>
        <div className="Bronze Section">
          <div className="BronzeTitle border-l-4 border-b-4 border-white-800 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
            <p className="sm:text-[2rem] md:text-[1.8rem] lg:text-[3rem] text-[1.9rem] ml-8 pt-8 pb-8 text-[#CA40CD] font-bold">{data[3].level}</p>
          </div>
          <div className="BronzeTitleImages flex sm:flex-row flex-col items-center sm:justify-center border-r-4 border-b-4 border-white-800 pt-4 pb-4 sm:pt-12 sm:pb-12 sm:ml-12 sm:mr-12 ml-2 mr-2 border-[#411446]">
          {data[3].list.map((item,key)=>(
            <div key={key} className="sm:w-32 sm:h-32 w-24 h-24 sm:mr-24 mb-4">
              <img key={key}src={item.src} alt={item.level} className="w-full h-full object-contain object-center"/>
            </div>
          ))}
          </div>
        </div>
        </div>  
      </div>
    );
  }
  
  
  const data = [
    {
    level:"Platinum Sponsors",
    list:[
      {
      name:"solana",
      alt:"Solana Image",
      src:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/solana_logo.jpeg.jpg"
      },
      {
      name:"Devfolio",
      alt:"Devfolio Image",
      src:"https://cdn.iconscout.com/icon/free/png-256/free-devfolio-1649779-1399882.png?f=webp"
      },
      {
      name:"Algozenith",
      alt:"Algozenith Image",
      src:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/BLUE%2520AZ%2520LOGO.png"
      },
      {
      name:"Polygon",
      alt:"Polygon Image",
      src:"https://i.pinimg.com/474x/9b/1e/97/9b1e977d00b5d887608b156705a10759.jpg"
      },
     ]
    },
    {
    level:"Gold Sponsors",
    list:[
      {
      name:"solana",
      alt:"Solana Image",
      src:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/solana_logo.jpeg.jpg"
      },
      {
      name:"Devfolio",
      alt:"Devfolio Image",
      src:"https://cdn.iconscout.com/icon/free/png-256/free-devfolio-1649779-1399882.png?f=webp"
      },
      {
      name:"Algozenith",
      alt:"Algozenith Image",
      src:"https://miro.medium.com/v2/resize:fit:2400/1*1bmmA88dVbYzsS-K6_FMgQ.png"
      },
      {
      name:"Polygon",
      alt:"Polygon Image",
      src:"https://exchange4media.gumlet.io/news-photo/120865-main42.jpg?w=400&dpr=2.6"
      },
     ]
    },
    {
    level:"Silver Sponsors",
    list:[
      {
      name:"solana",
      alt:"Solana Image",
      src:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/solana_logo.jpeg.jpg"
      },
      {
      name:"Devfolio",
      alt:"Devfolio Image",
      src:"https://cdn.iconscout.com/icon/free/png-256/free-devfolio-1649779-1399882.png?f=webp"
      },
      {
      name:"Algozenith",
      alt:"Algozenith Image",
      src:"https://miro.medium.com/v2/resize:fit:2400/1*1bmmA88dVbYzsS-K6_FMgQ.png"
      },
      {
      name:"Polygon",
      alt:"Polygon Image",
      src:"https://exchange4media.gumlet.io/news-photo/120865-main42.jpg?w=400&dpr=2.6"
      },
     ]
    },
    {
    level:"Bronze Sponsors",
    list:[
      {
      name:"solana",
      alt:"Solana Image",
      src:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/solana_logo.jpeg.jpg"
      },
      {
      name:"Devfolio",
      alt:"Devfolio Image",
      src:"https://cdn.iconscout.com/icon/free/png-256/free-devfolio-1649779-1399882.png?f=webp"
      },
      {
      name:"Algozenith",
      alt:"Algozenith Image",
      src:"https://miro.medium.com/v2/resize:fit:2400/1*1bmmA88dVbYzsS-K6_FMgQ.png"
      },
      {
      name:"Polygon",
      alt:"Polygon Image",
      src:"https://exchange4media.gumlet.io/news-photo/120865-main42.jpg?w=400&dpr=2.6"
      },
     ]
    },
  ]