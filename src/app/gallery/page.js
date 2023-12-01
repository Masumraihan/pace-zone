"use client"

import React from 'react'
import UnderLineStroke from '../components/UnderLineStroke';
import PhotoAlbum from 'react-photo-album';
import GalleryAlbum from '../components/GalleryAlbum';
import photos from './photos';

const Gallery = () => {
  return (
    <>
      <div className="2xl:container mx-auto border py-16">
        <div className='container w-11/12 mx-auto'>
          <div className="flex justify-center">
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold text-neutral-950 flex w-fit flex-col gap-y-1'>Our Gallery<UnderLineStroke fill="#000" /></h1>
          </div>
          <div className="mt-8 p-4">
          <PhotoAlbum layout="rows" photos={photos} renderPhoto={GalleryAlbum} defaultContainerWidth={1000} sizes={{ size: "calc(100vw - 240px)" }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery