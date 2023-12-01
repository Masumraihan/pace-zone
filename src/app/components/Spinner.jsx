import Image from 'next/image';
import React from 'react';

const Spinner = () => {
  return (
    <>
      <Image src={"/spinner.svg"} width={20} height={20} alt='spinner'/>
    </>
  )
}

export default Spinner