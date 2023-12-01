"use client";

import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const VideoCarousel = () => {

  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(`Card ${entry.target.dataset.card} is in the viewport`);
        cardRefs[entry.target.dataset.card - 1].current.play();
      } else {
        // console.log(`Card ${entry.target.dataset.card} is out of the viewport`);
        cardRefs[entry.target.dataset.card - 1].current.pause();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [cardRefs, handleIntersection]);


  return (
    <>
      <div className="lg:w-5/6 md:w-full sm:w-full w-full flex items-center justify-center justify-self-end">
        <Swiper
          modules={[Pagination]} pagination={{ clickable: true }} loop={true} className="testimonial-swiper h-auto">
          <SwiperSlide className='testimonial-swiper-slide px-4 py-3'>
            <div className="h-auto bg-[#fff8da] rounded-3xl lg:p-8 md:p-7 sm:p-6 p-6">
              <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-start md:justify-start sm:justify-center justify-center lg:items-start md:items-start sm:items-center items-center gap-x-4 relative">
                <Image src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" className='rounded-full' width={50} height={50} alt="avatar" />
                <div className="flex flex-col w-full lg:justify-start md:justify-center sm:justify-center justify-center lg:items-start md:items-start sm:items-center items-center">
                  <h1 className='leading-normal font-medium text-gray-600'>Brian Fredrick</h1>
                  <p className='leading-normal font-medium text-gray-600 text-sm'>Copywriter @ Gragg Advertising</p>
                  <span><Image src="/pencil3d-icon.png" width={60} height={60} alt='pencil3d' className='absolute -top-2 -right-[50px] rotate-6 opacity-50' /></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex relative items-center justify-center w-full h-full rounded-3xl overflow-hidden shadow-[10px_10px_2px_-1px_#d0c489] transition-all">
                  <video ref={cardRefs[0]} controlsList='nodownload' data-card="1" muted controls src='sample-testimonial.mp4' width={"100%"} height={"100%"} className='h-full w-full' poster='testimonial-sample-image.jpg'></video>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className='testimonial-swiper-slide px-4 py-3'>
            <div className="h-auto bg-[#d1fff8] rounded-3xl lg:p-8 md:p-7 sm:p-6 p-6">
              <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-start md:justify-start sm:justify-center justify-center lg:items-start md:items-start sm:items-center items-center gap-x-4 relative">
                <Image src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" width={50} height={50} className='rounded-full' alt="avatar" />
                <div className="flex flex-col w-full lg:justify-start md:justify-center sm:justify-center justify-center lg:items-start md:items-start sm:items-center items-center">
                  <h1 className='leading-normal font-medium text-gray-600'>Brian Fredrick</h1>
                  <span className='leading-normal font-medium text-gray-600 text-sm'>Copywriter @ Gragg Advertising</span>
                  <span><Image src="/chat3d-icon.png" alt='chat3d' width={70} height={70} className='absolute top-0 -right-[54px] rotate-6 opacity-50' /></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex relative items-center justify-center w-full h-full rounded-3xl overflow-hidden shadow-[10px_10px_2px_-1px_rgba(51,14,131,0.2)] transition-all">
                  <video ref={cardRefs[1]} data-card="2" controlsList='nodownload' muted controls src='sample-testimonial.mp4' width={"100%"} height={"100%"} className='h-full w-full' poster='testimonial-sample-image.jpg'></video>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='testimonial-swiper-slide px-4 py-3'>
            <div className="h-auto bg-[#ffe4f0] rounded-3xl lg:p-8 md:p-7 sm:p-6 p-6">
              <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-start md:justify-start sm:justify-center justify-center lg:items-start md:items-start sm:items-center items-center gap-x-4 relative">
                <Image src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" width={50} height={50} className='rounded-full' alt="avatar" />
                <div className="flex flex-col w-full lg:justify-start md:justify-center sm:justify-center justify-center lg:items-start md:items-start sm:items-center items-center">
                  <h1 className='leading-normal font-medium text-gray-600'>Brian Fredrick</h1>
                  <span className='leading-normal font-medium text-gray-600 text-sm'>Copywriter @ Gragg Advertising</span>
                  <span><Image src="/thumb3d-icon.png" width={160} height={160} alt='thumb3d' className='absolute top-0 -right-[100px] rotate-6 opacity-50' /></span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex relative items-center justify-center w-full h-full rounded-3xl overflow-hidden shadow-[10px_10px_2px_-1px_rgba(51,14,131,0.2)] transition-all">
                  <video ref={cardRefs[2]} data-card="3" controlsList='nodownload' muted controls src='sample-testimonial.mp4' width={"100%"} height={"100%"} className='h-full w-full' poster='testimonial-sample-image.jpg'></video>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default VideoCarousel