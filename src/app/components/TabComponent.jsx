"use client";

import React, { useState } from 'react'
import CheckSign from "../../../public/icons/check-sign.svg";
import WhatsAppIcon from "../../../public/icons/whatsapp-colored.svg";
import SmartPhone from "../../../public/icons/smartphone.svg";
import ArrowLong from "../../../public/icons/arrow-long.svg";
import Image from 'next/image';
import Select from './CustomSelectComponent/Select';
import Link from 'next/link';

const TabsComponent = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 mt-6">
        <div className="lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1">

          <div className="tab-buttons lg:grid md:grid sm:hidden hidden lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 rounded-xl gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={`rounded-xl shadow transition-all hover:ring-2 ring-[#DD2A62] text-md px-6 py-3 font-medium ${activeTab === index ? 'active text-[#DD2A62] bg-[rgba(221,42,98,0.2)]' : 'text-gray-700'}`}
              >
                {tab.tabName}
              </button>
            ))}
          </div>

          <div className="lg:hidden md:hidden sm:flex flex flex-col py-4">
            <h1 className='mb-1 font-medium text-lg'>Select your plan</h1>
            <Select tabs={tabs} onSelect={handleTabClick} />
          </div>

          <div className="lg:hidden md:hidden sm:flex flex flex-col">
            <h1 className='text-2xl font-bold mb-4'>Standard Plan</h1>
            <span className='text-gray-700 flex'>Starts at</span>
            <span className='lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-extrabold'>Rs {tabs[activeTab].price.toLocaleString("en-IN")}</span>
            <div className="mt-3">
              {/*<Link href={"#!"} className='rounded-xl active:scale-95 shadow transition-transform px-4 py-2 text-center bg-[#330E83] w-full font-medium text-white'>Buy now</Link>*/}
              <Link
                href={`https://wa.me/7906089769/?text=`}
                target='_blank'
                className='flex items-center transition-all gap-x-1 bg-[#25D366] text-white hover:shadow-xl shadow px-4 py-2 rounded-xl font-semibold sm:w-full w-full sm:justify-center justify-center'
              >
                <Image
                  className='rounded-full mr-1'
                  src={"/icons/social-icons/whatsapp.gif"}
                  alt='whatsapp icon'
                  width={30}
                  height={25}
                />
                <button>
                  Buy Through WhatsApp
                </button>
              </Link>
            </div>
          </div>


          <div className="tab-content">
            <h1 className='text-lg text-gray-950 font-medium mt-6'>You will get</h1>
            <ul className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-6 mt-6'>
              {tabs[activeTab].tabContent.map((item, i) => (
                <li key={i} className='flex gap-3 items-center capitalize text-lg text-gray-700'>
                  <Image src={CheckSign} width={20} height={20} alt='check-sign' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex gap-4 flex-col">
            <p className='bg-[#b0fccc] px-4 rounded-full lg:text-[15px] md:text-md sm:text-sm text-sm py-1 w-fit font-semibold text-[#075E54] flex items-center gap-x-2'>
              <Image src={WhatsAppIcon} width={24} height={24} alt='WhatsAppIcon' />Along with that (24x7) whatsApp support</p>
            <p className='bg-[rgba(52,183,241,0.4)] px-4 rounded-full lg:text-[15px] md:text-md sm:text-sm text-sm py-1 w-fit font-semibold text-blue-700 flex items-center gap-x-2'>
              <Image src={SmartPhone} width={20} height={20} alt='SmartPhone' />Monthly 2 video calls(30mins) with the PaceZone Head Coach</p>
          </div>

          <div className="mt-6 flex">
            <p className='py-1 text-md font-normal text-gray-800 text-justify'>As a team We are always dedicated towards every single bowler who joins us and it&apos;s our aim to make them the best version of themselves. All we need is consistency  from the fast bowler and if given  we ensure that we will take your skill to a whole new level.
              Results guaranteed</p>
          </div>

        </div>


        <div className="lg:flex md:flex sm:hidden hidden flex-col p-3">
          <h1 className='text-2xl font-bold mb-4'>Standard Plan</h1>
          <span className='text-gray-700 flex'>Starts at</span>
          <span className='text-4xl font-extrabold'>Rs {tabs[activeTab].price.toLocaleString("en-IN")}</span>
          <div className="mt-3">
            {/*<Link href={"#!"} className='flex justify-center rounded-xl active:scale-95 shadow transition-transform px-4 py-2 text-center bg-[#330E83] w-full font-medium text-white'>Buy now</Link>*/}
            <Link
              href={`https://wa.me/7906089769/?text=`}
              target='_blank'
              className='flex items-center transition-all gap-x-1 bg-[#25D366] text-white  hover:shadow-xl shadow px-4 py-2 rounded-xl font-semibold lg:w-fit md:w-fit sm:w-full w-full lg:justify-left md:justify-left sm:justify-center justify-center'
            >
              <Image
                className='rounded-full'
                src={"/icons/social-icons/whatsapp.gif"}
                alt='whatsapp icon'
                width={30}
                height={25}
              />
              <button>
                Buy Through WhatsApp
              </button>
            </Link>
          </div>
        </div>


      </div>

    </>
  )
}

export default TabsComponent