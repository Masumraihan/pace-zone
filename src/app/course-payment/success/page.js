"use client";

import React, { useEffect, useState } from 'react';
import { useLottie } from "lottie-react";
import ConfettiAnimation from "./confetti.json";
import PaymentSuccessIcon from "../../../../public/icons/payment-success.svg";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


const PaymentSuccessful = () => {

  const { View } = useLottie({ animationData: ConfettiAnimation, loop: 2, width: "100%", height: "100vh", style: { width: "100%", position: "absolute", height: "100%", zIndex: -1 } });

  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const firstMessageTimeout = setTimeout(() => {
      setShowFirstMessage(false);
      setShowSecondMessage(true);
    }, 2000); // Show the first message for 3 seconds

    return () => clearTimeout(firstMessageTimeout);
  }, []);

  useEffect(() => {
    if (showSecondMessage) {
      const secondMessageTimeout = setTimeout(() => {
        setShowSecondMessage(false);
        setShowCard(true);
      }, 5500); // Show the second message for 3 seconds, then show the card

      return () => clearTimeout(secondMessageTimeout);
    }
  }, [showSecondMessage]);

  useEffect(() => {

    if (showCard === true) {
      setTimeout(() => {
        const txt = document.querySelector(".animate-text").children;
        const textLength = txt.length;

        let ind = 0;
        const textInTimer = 1800;
        const textOutTimer = 1600;

        function animateText() {
          for (let i = 0; i < textLength; i++) {
            txt[i].classList.remove("text-in", "text-out");
          }

          txt[ind].classList.add("text-in");

          setTimeout(() => {
            txt[ind].classList.add("text-out")
          }, textOutTimer);

          setTimeout(() => {
            if (ind === textLength - 1) {
              ind = 0;
            }
            else {
              ind++;
            }
            animateText();
          }, textInTimer);
        }

        animateText();
      }, 4000);
    }
  }, [showCard])


  return (
    <>


      <div className="2xl:container border flex flex-col justify-center items-center min-h-[535px] z-10 place-content-center border-red-400 mx-auto relative py-8">

        <AnimatePresence mode="wait">
          {showFirstMessage && (
            <motion.div
              key="firstMessage"
              className="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              <h1 className='text-5xl drop-shadow text-center font-semibold mb-2'>
                Hurray! You have enrolled in this course.
              </h1>
            </motion.div>
          )}
          {showSecondMessage && (
            <motion.div
              key="secondMessage"
              className="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              <h1 className='text-5xl drop-shadow text-center font-semibold mb-2'>
                We will contact you shortly.
              </h1>
            </motion.div>
          )}
          {showCard && (
            <motion.div
              key="card"
              className="container z-20 lg:w-10/12 md:w-11/12 sm:w-11/12 w-full mx-auto border grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6 shadow-2xl rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="home-text flex flex-col items-center border lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1 p-6">
                {/* <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col gap-x-2 w-full lg:justify-center">
                  <h1 className='text-4xl w-full font-bold text-gray-900 leading-normal border lg:text-right md:text-center sm:text-center text-center'>
                    Thank you for
                  </h1>
                  <p className="animate-text w-full border border-emerald-500 text-4xl font-bold text-gray-900 leading-normal inline-flex lg:justify-start md:justify-center sm:justify-center justify-center overflow-hidden">
                    <span className='text-green-700 font-bold hidden'>Choosing us !</span>
                    <span className='text-yellow-600 font-bold hidden'>Believing us !</span>
                    <span className='text-red-700 font-bold hidden'>Recruiting us !</span>
                  </p>
                </div> */}

                <h1 className='text-4xl font-bold text-gray-900 leading-normal border text-center'>
                  Thank you for{" "}
                  <p className="animate-text border lg:w-[274px] md:w-[271px] sm:w-fit w-fit border-emerald-500 text-4xl font-bold text-gray-900 leading-normal inline-flex overflow-hidden">
                    <span className='text-green-700 font-bold hidden'>Choosing us !</span>
                    <span className='text-yellow-600 font-bold hidden'>Believing us !</span>
                    <span className='text-red-700 font-bold hidden'>Recruiting us !</span>
                  </p>
                </h1>


                <div className="mt-4 relative z-30">
                  <h1 className='text-center font-semibold text-gray-900'>You will get these Benefits</h1>
                  <div className="grid lg:grid-cols-2 gap-6 my-3">
                    <div className="flex flex-row gap-x-4 p-3 rounded-2xl border-2 hover:shadow-xl">
                      <h1 className='text-5xl text-gray-300 font-semibold'>1</h1>
                      <p className='font-light tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, voluptatem.</p>
                    </div>
                    <div className="flex flex-row gap-x-4 p-3 rounded-2xl border-2 hover:shadow-xl">
                      <h1 className='text-5xl text-gray-300 font-semibold'>2</h1>
                      <p className='font-light tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, voluptatem.</p>
                    </div>
                    <div className="flex flex-row gap-x-4 p-3 rounded-2xl border-2 hover:shadow-xl">
                      <h1 className='text-5xl text-gray-300 font-semibold'>3</h1>
                      <p className='font-light tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, voluptatem.</p>
                    </div>
                    <div className="flex flex-row gap-x-4 p-3 rounded-2xl border-2 hover:shadow-xl">
                      <h1 className='text-5xl text-gray-300 font-semibold'>4</h1>
                      <p className='font-light tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, voluptatem.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-8">
                  <h1 className='text-xl font-semibold mb-2 rounded-2xl text-center'>We will contact you through whatsApp soon</h1>
                  <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col gap-3 justify-center items-center">
                    <p className='text-center'>You can reach out directly through whatsapp</p>
                    <Link href="https://wa.me/918851611581" target="_blank" className='w-fit lg:flex md:hidden sm:hidden hidden cursor-pointer relative z-30'>
                      <Image className='h-8 w-8' src={"/icons/social-icons/whatsapp-icon.png"} width={500} height={500} alt='whatsapp-icon' />
                    </Link>
                    <Link href="https://wa.me/918851611581" target="_blank" className='lg:hidden md:flex sm:flex flex items-center bg-[#23D265] text-white rounded-full px-4 py-2'>
                    <Image className='h-8 w-8' src={"/icons/social-icons/whatsapp-icon.png"} width={500} height={500} alt='whatsapp-icon' /> WhatsApp
                    </Link>
                  </div>
                </div>
              </div>



              <div className="border rounded-2xl lg:my-4 md:my-0 sm:my-0 my-0 lg:translate-x-10 md:translate-x-0 sm:translate-x-0 translate-x-0 bg-white w-full shadow-2xl border-emerald-500 overflow-hidden">
                <div className="flex flex-col p-6 items-center gap-y-3">
                  <span><Image className='ring-8 ring-[#E8F9F0] rounded-full' src={PaymentSuccessIcon} width={60} height={60} alt='payment-success' /></span>
                  <h1 className='text-[#36C073] text-2xl text-center font-semibold'>Payment succeeded!</h1>
                </div>
                <div className="lg:text-left md:text-center text-center mt-6 px-6 py-10 bg-[#F9FBFC]">
                  <p className='text-gray-700 font-semibold'>Hi Rahul,</p>
                  <p className='text-gray-700 font-semibold my-2'>Your transaction was successful!</p>
                  <div className="">
                    <p className='font-medium text-gray-400'>Transaction ID</p>
                    <p className='font-semibold text-gray-700'>5748596599</p>
                  </div>
                  <div className="mt-4">
                    <p className='font-medium text-gray-400'>Date & Time</p>
                    <p className='font-semibold text-gray-700'>21 Oct 2023, 07:40 pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="container flex absolute h-full w-full">
          {View}
        </div>
      </div>
    </>
  )
}

export default PaymentSuccessful