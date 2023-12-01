"use client";

import React from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatCounter = () => {

  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <>
      <div className="container w-11/12 border mx-auto py-16 border-blue-600" ref={ref}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="border flex flex-col gap-y-4">
            <span className="text-[#F4C821] font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl border">
              <div className="flex justify-center items-center">
                {inView ? <CountUp duration={3} end={120} start={0} className='drop-shadow' suffix='+' /> : "0+"}
              </div>
            </span>
            <p className="text-white text-center border">OLYMPIANS COACHED BY ALTIS COACHES</p>
          </div>
          <div className="border flex flex-col gap-y-4">
            <span className="text-[#F4C821] font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl border">
              <div className="flex justify-center items-center">
                {inView ? <CountUp duration={3} end={56} start={0} suffix='+' /> : "0+"}
              </div>
            </span>
            <p className="text-white text-center border">OLYMPIC MEDALS WON BY ALTIS-COACHED ATHLETES</p>
          </div>
          <div className="border flex flex-col gap-y-4">
            <span className="text-[#F4C821] font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl border">
              <div className="flex justify-center items-center">
                {inView ? <CountUp duration={3} end={150} start={0} suffix='+' /> : "0+"}
              </div>
            </span>
            <p className="text-white text-center border">YEARS OF COMBINED STAFF COACHING EXPERIENCE</p>
          </div>
          <div className="border flex flex-col gap-y-4">
            <span className="text-[#F4C821] font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl border">
              <div className="flex justify-center items-center">
                {inView ? <CountUp duration={3} end={4000} start={0} suffix='+' /> : "0+"}
              </div>
            </span>
            <p className="text-white text-center border">COACHES EDUCATED BY ALTIS</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatCounter