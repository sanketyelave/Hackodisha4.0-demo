import React from 'react'
import Image from '../../../../node_modules/next/image'
import title from "./assets/title.svg"
import titleLine from "./assets/titleLine.svg"
import titleUnderline from "./assets/titleUnderline.svg"
import vertical from "./assets/verticalBar.svg"
import leftBar from "./assets/leftBar.svg"
import rightBar from "./assets/rightBar.svg"
import leftCircle from "./assets/leftCircle.svg"
import day1 from "./assets/day1.svg"
import day2 from "./assets/day2.svg"
import day3 from "./assets/day3.svg"
import leftTopDate from "./assets/leftTopDate.svg"
import leftBottomDate from "./assets/leftBottomDate.svg"
import leftTopText from "./assets/lefTopText.svg"
import leftBottomText from "./assets/leftBottomText.svg"
import rightText from "./assets/rightText.svg"
import rightDate from "./assets/rightDate.svg"

function Timeline() {
  return (
    <div className='pt-12 bg-[url(./components/Timeline/assets/background.png)] bg-center w-full'>

      <div id="foreground" className='relative z-5'>

      <div id="title" className='relative w-[250px] h-[100px] ml-10'>
        <Image src={title} alt='' layout='fill' className=''></Image>
      </div>

        <div id="title" className='relative w-[195px] h-[100px] my-[-70px] ml-12'>
          <Image src={titleUnderline} alt='' layout='fill' className=''></Image>
        </div>

        <div id="title-underline" className='relative h-[14rem] w-full mt-[-125px]'>
          <Image src={titleLine} alt='' layout='fill' className=''></Image>
        </div>


      <div id="svgs" className='mobile:h-[125dvh] sm:h-[150dvh] md:h-[200dvh] lg:h-[275dvh] md:max-h-[2050px] w-full flex flex-wrap justify-center'>
          
          <div id="left" className='h-full w-[47.5%] hidden md:block'>
            <div id="one" className='h-1/3 w-full'>

              <div id="wrapper" className='flex justify-end mr-[-2.5dvw]'>
                <div id="leftCircle" className='flex justify-center items-center w-fit'>
                  <Image src={leftCircle} alt=""/>
                  <Image src={day1} alt="" className='absolute max-w-12 sm:max-w-20 md:max-w-28'/>
                </div>
                <Image src={leftBar} alt="" className='w-[60%] shrink-0'/>
              </div>

              <Image src={leftTopDate} alt="" className='mx-auto my-8 lg:w-auto w-3/4' />
              <Image src={leftTopText} alt="" className='mx-auto w-3/4' />              

            </div>
            <div id="one" className='h-1/3 w-full'></div>
            <div id="one" className='h-1/3 w-full flex flex-col justify-center'>

              <div id="wrapper" className='flex justify-end mr-[-2.5dvw]'>
                <div id="leftCircle" className='flex justify-center items-center w-fit'>
                  <Image src={leftCircle} alt=""/>
                  <Image src={day3} alt="" className='absolute max-w-12 sm:max-w-20 md:max-w-28'/>
                </div>
                <Image src={leftBar} alt="" className='w-[60%] shrink-0'/> 
              </div>

              <Image src={leftBottomDate} alt="" className='mx-auto my-8 lg:w-auto w-3/4' />
              <Image src={leftBottomText} alt="" className='mx-auto w-3/4' />
            </div>

          </div>

          <div id="middle" className='h-full w-[5%]'>            
            <div id="one" className='h-full w-full flex justify-center items-start'>
              <Image src={vertical} alt="" className='max-h-full'/>
            </div>
          </div>
          
          <div id="right" className='h-full w-[47.5%] flex justify-center flex-col'>
            <div id="one" className='h-1/3 w-full md:hidden'>
              

              <div id="wrapper" className='flex justify-start ml-[-2.5dvw]'>
                <Image src={rightBar} alt="" className='w-[60%] shrink-0'/>
                <div id="leftCircle" className='flex justify-center items-center w-fit'>
                  <Image src={leftCircle} alt="" className='rotate-[-144deg]'/>
                  <Image src={day1} alt="" className='absolute max-w-12 sm:max-w-20 md:max-w-28'/>
                </div>
              </div>

              <Image src={leftTopDate} alt="" className='mx-auto my-8 lg:w-auto w-3/4' />
              <Image src={leftTopText} alt="" className='mx-auto w-3/4' />              

            </div>
            <div id="one" className='h-1/3 w-full'>

              <div id="wrapper" className='flex justify-start ml-[-2.5dvw]'>
                <Image src={rightBar} alt="" className='w-[60%] shrink-0'/>
                <div id="leftCircle" className='flex justify-center items-center w-fit'>
                  <Image src={leftCircle} alt="" className='rotate-[-144deg]'/>
                  <Image src={day2} alt="" className='absolute max-w-12 sm:max-w-20 md:max-w-28'/>
                </div>                
              </div>

              <Image src={rightDate} alt="" className='mx-auto my-8 lg:w-auto w-3/4' />
              <Image src={rightText} alt="" className='mx-auto w-3/4' />              


            </div>
            <div id="one" className='h-1/3 w-full flex flex-col justify-center md:hidden'>

              <div id="wrapper" className='flex justify-start ml-[-2.5dvw]'>
                <Image src={rightBar} alt="" className='w-[60%] shrink-0'/> 
                <div id="leftCircle" className='flex justify-center items-center w-fit'>
                  <Image src={leftCircle} alt="" className='rotate-[-144deg]'/>
                  <Image src={day3} alt="" className='absolute max-w-12 sm:max-w-20 md:max-w-28'/>
                </div>
              </div>

              <Image src={leftBottomDate} alt="" className='mx-auto my-2 lg:w-auto w-3/4' />
              <Image src={leftBottomText} alt="" className='mx-auto w-3/4' />

            </div>
          </div>

      </div>

    </div>

    </div>
  )
}

export default Timeline