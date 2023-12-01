"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Iframe from 'react-iframe';


const AboutPacezone = () => {

  return (
    <>
      <div className="container w-11/12 border mx-auto py-16 border-blue-600">
        <div className="flex justify-center border">
          <h1 className='my-6 w-fit lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center text-white font-medium flex flex-col justify-center items-center gap-y-1'>What is PaceZone all about?
            <svg xmlns='http://www.w3.org/2000/svg' width="200px" viewBox='0 0 1418 125' fill='#fff'><path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path></svg>
          </h1>
        </div>
        <div className="flex justify-center my-10 border">

          {/*<Iframe url="https://d381z9mwi3nmum.cloudfront.net/media/pacezone/IMG_8678.MP4"

            id="F0_aypvtW8Y"
            title='Best yorkers in WC'
            className="rounded-2xl shadow lg:w-[640px] md:w-[640px] sm:w-full w-full lg:h-[360px] md:h-[350px] sm:h-[330px] h-[300px]"
            display="block"
            position="relative" />*/}
          <video controls
            autoPlay={true}
            muted
            preload='none'
            className="rounded-2xl shadow lg:w-[640px] md:w-[640px] sm:w-full w-full lg:h-[360px] md:h-[350px] sm:h-[330px] h-[300px]"
            src="https://d381z9mwi3nmum.cloudfront.net/media/pacezone/IMG_8678.MP4"
            loading="lazy"
            playsInline></video>
        </div>

        <div className="border mt-20 ">
          <div className="flex flex-col items-center gap-y-2 mb-8">
            <h1 className='w-fit lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center text-white font-medium flex flex-col justify-center items-center gap-y-1'>Choose your journey
              <svg xmlns='http://www.w3.org/2000/svg' width="160px" viewBox='0 0 1418 125' fill='#fff'><path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path></svg>
            </h1>
            <span className='text-white lg:text-md md:text-md sm:text-sm text-sm text-center'>Your pathway to success from beginner to elite Coach.</span>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
            <div className="min-h-[260px] relative">
              <Link href="/mentorship"><Image src="https://i.postimg.cc/8C5GnmSV/mentorship.png" width={400} height={500} className='rounded-2xl shadow w-full grayscale hover:grayscale-0 transition-all h-full' alt='journey-images' /></Link>
              <Link href="/mentorship" className='w-full py-4 hover:underline underline-offset-4 transition-all px-2 uppercase font-bold text-2xl text-neutral-100 text-center absolute left-0 bottom-0 bg-black/40 rounded-b-2xl'>Mentorship</Link>
            </div>
            <div className="min-h-[260px] relative">
              <Link href="/courses"><Image src="/journey-courses.png" width={400} height={500} className='rounded-2xl shadow w-full grayscale hover:grayscale-0 transition-all h-full' alt='journey-images' /></Link>
              <Link href="/courses" className='w-full py-4 px-2 hover:underline underline-offset-4 transition-all uppercase font-bold text-2xl text-neutral-100 text-center absolute left-0 bottom-0 bg-black/40 rounded-b-2xl'>Courses</Link>
            </div>
            <div className="min-h-[260px] relative">
              <Link href="/physique-transformation"><Image src="/journey-physique.png" width={800} height={800} className='rounded-2xl shadow w-full grayscale hover:grayscale-0 transition-all h-full' alt='journey-images' /></Link>
              <Link href="/physique-transformation" className='w-full hover:underline underline-offset-4 transition-all py-4 px-2 uppercase font-bold text-2xl text-neutral-100 text-center absolute left-0 bottom-0 bg-black/40  rounded-b-2xl'>Physique Transformation</Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default AboutPacezone