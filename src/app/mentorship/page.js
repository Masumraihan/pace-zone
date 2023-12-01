"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-infinite-logo-slider";
import TabsComponent from "../components/TabComponent";
import Accordion from "../components/Accordion";

import mentor1 from "../../../public/mentors/mentor1.jpg";
import mentor2 from "../../../public/mentors/mentor2.jpg";
import mentor3 from "../../../public/mentors/mentor3.jpg";
import mentor4 from "../../../public/mentors/mentor4.jpg";
import mentor5 from "../../../public/mentors/mentor5.jpg";
import SingleMentorshipCard from "../components/SingleMentorshipCard";
import mentorshipPrograms from "../../../public/mentorship-data";

const Mentorship = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const images = [mentor1, mentor2, mentor3, mentor4, mentor5];

  const tabs = [
    {
      id: 0,
      tabName: "2 months course",
      tabContent: [
        "Strength work",
        "Specific strength work",
        "Speed work",
        "Bowling work",
        "Technical work",
        "Running mechanics work",
        "Line and length work",
      ],
      price: 12000,
    },
    {
      id: 1,
      tabName: "3 months course",
      tabContent: [
        "Strength work",
        "Specific strength work",
        "Speed work",
        "Bowling work",
        "Technical work",
        "Running mechanics work",
        "Line and length work",
      ],
      price: 16000,
    },
    {
      id: 2,
      tabName: "4 months course",
      tabContent: [
        "Strength work",
        "Specific strength work",
        "Speed work",
        "Bowling work",
        "Technical work",
        "Running mechanics work",
        "Line and length work",
      ],
      price: 20000,
    },
    {
      id: 3,
      tabName: "6 months course",
      tabContent: [
        "Strength work",
        "Specific strength work",
        "Speed work",
        "Bowling work",
        "Technical work",
        "Running mechanics work",
        "Line and length work",
      ],
      price: 25000,
    },
    {
      id: 4,
      tabName: "12 months course",
      tabContent: [
        "Strength work",
        "Specific strength work",
        "Speed work",
        "Bowling work",
        "Technical work",
        "Running mechanics work",
        "Line and length work",
      ],
      price: 45000,
    },
  ];

  const accordions = [
    {
      title: "experience lightning-fast loading times!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse. Cum expedita culpa, aut tempore recusandae cupiditate error omnis mollitia ratione eligendi id iure explicabo!",
    },

    {
      title: "best in designing",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse. Cum expedita culpa, aut tempore recusandae cupiditate error omnis mollitia ratione eligendi id iure explicabo!",
    },

    {
      title: "protect your site with hosting and SSL",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse. Cum expedita culpa, aut tempore recusandae cupiditate error omnis mollitia ratione eligendi id iure explicabo!",
    },
  ];

 

  return (
    <>
      <div className='2xl:container mx-auto border border-red-800'>
        <div className='relative max-h-[720px]'>
          <Image
            src='/mentorship6.png'
            priority
            className='w-full lg:h-[576px] md:h-[316px] sm:h-[236px] h-[156px]'
            width={1400}
            height={800}
            alt='mentorship-background'
          />
          <a
            href='#mentorship-program'
            className='absolute md:bottom-10 bottom-1 left-1/2 transform -translate-x-1/2 text-white w-fit mt-6 bg-primary px-6 py-2 rounded-xl shadow shadow-black active:scale-95 transition-all z-20'
          >
            Start Now
          </a>
        </div>

        <div className='container w-11/12 mx-auto border'>
          <div className='flex justify-center border py-10'>
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-center font-semibold w-fit'>
              Who we are?
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1418 125' fill='#6a48bf'>
                <path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path>
              </svg>
            </h1>
          </div>

          <div className=''>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 border border-red-400'>
              <div className='border'>
                <h1 className='lg:text-2xl md:text-2xl sm:text-xl text-lg font-semibold w-fit relative border flex flex-col text-gray-900'>
                  About mentorship <span className='absolute h-1 w-32 bg-primary -bottom-1'></span>
                </h1>
                <p className='text-justify mt-2 text-lg text-gray-700'>
                  This is for the athletes who are seriously looking to upgrade their bowling to a
                  whole new level. This mentosrhip programme is just not limited to your pace
                  development but also for physical, technical and tactical improvement. Our aim is
                  to develop you as complete bowler and make you ready for competitive cricket
                  overall.
                </p>
                <div className=' mt-4'>
                  <div className=''>
                    <ul className='flex gap-y-3 flex-col'>
                      {mentorshipPrograms.map((singleProgram) => (
                        <SingleMentorshipCard
                          key={singleProgram.title}
                          singleProgram={singleProgram}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center border'>
                <Image
                  src='/mentorship-about-us.png'
                  width={800}
                  height={800}
                  className='w-full h-auto drop-shadow-md'
                  alt='mentorship-about-us'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='2xl:container mx-auto bg-primary mt-12'>
          <div className='container w-11/12 mx-auto border pb-16 text-white'>
            <div className='flex justify-center border py-10'>
              <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center font-semibold w-fit'>
                Our Mentors
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1418 125' fill='#fff'>
                  <path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path>
                </svg>
              </h1>
            </div>
            <div className='overflow-hidden rounded-3xl shadow-xl bg-white'>
              <Slider
                width='250px'
                duration={30}
                pauseOnHover={true}
                blurBorders={true}
                blurBoderColor={"#f9f9f9"}
              >
                {images.map((img, index) => {
                  return (
                    <Slider.Slide key={index}>
                      <Image
                        src={img}
                        alt='mentors-images'
                        width={300}
                        height={300}
                        className='w-36'
                      />
                    </Slider.Slide>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>

        <div id='mentorship-program' className='container w-11/12 mx-auto border py-16'>
          <div className='flex justify-center border py-10'>
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center font-semibold w-fit'>
              Mentorship Program
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1418 125' fill='#6a48bf'>
                <path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path>
              </svg>
            </h1>
          </div>
          <div className='p-6 bg-white rounded-3xl shadow-2xl'>
            <h1 className='text-xl lg:text-left md:text-left sm:text-center text-center text-[#DD2A62] font-semibold'>
              MENTORSHIP PROGRAM
            </h1>
            <p className='text-gray-800 text-md lg:text-left md:text-left sm:text-center text-center mt-1'>
              First and foremost, bowling videos will be analysed of the particular bowler and
              according to that programmes will be designed
            </p>
            <TabsComponent tabs={tabs} />
          </div>
        </div>

        <div className='2xl:container mx-auto border py-16 bg-[rgba(0,226,196,0.4)]'>
          <div className='container w-11/12 mx-auto border'>
            <div className='py-5 lg:px-6 md:px-6 sm:px-8 px-10 bg-white rounded-3xl shadow-2xl'>
              <h1 className='text-xl text-gray-900 font-bold mb-6'>Frequently Asked Questions</h1>
              <div className=''>
                {accordions.map((accordion, index) => (
                  <Accordion
                    key={index}
                    title={accordion.title}
                    content={accordion.content}
                    isOpen={openIndex === index}
                    onClick={() => handleAccordionClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentorship;
