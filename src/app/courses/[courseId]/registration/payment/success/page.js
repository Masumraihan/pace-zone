"use client";

import React from 'react';
import { useLottie } from "lottie-react";
import ConfettiAnimation from "./confetti2.json";
import PaymentSuccessIcon from "../../../../../../../public/icons/payment-success.svg";
import Image from 'next/image';

const PaymentSuccessful = () => {

  const { View } = useLottie({ animationData: ConfettiAnimation, loop: 1, width: "100%", height: "100vh", style: { width: "100%", position: "absolute", height: "100%" } })
  return (
    <>


      <div className="2xl:container border grid py-10 place-items-center  border-red-400 mx-auto relative">
        <div className="container w-11/12 mx-auto border flex flex-col items-center justify-center ">
          <div className="border rounded-2xl p-6 lg:w-5/12 md:w-8/12 sm:w-8/12 w-full shadow-lg">
            <div className="flex flex-col items-center gap-y-3">
              <span><Image src={PaymentSuccessIcon} width={60} height={60} alt='payment-success' /></span>
              <h1 className='text-[#699F4C] text-3xl font-semibold'>Payment succeeded!</h1>
            </div>

            {/* <p className='text-center mt-3 text-gray-700'>Thank you for processing your most recent payment. Your course subscription will expire on Jan 19, 2024.</p> */}

            <div className="text-center mt-6">
              <p className='text-gray-700'>Hi Rahul,</p>
              <p className='text-gray-700 my-2'>Your transaction was successful!</p>
              <p className='font-medium'>Payment Details:</p>
              <p>Amount: ₹ 860</p>
              <p>Date: 18 Oct 2023, 14:58:25</p>
              <p className='mt-3 text-lg'>In this course, you will get 2 Live lectures on weekends, recored videos & many more.</p>
              <hr className='my-3' />
              <p className='text-md mt-1 text-center text-gray-900'>Transaction Reference: 57485965995874</p>
              <p className='text-center text-xs mt-3 text-gray-700'>Thank you for your interest. Your course subscription will expire on Jan 19, 2024.</p>
            </div>

          </div>
        </div>
        <div className="container flex absolute h-full w-full">
          {View}
        </div>
      </div>
    </>
  )
}

export default PaymentSuccessful