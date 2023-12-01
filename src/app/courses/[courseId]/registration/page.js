"use client";

import RegistrationForm from '@/app/components/RegistrationForm';
import UnderLineStroke from '@/app/components/UnderLineStroke';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

const Registration = () => {

  const { courseId } = useParams();

  return (
    <>
      <div className="2xl:container mx-auto border border-red-500 py-16">
        <div className="container w-11/12 mx-auto border">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
            <div className="flex justify-center items-center">
              <Image src="/course-reg-bg.svg" width={600} height={600} className='' alt='course-registration-bg' />
            </div>
            <div className="flex flex-col items-center gap-y-6 border">
              <div className="flex justify-center border">
                <h1 className='lg:text-3xl md:text-3xl flex flex-col gap-y-1 sm:text-2xl text-xl text-center font-semibold w-fit'>Registration Form <UnderLineStroke fill="#6a48bf" /></h1>
              </div>
              <RegistrationForm courseId={courseId} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration