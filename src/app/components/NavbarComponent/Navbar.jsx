"use client";

import { motion, AnimatePresence, useCycle } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import MenuIcon from "../../../../public/icons/menu-icon.svg";
import CircketBall from "../../../../public/icons/cricket-ball-solid-icon.svg";
import CloseIcon from "../../../../public/icons/close-icon.svg";
import Drawer from './Drawer';
import Image from 'next/image';

const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);

  const drawerHandler = () => {
    toggleOpen(!isOpen);
  };

  const drawerVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: "0%" },
  };

  const handleLinkClick = () => {
    if (isOpen) {
      drawerHandler();
    }
  };


  return (
    <>
      <nav className='sticky top-0 bg-primary text-white z-50 shadow-md '>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="lg:hidden md:hidden sm:flex flex items-center">
              <button onClick={drawerHandler}>
                <Image src={MenuIcon} width={36} height={36} alt="menu-icon" />
              </button>
            </div>
            <div className="flex flex-row gap-x-3 items-center">
              <Image src={CircketBall} width={36} height={36} alt="menu-icon" />
              <Link href="/" className='text-2xl font-semibold'>PaceZone</Link>
            </div>
            <div className="lg:flex md:flex sm:hidden hidden flex-row gap-x-7">
              <Link href="/" className='hover:text-cyan-light relative navLink'>Home</Link>
              <Link href="/courses" className='hover:text-cyan-light relative navLink'>Courses</Link>
              <Link href="/gallery" className='hover:text-cyan-light relative navLink'>Gallery</Link>
              <Link href="/mentorship" className='hover:text-cyan-light relative navLink'>Mentorship</Link>
              <Link title='Physique Transformation' href="/physique-transformation" className='hover:text-cyan-light xl:w-fit lg:w-40 md:w-24 truncate ... relative navLink'>Physique Transformation</Link>
              <Link href="/contact" className='hover:text-cyan-light relative navLink'>Contact</Link>
            </div>
            <div className="lg:flex md:hidden sm:hidden hidden flex-row items-center gap-3">
              {/* <Link aria-label="facebook" className='hover:scale-125 transition-all' title='Facebook' href={"#!"} target="_blank">
                <Image src="/icons/social-icons/facebook-icon-bw.png" width={24} height={24} alt="facebook-icon" />
              </Link>
              <Link aria-label="whatsapp" className='hover:scale-125 transition-all' title='WhatsApp' href={"#!"} target="_blank">
                <Image src="/icons/social-icons/whatsapp-icon-bw.png" width={24} height={24} alt="whatsapp-icon" />
              </Link>
              <Link aria-label="instagram" className='hover:scale-125 transition-all' title='Instagram' href={"#!"} target="_blank">
                <Image src="/icons/social-icons/insta-icon-bw.png" width={24} height={24} alt="instagram-icon" />
              </Link>
              <Link aria-label="youtube" className='hover:scale-125 transition-all' title='YouTube' href={"#!"} target="_blank">
                <Image src="/icons/social-icons/youtube-icon-bw.png" width={24} height={24} alt="youtube-icon" />
              </Link>
              <Link aria-label="x-twitter" title='X (formerly Twitter)' className='p-1 rounded-full bg-white hover:scale-125 transition-all' href={"#!"} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill='#000' version="1.1" id="Layer_1" width="16px" height="16px" viewBox="0 0 24 24" ><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" /></svg>
              </Link> */}
              <Link aria-label="facebook" className='hover:scale-125 transition-all' title='Facebook' href={"#!"} target="_blank">
                <Image src="/footer-icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
              </Link>
              <Link aria-label="whatsapp" className='hover:scale-125 transition-all' title='WhatsApp' href={"#!"} target="_blank">
                <Image src="/footer-icons/whatsapp.svg" width={28} height={28} alt="whatsapp-icon" />
              </Link>
              <Link aria-label="instagram" className='hover:scale-125 transition-all' title='instagram' href={"#!"} target="_blank">
                <Image src="/footer-icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
              </Link>
              <Link aria-label="x-twitter" className='hover:scale-125 transition-all' title='twitter' href={"#!"} target="_blank">
                <Image src="/footer-icons/x-twitter.svg" width={24} height={24} alt="twitter-icon" />
              </Link>
              <Link aria-label="youtube" className='hover:scale-125 transition-all' title='YouTube' href={"#!"} target="_blank">
                <Image src="/footer-icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
              </Link>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={drawerVariants}
                className="fixed z-50 bg-white overflow-auto shadow-red-200 h-screen lg:w-52 md:w-52 sm:w-48 w-48 inset-0"
              >
                <div className="flex border text-white bg-primary justify-between items-center p-4">
                  <span className='text-xl font-semibold'>PaceZone</span>

                  <button
                    onClick={() => toggleOpen()}
                    className="rounded-lg p-1 bg-[#EEF2F5] dark:bg-neutral-950 text-[#3F3D56] hover:text-black dark:text-[#EEF2F5]"
                  >
                    {/* <CgClose size={16} /> */}
                    <Image src={CloseIcon} width={20} height={20} alt='close-icon' />
                  </button>

                </div>
                <div className="w-full">
                  <Drawer handleLinkClick={handleLinkClick} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Drawer OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-30 bg-black backdrop-blur opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggleOpen()}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar