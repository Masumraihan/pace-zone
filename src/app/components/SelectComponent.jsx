"use client";

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const SelectComponent = ({ options, onSelect, value }) => {

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [searchState, setSearchState] = useState('');
  const containerRef = useRef(null);

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
    setSearchState('');
  }

  const handleSelectState = (option) => {
    setIsSelectOpen(false)
    onSelect(option)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="" ref={containerRef}>
        <div className="relative">
          <div onClick={toggleSelect} className="bg-[#F9F9FB] shadow text-md focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83] truncate py-3 px-4  min-w-40 cursor-pointer">{value}</div>

          <AnimatePresence>
            {
              isSelectOpen &&
              <>
                <motion.div
                  className="absolute w-full mt-2 z-30 max-h-64 min-h-auto overflow-auto custom-state-select bg-slate-200 rounded-xl p-2 shadow-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}>
                  <div className="mb-2 sticky top-0">
                    <input
                      type="text"
                      placeholder="Search state..."
                      className="font-normal w-full py-2 px-4 shadow text-md bg-[#F9F9FB] focus:bg-[#eeeeee] outline-none focus:ring-2 ring-offset-2 transition-all rounded-lg ring-[#330E83]"
                      value={searchState}
                      onChange={(e) => setSearchState(e.target.value)}
                    />
                  </div>
                  <div className="overflow-y-auto">
                    <div className="">
                      {options
                        .filter((option) =>
                          option.toLowerCase().includes(searchState.toLowerCase())
                        )
                        .map((option, index) => (
                          <motion.div
                            key={index}
                            onClick={() => {
                              handleSelectState(option)
                            }}
                            className="w-full p-2 text-left hover:bg-gray-400 rounded-lg dark:hover:bg-neutral-700 cursor-pointer"
                          >
                            {option}
                          </motion.div>
                        ))}
                    </div>
                  </div>

                </motion.div>
              </>
            }
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default SelectComponent;
