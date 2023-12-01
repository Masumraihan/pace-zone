import React from 'react'
import UnderLineStroke from '../components/UnderLineStroke';
import LocationIcon from "../../../public/icons/location-icon.svg"
import MailIcon from "../../../public/icons/mail-icon.svg"
import PhoneIcon from "../../../public/icons/phone-icon.svg"
import SendIcon from "../../../public/icons/send-icon.svg"
import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
      <div className="2xl:container mx-auto border py-16 border-red-700">
        <div className="container mx-auto w-11/12 border border-blue-700">
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className="relative flex-col lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-semibold drop-shadow-lg flex items-center gap-x-2 contact-us"><span>Contact us <span className="wave text-3xl">👋</span></span> <UnderLineStroke fill="#000" /></h1>

              <p className="text-md text-gray-700 lg:text-start md:text-start sm:text-center text-center">Any question or remarks? Just write us a message!</p>
            </div>
          </div>

          <div className="lg:mt-6 md:mt-36 sm:mt-36 mt-36">
            <div className="container lg:w-10/12 md:w-full sm:w-full w-full mx-auto me-0">
              <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col lg:items-stretch items-center lg:w-[90%] md:w-full sm:w-full w-full shadow-[0_15px_20px_5px_rgba(0,0,0,0.3)] rounded-3xl">
                <div className="px-12 lg:w-[36%] md:w-[80%] sm:w-[80%] w-[90%] shadow-sm shadow-[#330E83] lg:my-10 my-0 lg:-ms-28 ms-0 md:-mt-24 sm:-mt-24 -mt-24 flex items-center justify-center text-white py-16 bg-[#330E83] rounded-3xl">
                  <div className="space-y-10">
                    <h1 className="text-2xl font-semibold">Contact us</h1>
                    <div className="flex flex-col gap-y-8">
                      <div className="flex flex-row gap-x-3 items-center">
                        <Image src={LocationIcon} width={20} height={20} alt='location-icon' />
                        <Link className="lg:text-md md:text:md sm:text-sm text-sm font-semibold" href="https://maps.app.goo.gl/fwhQdiq4qpdSPfST9" target="_blank">Moonshine St. 14/05 Light City, London, United Kingdom</Link>
                      </div>
                      <div className="flex flex-row gap-x-3 items-center">
                        <Image src={MailIcon} width={20} height={20} alt='mail-icon' />
                        <Link className="lg:text-md md:text:md sm:text-sm text-sm font-semibold" href="mailto:pacezone@gmail.com">pacezone@gmail.com</Link>
                      </div>
                      <div className="flex flex-row gap-x-3 items-center">
                        <Image src={PhoneIcon} width={20} height={20} alt='PhoneIcon' />
                        <Link className="lg:text-md md:text:md sm:text-sm text-sm font-semibold" href="tel:+919999911111">+91 9999911111</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[70%] md:w-[80%] sm:w-[80%] w-full lg:my-10 my-0 lg:px-16 md:px-12 sm:px-8 px-5 py-4">
                  <div className="p-2 flex flex-col gap-y-2">
                    <h1 className="text-3xl font-medium text-[#0F4070]">Get in touch</h1>
                    <p className="text-md text-gray-700">Feel free to drop us a line below!</p>
                  </div>
                  <form className="p-2 mt-4">
                    <div className="flex flex-col gap-y-4">
                      <div className="w-full">
                        <input type="text" placeholder="Your Name" className="font-medium w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-4 transition-all rounded-lg ring-[#330E83]" />
                      </div>
                      <div className="w-full">
                        <input type="email" placeholder="Your Email" className="font-medium w-full py-3 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-4 transition-all rounded-lg ring-[#330E83]" />
                      </div>
                      <div className="w-full">
                        <textarea placeholder="Type your message here..." rows={5} className="font-medium w-full text-md shadow bg-[#F9F9FB] focus:bg-[#eeeeee] py-3 px-4 outline-none rounded-lg focus:ring-2 transition-all ring-offset-4 ring-[#330E83]" />
                      </div>
                      <div className="w-full">
                        <button type="submit" className="px-6 py-2 bg-[#330E83] outline-none text-white font-semibold shadow-2xl shadow-[#330E83] uppercase rounded-full active:scale-95 transition-all flex items-center gap-x-2">Send <Image src={SendIcon} width={16} height={16} alt='SendIcon' /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs