"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PriceLabel from "../../../../public/icons/price-label.svg";
import ClockIcon from "../../../../public/icons/clock.svg";
import LanguageIcon from "../../../../public/icons/language-icon.svg";
import StarIcon from "../../../../public/icons/star-icon.svg";
import StarBlackIcon from "../../../../public/icons/star-black-icon.svg";
import FacebookIcon from "../../../../public/icons/social-icons/facebook.svg";
import InstagramIcon from "../../../../public/icons/social-icons/instagram.svg";
import WhatsAppIcon from "../../../../public/icons/social-icons/whatsapp.svg";
import XTwitterIcon from "../../../../public/icons/social-icons/x-twitter.svg";
import TelegramIcon from "../../../../public/icons/social-icons/telegram.svg";
import { useParams } from "next/navigation";
import coursesData from "../../../../public/course-data";
import FeedbackComponent from "@/app/components/FeedBackComponent";
import feedbackData from "../../../../feedback";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseInfo, settCourseInfo] = useState({});
  const [feedbacks, setFeedbacks] = useState(feedbackData.slice(0, 3));

  useEffect(() => {
    const course = coursesData.find((cr) => cr.courseId == courseId);
    settCourseInfo(course);
  }, [courseId]);

  return (
    <>
      <div className='2xl:container mx-auto border border-rose-800 z-20 py-16 relative'>
        <span className='border h-[560px] w-full border-green-400 absolute top-0 -z-10 bg-primary/5'></span>

        <div className='container lg:w-10/12 md:w-10/12 sm:w-11/12 w-11/12 mx-auto border border-blue-500'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1 border'>
              <p className='text-sm italic font-normal text-gray-600'>Course</p>
              <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-neutral-950'>
                {courseInfo.courseName}
              </h1>

              <div className='mt-4'>
                <div className='flex items-center gap-4'>
                  <Image
                    width={1000}
                    height={800}
                    className='w-10 h-10 shadow-md ring-2 ring-offset-2 ring-cyan-400 rounded-full select-none'
                    src='https://rainbowit.net/html/histudy/assets/images/testimonial/testimonial-7.jpg'
                    alt='mentor-photo'
                  />
                  <div className='flex flex-col'>
                    <span>
                      <strong>Angela</strong> in <strong>FastBowling</strong>
                    </span>
                    <span className='text-gray-600'>
                      {" "}
                      <em>Created on 24 Feb 2023</em>{" "}
                    </span>
                  </div>
                </div>
              </div>

              <p className='text-md text-gray-700 mt-2'>
                Covering techniques to enhance speed, precision, and Tactical Mastery, the course
                offers expert guidance, drills, and insights, empowering bowlers to excel in the
                competitive world of cricket.
              </p>

              <div className='flex items-center flex-wrap mt-4'>
                <div className='flex flex-row gap-x-1 items-center'>
                  <span className='font-medium text-gray-800'>4.0</span>
                  <span className='flex items-center'>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                  </span>
                  <span className='font-medium text-gray-800'>(12,542 ratings)</span>
                </div>
              </div>

              <h1 className='my-4 text-2xl font-semibold'>₹ 860</h1>

              <div className='flex w-full gap-3 lg:flex-row md:flex-row sm:flex-col flex-row  lg:items-center md:items-center sm:items-start items-center mt-4'>
                <Link
                  href={`https://wa.me/7906089769/?text=${courseId}`}
                  target='_blank'
                  className='flex items-center transition-all gap-x-1 bg-[#25D366] text-white hover:shadow-xl px-3 py-2 rounded-xl font-semibold lg:w-fit md:w-fit sm:w-full w-full lg:justify-left md:justify-left sm:justify-center justify-center'
                >
                  <Image
                    className='rounded-full'
                    src={"/icons/social-icons/whatsapp.gif"}
                    alt='whatsapp icon'
                    width={30}
                    height={25}
                  />
                  <div>
                    <span className='hidden md:inline-block'>Buy Through</span> WhatsApp
                  </div>
                </Link>
              </div>
            </div>
            <div className='border'>
              <Image
                width={800}
                height={600}
                className='h-auto w-full rounded-2xl shadow-md select-none'
                src='https://rainbowit.net/html/histudy/assets/images/others/video-01.jpg'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='container lg:w-10/12 md:w-10/12 sm:w-11/12 w-11/12 mx-auto border border-blue-500 mt-12'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8'>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1 border bg-white p-8 h-full shadow rounded-2xl'>
              <div className=''>
                <h1 className='text-xl font-medium text-neutral-900'>About Course</h1>
                <p className='mt-6 text-gray-700 text-justify leading-relaxed'>
                  {courseInfo.description}
                </p>
              </div>
              <div className='mt-8'>
                <h1 className='text-xl font-medium text-neutral-900'>What you&apos;ll learn</h1>
                <ul className='flex  flex-col mt-6 text-gray-700 text-justify leading-relaxed gap-y-2'>
                  {courseInfo.youWillLearn?.map((text, index) => (
                    <li key={index} className='flex gap-x-3'>
                      <span className='text-lg'>&#9656;</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-8'>
                <h1 className='text-xl font-medium text-neutral-900'>Instructors</h1>
                <div className='flex flex-row flex-wrap gap-4'>
                  <div className='mt-4 w-fit flex flex-col p-4 rounded-2xl shadow-lg'>
                    <div className='flex justify-center'>
                      <Image
                        src='https://rainbowit.net/html/histudy/assets/images/testimonial/testimonial-7.jpg'
                        className='h-24 w-fit rounded-full'
                        width={500}
                        height={500}
                        alt='instructor'
                      />
                    </div>
                    <div className='flex w-fit flex-col gap-y-1 items-center'>
                      <span className='text-lg text-gray-900 font-medium'>Angela</span>
                      <span className='text-sm text-gray-700 font-normal'>Fast Bowling Expert</span>
                    </div>
                  </div>
                  <div className='mt-4 w-fit flex flex-col p-4 rounded-2xl shadow-lg'>
                    <div className='flex justify-center'>
                      <Image
                        src='https://rainbowit.net/html/histudy/assets/images/testimonial/testimonial-7.jpg'
                        className='h-24 w-fit rounded-full'
                        width={500}
                        height={500}
                        alt='instructor'
                      />
                    </div>
                    <div className='flex w-fit flex-col gap-y-1 items-center'>
                      <span className='text-lg text-gray-900 font-medium'>Angela</span>
                      <span className='text-sm text-gray-700 font-normal'>Fast Bowling Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='gap-8 flex flex-col h-ful'>
              <div className='border flex gap-y-7 lg:flex-col md:flex-col sm:flex-row gap-x-3 flex-wrap justify-between px-8 py-12 bg-white shadow rounded-2xl'>
                <span className='grid grid-flow-col items-center place-content-start gap-x-6 text-gray-500'>
                  <svg
                    width='20px'
                    height='20px'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#6B7280'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='1.5' />
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                    <g id='SVGRepo_iconCarrier'>
                      {" "}
                      <circle cx='12' cy='6' r='4' stroke='#6B7280' strokeWidth='1.5' />{" "}
                      <path
                        d='M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18'
                        stroke='#6B7280'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                      />{" "}
                    </g>
                  </svg>{" "}
                  {courseInfo?.student}
                </span>
                <span className='grid grid-flow-col items-center place-content-start gap-x-6 text-gray-500'>
                  <Image src={PriceLabel} width={20} height={20} alt='price-label' /> ₹{" "}
                  {courseInfo?.price}
                </span>
                <span className='grid grid-flow-col items-center place-content-start gap-x-6 text-gray-500'>
                  <Image src={ClockIcon} width={20} height={20} alt='clock' />{" "}
                  {courseInfo?.duration}
                </span>
                <span className='grid grid-flow-col items-center place-content-start gap-x-6 text-gray-500'>
                  <Image src={LanguageIcon} width={20} height={20} alt='LanguageIcon' />{" "}
                  {courseInfo?.language?.map((lan) => (
                    <span key={lan}>{lan}</span>
                  ))}
                </span>
              </div>

              <div className='border p-8 bg-white rounded-2xl shadow'>
                <h1>Related Courses</h1>
                <div className='mt-4'>
                  <ul className='flex flex-col gap-y-4'>
                    {coursesData.map((course) => (
                      <li
                        key={course.courseId}
                        className='text-sm gap-x-2 grid grid-flow-col place-content-start '
                      >
                        <span>&#x2022;</span>
                        <Link
                          className='text-blue-500 hover:text-blue-900'
                          href={`/courses/${course.courseId}`}
                        >
                          {course.courseName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='border flex gap-y-7 flex-col gap-3 h-fit p-8 bg-white shadow rounded-2xl'>
                <h1 className='lg:text-left md:text-left sm:text-center text-center'>
                  Share this course with friends
                </h1>
                <div className='flex lg:justify-start md:justify-start sm:justify-center justify-center gap-3 items-center flex-wrap'>
                  <span>
                    <Link title='Facebook' href={"#!"}>
                      <Image src={FacebookIcon} width={26} height={26} alt='facebook' />
                    </Link>
                  </span>
                  <span>
                    <Link title='WhatsApp' href={"#!"}>
                      <Image src={WhatsAppIcon} width={26} height={26} alt='whatsapp' />
                    </Link>
                  </span>
                  <span>
                    <Link title='Instagram' href={"#!"}>
                      <Image src={InstagramIcon} width={26} height={26} alt='instagram' />
                    </Link>
                  </span>
                  <span>
                    <Link title='X (Formerly Twitter)' href={"#!"}>
                      <Image src={XTwitterIcon} width={26} height={26} alt='x-twitter' />
                    </Link>
                  </span>
                  <span>
                    <Link title='Telegram' href={"#!"}>
                      <Image src={TelegramIcon} width={26} height={26} alt='telegram' />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container lg:w-10/12 md:w-10/12 sm:w-11/12 w-11/12 mx-auto border border-blue-500 mt-12'>
          <h1 className='text-xl font-semibold flex lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-x-3'>
            <span className='flex items-center text-center'>
              <Image loading='lazy' src={StarIcon} width={22} height={22} alt='star-icon' />
              <Image loading='lazy' src={StarIcon} width={22} height={22} alt='star-icon' />
              <Image loading='lazy' src={StarIcon} width={22} height={22} alt='star-icon' />
              <Image loading='lazy' src={StarIcon} width={22} height={22} alt='star-icon' />
              <Image
                loading='lazy'
                src={StarBlackIcon}
                width={22}
                height={22}
                alt='star-black-icon'
              />
            </span>
            <span className='text-center text-md text-gray-800 font-medium'>
              4.5 Course rating &bull; 1k ratings
            </span>
          </h1>

          {/*<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 mt-4'>
            <div className='shadow rounded-2xl p-5'>
              <div className='flex gap-4'>
                <span className='w-12 h-12 rounded-full border flex justify-center items-center bg-blue-900 text-white font-bold uppercase'>
                  AG
                </span>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-md font-medium'>Aarav Gupta</h1>
                  <p className='text-sm text-gray-600'>5 Rating</p>
                </div>
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                <p className='text-sm text-gray-700'>
                  Sachin Rawat&apos;s Elite Fast Bowling Mentorship has been an absolute
                  game-changer! The tailored sessions on technique and fitness have immensely
                  boosted my speed and precision on the pitch. Highly recommended for any aspiring
                  fast bowler looking to take their game to the next level
                </p>
                <span className='text-sm text-gray-600'>1 week ago</span>
              </div>
            </div>
            <div className='shadow rounded-2xl p-5'>
              <div className='flex gap-4'>
                <span className='w-12 h-12 rounded-full border flex justify-center items-center bg-rose-900 text-white font-bold uppercase'>
                  VS
                </span>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-md font-medium'>Vikram Singh</h1>
                  <p className='text-sm text-gray-600'>4.5 Rating</p>
                </div>
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                <p className='text-sm text-gray-700'>
                  Improved Arm Speed Training course by Sachin was phenomenal! The combination of
                  technical insights and targeted workouts was spot-on. My arm speed has noticeably
                  increased, giving me the edge I needed in competitive matches. This course is a
                  must for any fast bowler seeking to enhance their performance.
                </p>
                <span className='text-sm text-gray-600'>3 week ago</span>
              </div>
            </div>
            <div className='shadow rounded-2xl p-5'>
              <div className='flex gap-4'>
                <span className='w-12 h-12 rounded-full border flex justify-center items-center bg-green-900 text-white font-bold uppercase'>
                  AS
                </span>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-md font-medium'>Ranbir Kapoor</h1>
                  <p className='text-sm text-gray-600'>5 Rating</p>
                </div>
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                <p className='text-sm text-gray-700'>
                  The Optimizing Runup for Fast Bowling course was exactly what I needed to refine
                  my approach. Sachin&apos;s guidance on measuring the run-up length and maintaining
                  balance has significantly improved my delivery accuracy. The course structure was
                  fantastic, making it easy to implement the techniques in my game
                </p>
                <span className='text-sm text-gray-600'>4 week ago</span>
              </div>
            </div>
            <div className='shadow rounded-2xl p-5'>
              <div className='flex gap-4'>
                <span className='w-12 h-12 rounded-full border flex justify-center items-center bg-secondary text-white font-bold uppercase'>
                  VS
                </span>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-md font-medium'>Vikram Singh</h1>
                  <p className='text-sm text-gray-600'>4.5 Rating</p>
                </div>
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                <p className='text-sm text-gray-700'>
                  Improved Arm Speed Training course by Sachin was phenomenal! The combination of
                  technical insights and targeted workouts was spot-on. My arm speed has noticeably
                  increased, giving me the edge I needed in competitive matches. This course is a
                  must for any fast bowler seeking to enhance their performance.
                </p>
                <span className='text-sm text-gray-600'>3 weeks ago</span>
              </div>
            </div>

            <div className='shadow rounded-2xl p-5'>
              <div className='flex gap-4'>
                <span className='w-12 h-12 rounded-full border flex justify-center items-center bg-purple-900 text-white font-bold uppercase'>
                  VS
                </span>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-md font-medium'>Aarav Gupta</h1>
                  <p className='text-sm text-gray-600'>4.2 Rating</p>
                </div>
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                <p className='text-sm text-gray-700'>
                  Optimizing Runup for Fast Bowling course has immensely improved my technique!
                  Sachin&apos;s guidance on run-up length and balance has transformed my bowling
                  accuracy. Highly recommended for those striving to elevate their game.
                </p>
                <span className='text-sm text-gray-600'>1 month ago</span>
              </div>
            </div>

            <div className='shadow rounded-2xl p-5'>
              <div className='flex gap-4'>
                <span className='w-12 h-12 rounded-full border flex justify-center items-center bg-cyan-900 text-white font-bold uppercase'>
                  VS
                </span>
                <div className='flex flex-col justify-center'>
                  <h1 className='text-md font-medium'>Priya Patel</h1>
                  <p className='text-sm text-gray-600'>4.8 Rating</p>
                </div>
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                <p className='text-sm text-gray-700'>
                  Optimized Back Foot Contact Technique by Sachin provided exceptional insights! The
                  drills and muscle exercises significantly improved my backfoot stance. This course
                  is a game-changer for bowlers aiming for higher speeds.
                </p>
                <span className='text-sm text-gray-600'>2 weeks ago</span>
              </div>
            </div>
          </div>*/}
          <FeedbackComponent feedbacks={feedbacks} />

          <div className='mt-3'>
            <button
              onClick={() => setFeedbacks(feedbackData)}
              className={` ${
                feedbacks.length > 3 && "hidden"
              } px-3 py-2 text-gray-800 rounded-xl italic hover:bg-[#EBE8F5] transition-all active:scale-95`}
            >
              Read all reviews...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
