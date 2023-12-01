"use client";

import React, { useEffect, useState } from "react";
import UnderLineStroke from "../components/UnderLineStroke";
import SearchIcon from "../../../public/icons/search-icon.svg";
import CourseCard from "../components/CourseCard";
import Image from "next/image";
import coursesData from "../../../public/course-data";

const Courses = () => {
  const [courses, setCourses] = useState(coursesData);

  //const getCoursesData = async () => {
  //  try {
  //    const res = await fetch("http://localhost:8000/api/trending-courses");
  //    const data = await res.json();
  //    setCourses(data.data);
  //  } catch (error) {
  //    console.log(error);
  //  }
  //};

  //useEffect(() => {
  //  getCoursesData();
  //}, []);

  //const cardArray = [
  //  {
  //    courseId: 51574,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 2,
  //    price: 860,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //  {
  //    courseId: 78451,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 4,
  //    price: 980,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //  {
  //    courseId: 98924,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 5,
  //    price: 1530,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //  {
  //    courseId: 75152,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 5,
  //    price: 1530,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //  {
  //    courseId: 56965,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 2,
  //    price: 1530,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //  {
  //    courseId: 74125,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 4,
  //    price: 1530,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //  {
  //    courseId: 77445,
  //    title: "Mastering the Art of Fast Bowling: Speed, Precision, and Strategy",
  //    rating: 1,
  //    price: 1530,
  //    imageUrl:
  //      "https://themeholy.com/wordpress/edura/wp-content/uploads/2019/05/course_2_1-2-327x250.png",
  //  },
  //];

  return (
    <>
      <div className='2xl:container mx-auto border relative'>
        <Image
          src='/courses-bg.jpg'
          className='absolute w-full h-[500px] -z-10 top-0'
          width={1000}
          height={400}
          alt='courses-bg'
        />
        <div className='container w-11/12 mx-auto border py-16'>
          <div className='flex flex-col gap-y-2 justify-center border rounded-2xl px-6 py-6'>
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center font-semibold w-fit flex flex-col gap-y-1'>
              Our Programs <UnderLineStroke fill='#6a48bf' />
            </h1>
            <span className='text-gray-800 relative w-fit'>
              Elevate Your Skills and Knowledge with Expert Coaching
              <span className='rotate-180 absolute right-0 -z-10'>
                <Image
                  src='arrow-sign.svg'
                  className='select-none'
                  width={100}
                  height={100}
                  alt='arrow-sign'
                />
              </span>
            </span>
          </div>

          <div className='border mt-8'>
            <div className='flex w-auto lg:justify-end md:justify-end sm:justify-end justify-center'>
              <form className='rounded-full hover:ring-2 ring-[#330E83] transition-all w-fit bg-slate-50 flex items-center shadow'>
                <input
                  type='text'
                  className='flex outline-none  bg-transparent px-4 lg:w-72 md:w-52 sm:w-full w-full p-3 rounded-full'
                  placeholder='Search your course'
                />
                <button type='submit' className='hover:bg-gray-200 rounded-full p-3 transition-all'>
                  <Image src={SearchIcon} alt='search-icon' width={24} height={24} />
                </button>
              </form>
            </div>
          </div>

          <div className='border border-red-600 py-8 mt-6 rounded-2xl shadow-lg bg-white'>
            <div className='container w-11/12 mx-auto'>
              <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10'>
                {
                  courses.map((course, index) => {
                    return (
                      <CourseCard
                        title={course.courseName}
                        duration={course.duration}
                        price={course.price}
                        imageUrl={course.thumbnail}
                        courseId={course.courseId}
                        lesson={course.lesson}
                        student={course.student}
                        key={index}
                      />
                    );
                  })
                  // courses.map((course, index) => {
                  //   return (<CourseCard title={course.title} duration={course.duration} rating={course.rating} price={course.price} imageUrl={course.thumbnail_cdn_url} key={index} courseId={course.id} />)
                  // })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
