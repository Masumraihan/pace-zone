import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import React from 'react';

const Drawer = ({ handleLinkClick }) => {

  const variant = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delay: 0.02 * i }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    }
  }


  return (
    <AnimatePresence>
      <motion.div>
        <motion.ul initial="hidden" animate="visible" exit="hidden" variants={variant} className='flex flex-col gap-y-3 p-2 border w-full'>
          <motion.li variants={child} className='w-full flex'><Link href="/" className='text-black border-cyan-500 hover:text-cyan-500 transition-all px-2 hover:border-e-4 py-[2px] w-full' onClick={handleLinkClick}>Home</Link></motion.li>
          <motion.li variants={child} className='w-full flex'><Link href="/courses" className='text-black border-cyan-500 hover:text-cyan-500 transition-all px-2 hover:border-e-4 py-[2px] w-full' onClick={handleLinkClick}>Courses</Link></motion.li>
          <motion.li variants={child} className='w-full flex'><Link href="/physique-transformation" className='text-black border-cyan-500 hover:text-cyan-500 transition-all px-2 hover:border-e-4 py-[2px] w-full' onClick={handleLinkClick}>Physique Transformation</Link></motion.li>
          <motion.li variants={child} className='w-full flex'><Link href="/gallery" className='text-black border-cyan-500 hover:text-cyan-500 transition-all px-2 hover:border-e-4 py-[2px] w-full' onClick={handleLinkClick}>Gallery</Link></motion.li>
          <motion.li variants={child} className='w-full flex'><Link href="/mentorship" className='text-black border-cyan-500 hover:text-cyan-500 transition-all px-2 hover:border-e-4 py-[2px] w-full' onClick={handleLinkClick}>Mentorship</Link></motion.li>
          <motion.li variants={child} className='w-full flex'><Link href="/contact" className='text-black border-cyan-500 hover:text-cyan-500 transition-all px-2 hover:border-e-4 py-[2px] w-full' onClick={handleLinkClick}>Contact</Link></motion.li>
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  )
}

export default Drawer