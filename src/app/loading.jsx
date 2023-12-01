"use client";

import React, { useEffect, useState } from 'react'

const Loading = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, []);

  if (!mounted) {
    return (<div className="fixed top-0 gap-y-2 left-0 w-screen h-screen flex flex-col items-center justify-center backdrop-blur-sm z-50">
      <div className="border-t-4 border-primary dark:border-white border-solid rounded-full animate-spin h-16 w-16">
      </div>
        <span className='text-primary text-xl font-medium'>Loading...</span>
    </div>)
  }
}

export default Loading;