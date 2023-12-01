import Image from 'next/image';
import React from 'react';
import CircleDotIcon from "../../../public/icons/circle-dot.svg";
import PhyTabsComponent from '../components/PhyTabsComponent';

const PhysiqueTransformation = () => {

  const tabs = [
    {
      id: 0,
      tabName: "2 months course",
      tabContent: ["Strength work", "Specific strength work", "Speed work", "Bowling work", "Technical work", "Running mechanics work", "Line and length work"],
      price: 12000
    },
    {
      id: 1,
      tabName: "3 months course",
      tabContent: ["Strength work", "Specific strength work", "Speed work", "Bowling work", "Technical work", "Running mechanics work", "Line and length work"],
      price: 16000
    },
    {
      id: 2,
      tabName: "4 months course",
      tabContent: ["Strength work", "Specific strength work", "Speed work", "Bowling work", "Technical work", "Running mechanics work", "Line and length work"],
      price: 20000
    },
    {
      id: 3,
      tabName: "6 months course",
      tabContent: ["Strength work", "Specific strength work", "Speed work", "Bowling work", "Technical work", "Running mechanics work", "Line and length work"],
      price: 25000
    },
    {
      id: 4,
      tabName: "12 months course",
      tabContent: ["Strength work", "Specific strength work", "Speed work", "Bowling work", "Technical work", "Running mechanics work", "Line and length work"],
      price: 45000
    },
  ]

  return (
    <>
      <div className='2xl:container mx-auto border border-red-400 relative'>
        <div className="border max-h-[720px]">
          <Image src="/phy-bg2.jpg" className='w-full lg:h-[576px] md:h-[316px] sm:h-[236px] h-[236px] z-0 relative' width={1400} priority height={800} alt='physique-background' />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center top-0 gap-y-10 mx-auto border border-blue-500 absolute z-20">
          <span className='bg-black/30 absolute w-full h-full'></span>
          <div className="container w-11/12 mx-auto flex h-auto flex-col items-center gap-y-2 relative">
            <span className='text-white text-center text-lg uppercase underline underline-offset-4'>Course</span>
            <h1 className='text-white text-center uppercase lg:text-5xl md:text-4xl sm:text-3xl text-[20px] font-bold drop-shadow relative z-20 tracking-wide'>
              <span className='font-light mix-blend-screen'>Physique</span> transformation
            </h1>
            <span className='text-white text-center lg:text-md md:text-md sm:text-sm text-sm tracking-wide font-normal capitalize '>comprehensive fitness program designed to empower athletes</span>
            <a href='#pricing' className='text-white w-fit mt-6 bg-primary px-6 py-2 rounded-xl shadow shadow-black active:scale-95 transition-all z-20'>Start Now</a>
          </div>

        </div>
      </div>

      {/* mobile strength container */}
      <div className="2xl:container lg:hidden md:hidden sm:flex flex mx-auto border py-2 mt-8">
        <div className="container w-10/12 mx-auto border">
          <div className="flex flex-col items-center gap-y-2">
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold uppercase text-center'>your strength & conditioning coach</h1>
            <p>The best coach you can have is yourself.</p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div className="h-[400px] w-[100%] flex bg-black"></div>
            <div className="mt-16 h-full border flex flex-col items-center text-center">
              <h1 className='text-3xl font-bold'>Transformation</h1>
              <div className="flex flex-col gap-y-4 mt-4">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque excepturi magni, minus autem in maxime!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque excepturi magni, minus autem in maxime!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque excepturi magni, minus autem in maxime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Material */}
      <div className='2xl:container mx-auto border border-red-400 relative lg:my-0 md:my-4 sm:my-4 my-2'>
        <div className="2xl:container w-full mx-auto border">
          <div className="flex justify-center border py-10">
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center font-semibold w-fit'>Course Material<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1418 125' fill='#6a48bf'><path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path></svg></h1>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
              <div className="border flex">
                <Image src="/phy-transformation-course/fitness-man-running-sunrise.jpg" alt='transformation-course-bg' width={1000} height={1000} />
              </div>
              <div className="border lg:py-8 md:py-8 sm:py-16 py-16 px-10 bg-neutral-800 text-white lg:order-2 md:order-2 sm:order-1 order-1">
                <h1 className='lg:text-2xl font-medium flex flex-col w-fit gap-y-1'>Introduction & Course Overview <span className='h-1 w-[65%] bg-white'></span></h1>
                <div className="flex flex-col gap-y-4 mt-4">
                  <p className='text-md text-justify'>
                    The Physique Transformation Course is a comprehensive fitness program designed to empower athletes and the general population to achieve remarkable changes in their bodies, focusing on fat loss, muscle building, and overall athletic improvement. This transformative journey is meticulously crafted to deliver results that not only enhance physical appearance but also boost confidence and well-being.
                  </p>
                  <p className='text-md text-justify'>The course encompasses a 12-week curriculum that combines cutting-edge training methods, nutrition guidance, and personalized coaching to help participants unlock their full physical potential. This program is suitable for individuals of all fitness levels, whether they are beginners seeking to kickstart their fitness journey or seasoned athletes aiming to elevate their performance and aesthetics.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
              <div className="border flex lg:order-2 md:order-2 sm:order-1 order-1">
                <Image src="/phy-transformation-course/Nutritional-Guidance.jpg" className='w-full' alt='transformation-course-bg' width={500} height={500} />
              </div>
              <div className="border lg:py-8 md:py-8 sm:py-16 py-16 px-10 lg:order-1 md:order-1 sm:order-2 order-2">
                <span className='text-rose-400'>Key Components:</span>
                <h1 className='lg:text-2xl font-medium'>Customized Training Regimen</h1>
                <div className="flex flex-col gap-y-4 mt-4">
                  <p className='text-md text-justify'>Tailored workout plans designed to address specific physique goals, whether it&apos;s sculpting lean muscles or shedding excess body fat. Progressive resistance training to stimulate muscle growth and increase metabolic rate. Varied and challenging exercises to keep participants engaged and motivated.</p>
                  <span className='my-1 lg:text-2xl font-medium'>Nutritional Guidance</span>
                  <p className='text-md text-justify'>Individualized meal plans catering to dietary preferences and restrictions. Focus on macronutrient balance and portion control for sustainable fat loss. Education on the importance of proper nutrition for muscle recovery and overall health</p>
                </div>
              </div>
            </div>


            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
              <div className="border flex lg:order-1 md:order-1 sm:order-1 order-1">
                <Image src="/phy-transformation-course/Lifestyle-Optimization.jpg" className='w-full' alt='transformation-course-bg' width={500} height={500} />
              </div>
              <div className="border lg:py-8 md:py-8 sm:py-16 py-16 px-10 bg-neutral-800 text-white lg:order-2 md:order-2 sm:order-2 order-2">
                <h1 className='lg:text-2xl font-medium'>Goal Tracking and Accountability</h1>
                <div className="flex flex-col gap-y-4 mt-4">
                  <p className='text-md text-justify'>Weekly check-ins and progress assessments to monitor changes in body composition. Constant support and guidance from certified trainers to ensure participants stay on track. Community support through forums or social media groups for motivation and camaraderie.</p>
                  <span className='my-1 lg:text-2xl font-medium'>Lifestyle Optimization</span>
                  <p className='text-md text-justify'>Stress management techniques to reduce cortisol levels and support fat loss. Adequate sleep and recovery strategies to promote muscle growth and overall well-being. Strategies for maintaining long-term results and preventing plateaus.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
              <div className="border flex lg:order-2 md:order-2 sm:order-1 order-1">
                <Image src="/phy-transformation-course/fitness.jpg" className='w-full' alt='transformation-course-bg' width={500} height={500} />
              </div>
              <div className="border lg:py-8 md:py-8 sm:py-16 py-16 px-10 lg:order-1 md:order-1 sm:order-1 order-1">
                <h1 className='lg:text-2xl font-medium'>Benefits</h1>
                <div className="flex flex-col gap-y-4 mt-4">
                  <p className='text-md text-justify'>Participants in the Physique Transformation Course can expect to experience a wide range of benefits, including:</p>
                  <ul className=' flex flex-col gap-y-2'>
                    <li className='text-md py-2 px-2 rounded-md grid grid-flow-col place-items-center place-content-start gap-x-2'>
                      <Image src={CircleDotIcon} width={14} height={14} alt='CircleDotIcon' /> Significant fat loss and increased muscle definition.</li>
                    <li className='text-md py-2 px-2 rounded-md grid grid-flow-col place-items-center place-content-start gap-x-2'>
                      <Image src={CircleDotIcon} width={14} height={14} alt='CircleDotIcon' /> Enhanced athletic performance, agility, and endurance.</li>
                    <li className='text-md py-2 px-2 rounded-md grid grid-flow-col place-items-center place-content-start gap-x-2'>
                      <Image src={CircleDotIcon} width={14} height={14} alt='CircleDotIcon' /> Boosted self-esteem and body confidence.</li>
                    <li className='text-md py-2 px-2 rounded-md grid grid-flow-col place-items-center place-content-start gap-x-2'>
                      <Image src={CircleDotIcon} width={14} height={14} alt='CircleDotIcon' /> Improved overall health and vitality.</li>
                    <li className='text-md py-2 px-2 rounded-md grid grid-flow-col place-items-center place-content-start gap-x-2'>
                      <Image src={CircleDotIcon} width={14} height={14} alt='CircleDotIcon' /> Knowledge and skills for maintaining a healthy lifestyle beyond the course.</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
              <div className="border flex">
                <Image src="/phy-transformation-course/side-view-man-doing-sport-with-stats.jpg" className='w-full' alt='transformation-course-bg' width={500} height={500} />
              </div>

              <div className="border lg:py-8 md:py-8 sm:py-16 py-16 px-10 bg-neutral-800 text-white">
                <h1 className='lg:text-2xl font-medium'>Conclusion</h1>
                <div className="flex flex-col gap-y-4 mt-4">
                  <p className='text-md text-justify'>The Physique Transformation Course is a holistic fitness program that goes beyond aesthetics to address the fundamental aspects of health and well-being. By combining cutting-edge training techniques, personalized nutrition, and unwavering support, participants will embark on a transformative journey towards their dream physique. Whether you&apos;re an athlete looking to enhance your performance or an individual seeking a healthier, more toned physique, this course is the roadmap to achieving your fitness goals. Join us today and experience the incredible transformation that awaits you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Pricing */}
      <div id='pricing' className="container w-11/12 mx-auto border py-16">
        <div className="flex justify-center items-center">
          <h1 className='text-3xl text-center font-semibold w-fit'>Pricing<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1418 125' width={"140px"} fill='#6a48bf'><path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path></svg></h1>
        </div>
        <div className="p-6 bg-white rounded-3xl shadow-2xl">
          <h1 className='text-xl lg:text-left md:text-left sm:text-center uppercase text-center text-[#DD2A62] font-semibold'>Physique transformation program</h1>
          <p className='text-gray-800 text-md lg:text-left md:text-left sm:text-center text-center mt-1'>First and foremost, bowling videos will be analysed of the particular bowler and according to that programmes will be designed</p>
          <PhyTabsComponent tabs={tabs} />
        </div>
      </div>
    </>
  )
}

export default PhysiqueTransformation