import Image from 'next/image';
import React from 'react';

const GalleryAlbum = ({
  photo,
  imageProps:{alt, title, sizes, className, onClick},
  wrapperStyle
}) => {
  return (
    <>
      <div style={{...wrapperStyle, position:"relative"}}>
        <Image
          fill
          style={{borderRadius:"15px", boxShadow:"0px 0px 10px 1px #a2a2a2"}}
          src={photo}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
          {...{ alt, title, sizes, className, onClick }}
        />
      </div>
    </>
  )
}

export default GalleryAlbum