import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CircketBall from "../../../../public/icons/cricket-ball-solid-icon.svg"

const Footer = () => {
  return (
    <>
      <footer className='footer border py-10 bg-[#330E83]'>
        <div className="container lg:w-10/12 md:w-10/12 sm:w-11/12 w-full border mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="border border-red-500">
              <div className="text-white">
                <div className="flex flex-row gap-x-3 items-center lg:justify-start md:justify-start sm:justify-center justify-center">
                  <Image src={CircketBall} width={36} height={36} alt="pacezone-logo" />
                  <Link href="/" className='text-2xl font-semibold'>PaceZone</Link>
                </div>
                <p className='text-md lg:text-start md:text-start sm:text-center text-center font-light mt-1'>Become a better fast bowler</p>
                <p className='text-sm lg:text-start md:text-start sm:text-center text-center font-light'>Improve your fast bowling skills & technique</p>
              </div>
            </div>
            <div className="border border-red-500 flex lg:justify-end md:justify-end sm:justify-center justify-center">
              <div className="text-white lg:text-end md:text-end sm:text-center text-center">
                <h1 className='font-medium uppercase'>Overview</h1>
                <ul className='mt-3 flex flex-col gap-y-1'>
                  <li className=''><Link href="/" className='text-sm hover:text-cyan-400 text-gray-200'>Home</Link></li>
                  <li className=''><Link href="/courses" className='text-sm hover:text-cyan-400 text-gray-200'>Courses</Link></li>
                  <li className=''><Link href="/services" className='text-sm hover:text-cyan-400 text-gray-200'>Services</Link></li>
                  <li className=''><Link href="/gallery" className='text-sm hover:text-cyan-400 text-gray-200'>Gallery</Link></li>
                  <li className=''><Link href="/contact" className='text-sm hover:text-cyan-400 text-gray-200'>Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border border-red-500 flex lg:justify-end md:justify-end sm:justify-center justify-center">
              <div className="text-white lg:text-end md:text-end sm:text-center text-center">
                <h1 className='font-medium uppercase'>Programs</h1>
                <ul className='mt-3 flex flex-col gap-y-1'>
                  <li className=''><Link href="/mentorship" className='text-sm hover:text-cyan-400 text-md'>Mentorship Program</Link></li>
                  <li className=''><Link href="/physique-transformation" className='text-sm hover:text-cyan-400 text-md'>Physique Transformation</Link></li>
                  <li className=''><Link href="/courses" className='text-sm hover:text-cyan-400 text-md'>Many More...</Link></li>
                </ul>
              </div>
            </div>
            <div className="border border-red-500 flex lg:justify-end md:justify-end sm:justify-center justify-center">
              <div className="text-white lg:text-end md:text-end sm:text-center text-center">
                <h1 className='font-medium uppercase'>Get in touch</h1>
                <div className="mt-3">
                  <p className='text-sm'>Questions or feedback?</p>
                  <p className='text-sm'>We&apos;d love to hear from you</p>
                </div>
                <div className="flex flex-row items-center gap-3 lg:justify-end md:justify-end sm:justify-center justify-center mt-3">
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
          </div>
          <span className='bg-gray-500 my-3 flex w-full h-[1px] justify-center'></span>
          <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-between items-center text-white mt-3 border">
            <p className='text-xs'>&copy; 2023 <span><Link href="/" className='hover:text-cyan-400'>PaceZone.com</Link></span> | All rights reserved</p>
            <p className='lg:text-start md:text-start sm:text-center text-center'><Link className='text-xs hover:underline hover:text-cyan-400' href="terms-and-conditions">Terms & Conditions</Link> | <Link className='text-xs hover:underline hover:text-cyan-400' href="privacy-and-policies">Privacy & Policies</Link></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer