"use client";

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowDown from "../../../../public/icons/arrow-down.svg";
import ArrowUp from "../../../../public/icons/arrow-up.svg";
import Image from 'next/image';

const Select = ({ tabs, onSelect }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(tabs[0].tabName);
  const selectRef = useRef(null);

  const handleSelect = (index) => {
    setSelectedOption(tabs[index].tabName);
    onSelect(index);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative inline-block w-full text-left">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="bg-rose-100 text-[#DD2a62] font-semibold w-full flex justify-between items-center select-none text-xl px-4 py-3 rounded-md">
          {selectedOption} { isOpen ? <span><Image src={ArrowUp} width={20} height={20} alt='ArrowUp' /></span> : <span><Image src={ArrowDown} width={20} height={20} alt='ArrowDown' /></span> }
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute w-full right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="p-2">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="block py-2 px-5 text-sm text-gray-900 rounded-md cursor-pointer hover:bg-rose-200 hover:text-[#DD2A62]"
                  onClick={() => handleSelect(index)}
                >
                  {tab.tabName}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
