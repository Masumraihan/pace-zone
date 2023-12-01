"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text, staggerChildren=0.05 }) => {

  const words = text.split("");

  const variant = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren, delay: 0.01 * i }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 60,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    }
  }

  const { ref, inView } = useInView({initialInView: true, threshold: 0.2, triggerOnce: false });

  return (
    <>
      {
        inView && <motion.div ref={ref} variants={variant} initial="hidden" animate="visible" className='flex flex-row'>
          {
            words.map((word, index) => word === " " ? <motion.span key={index}>&nbsp;</motion.span> : <motion.span key={index} variants={child}>{word}</motion.span>
            )}
        </motion.div>
      }
    </>
  )
}

export default AnimatedText