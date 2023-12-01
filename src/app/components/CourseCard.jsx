import React from "react";
import UserIcon from "../../../public/icons/user-icon.svg";
import LessonPlay from "../../../public/icons/lesson-play.svg";
import CalenderIcon from "../../../public/icons/calender-icon.svg";
import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ title, lesson, student, price, imageUrl, duration, courseId }) => {

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden">
        <div className="p-3 w-full">
          <Link href={`/courses/${courseId}`}>
            <Image width={500} height={400} className="rounded-xl bg-contain shadow-md hover:shadow-lg w-full" src={imageUrl} alt="course-cards" />
          </Link>
        </div>

        <div className="">
          <div className="px-5 py-4">
            <div className="mb-3 flex gap-4 lg:flex-row md:flex-row sm:flex-col flex-row justify-between lg:items-center md:items-center sm:items-start items-center">
              <span className="bg-[#FFEBCB] text-amber-800/70 px-3 py-1 rounded-full font-medium text-sm flex w-fit items-center gap-x-2">
                <Image src={CalenderIcon} width={14} height={12} alt="calender-icon" />{duration}</span>
              {/*<div className="flex">
                {
                  rating == 1 ? <span>&#11088;</span> : rating == 2 ? <span>&#11088;&#11088;</span> : rating == 3 ? <span>&#11088;&#11088;&#11088;</span> : rating == 4 ? <span>&#11088;&#11088;&#11088;&#11088;</span> : rating == 5 ? <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span> : null
                }
              </div>*/}
            </div>
            <Link href={`/courses/${title}`} className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
              {title}
            </Link>
          </div>
          <hr />
          <div className="px-5 py-2">
            <div className="grid grid-cols-2 gap-1">
              <div className="space-x-2 text-sm flex items-center">
                <span className="flex items-center gap-x-2"><Image src={LessonPlay} width={14} height={14} alt="lesson-play" />Lesson</span>
                <span>{lesson}</span>
              </div>
              <div className="space-x-2 text-sm flex items-center">
                <span className="flex items-center gap-x-2"><Image src={UserIcon} width={14} height={14} alt="UserIcon" />Student</span>
                <span>{student}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="px-5 py-4 flex gap-3 lg:flex-row md:flex-row sm:flex-col flex-row justify-between lg:items-center md:items-center sm:items-start items-center">
            <p className="text-2xl font-bold">₹ {price}</p>
            <Link href={`/courses/${courseId}`} className="flex items-center transition-all gap-x-1 bg-[#d8c7ff] hover:bg-[#330E83] hover:text-white px-3 py-2 rounded-xl text-[#330E83] font-semibold">
              Buy now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;

