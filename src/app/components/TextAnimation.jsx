"use client";

import { motion } from 'framer-motion';
import React from 'react';

const TextAnimation = ({ text }) => {

  const words = text.split(" ");

  let lettersArray = [];
  let letterArray = [];

  words.map((word, index) => {
    lettersArray.push(word.split(""));
  })

  lettersArray.map((arr, Arrayindex) => {
    arr.map((letter, letterIndex) => {
      letterArray.push(letter);
    });
    letterArray.push(" ")
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      }
    }
  };

  const listItem = {
    hidden: { y: "100%", rotate: 90 },
    show: { y: 0, rotate: 0 }
  };


  return (
    <>
      <div className="2xl:container mx-auto border min-h-screen border-red-600 py-16">
        <div className='container w-11/12 mx-auto'>
          {/* <motion.div
            initial="hidden"
            animate="show"
            variants={container}

            className="flex text-3xl border my-4 relative font-semibold overflow-hidden text-neutral-900 uppercase justify-center flex-row flex-wrap gap-x-2">
            {
              words.map((word, index) => {
                return (<motion.span variants={listItem} transition={{ type: "spring", bounce: 0.5 }} key={index}>{word}</motion.span>)
              })
            }
          </motion.div> */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex text-3xl border my-4 overflow-hidden font-semibold text-neutral-900 uppercase justify-center flex-row flex-wrap">
            {
              letterArray.map((letter, index) => {
                return <motion.span transition={{ type: "tween" }} variants={listItem} key={index}>{letter !== " " ? letter : <span>&nbsp;</span>}</motion.span>
              })
            }
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default TextAnimation;