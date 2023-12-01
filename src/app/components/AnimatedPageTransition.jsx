"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CircketBall from "../../../public/icons/cricket-ball-solid-icon.svg";
import Image from 'next/image';

const AnimatedPageTransition = ({ children }) => {

  const path = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={path} className='flex flex-col h-screen'>
          {children}
          <motion.div
            className="slide-in"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex flex-row gap-x-3 items-center">
              <Image src={CircketBall} width={36} height={36} alt='CircketBall' />
              <h1 className='text-2xl font-semibold'>PaceZone</h1>
            </div>
          </motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex flex-row gap-x-3 items-center">
              <Image src={CircketBall} width={36} height={36} alt='CircketBall' />
              <h1 className='text-2xl font-semibold'>PaceZone</h1>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

    </>
  )
}

export default AnimatedPageTransition