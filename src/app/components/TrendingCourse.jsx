"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import coursesData from '../../../public/course-data';
import Link from 'next/link';

const TrendingCourse = () => {

  const [course, setCourses] = useState(coursesData);

  //const getCoursesData = async () => {
  //  try {
  //    const res = await fetch("http://localhost:8000/api/trending-courses");
  //    const data = await res.json();
  //    setCourses(data.data);
  //  } catch (error) {
  //    console.log(error);
  //  }
  //}

  //useEffect(() => {
  //  getCoursesData();
  //}, []);

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    rubberband: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      spacing: 20,
      perView: 3.3
    },
    breakpoints: {
      "(max-width: 575px)": { slides: { perView: 1, spacing: 15 }, loop: true }, // 200% zoom
      "(min-width: 576px)": { slides: { perView: 1, spacing: 15 }, loop: true }, // 200% zoom
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 }, loop: true }, // 150% zoom
      "(min-width: 992px)": { slides: { perView: 3, spacing: 20 }, loop: true }, // 125% zoom
      "(min-width: 1200px)": { slides: { perView: 3.6, spacing: 25 }, loop: true }, // 100%
      "(min-width: 1400px)": { slides: { perView: 4, spacing: 30 }, loop: true }, // 90%
    },
  })

  return (
    <>
      <div className="container w-11/12 border mx-auto py-16 border-blue-600">
        <div className="flex justify-center border">
          <h1 className='my-6 w-fit lg:text-3xl md:text-3xl sm:text-2xl text-xl font-medium flex flex-col text-center justify-center items-center gap-y-1'>Trending Courses
            <svg xmlns='http://www.w3.org/2000/svg' width="200px" viewBox='0 0 1418 125' fill='#6a48bf'><path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z'></path></svg>
          </h1>
        </div>
        <div className="mt-1 border">
          <div className=" border border-blue-600 relative">
            <div className="keen-slider py-4" ref={sliderRef}>
              {
                course.length <= 0 ? <div className="keen-slider__slide number-slide1 rounded-2xl w-fit bg-gray-100 p-3">
                  <Image src="https://i.postimg.cc/mrF5gB0h/runup.jpg" className='select-none rounded-xl w-full lg:h-[200px] md:h-[210px] sm:h-[300px] h-[220px]' width={500} height={700} alt="trending-courses" />
                </div> :
                  <>
                    {
                      course.map((crs, index) => {
                        return (
                          <Link href={`courses/${crs.courseId}`} key={index} className="keen-slider__slide number-slide1 rounded-2xl w-fit bg-gray-100 p-3 relative">
                            <Image src={crs.thumbnail} className='select-none rounded-xl w-full lg:h-[200px] md:h-[210px] sm:h-[300px] h-[220px]' width={500} height={700} alt="trending-courses" />
                            <div className='bg-black/20 absolute w-full h-full top-0 left-0'></div>
                            <p className='absolute z-10 top-3 right-5 text-lg font-bold text-white'><span className='text-[#F6B302]'>Pace</span>Zone</p>
                            <div className='absolute z-10 bottom-4 left-5'>
                              <h3 className='text-3xl font-bold text-white'>{crs.subtitle}</h3>
                              <h4 className='text-3xl font-bold text-[#F6B302]'>Program</h4>
                            </div>
                          </Link>
                        )
                      })
                    }
                  </>
              }
            </div>
            {
              loaded && instanceRef.current && (
                <div className="dots" id='dots'>
                  {[
                    ...Array(instanceRef.current.track.details.slides.length).keys()
                  ].map((index) => {
                    return (
                      <button key={index} aria-labelledby='dots' aria-label='dot' className={"dot" + (currentSlide === index ? " active" : "")} onClick={() => { instanceRef.current?.moveToIdx(index) }}></button>
                    )
                  })
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingCourse