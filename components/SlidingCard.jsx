import Image from 'next/image'
import React from 'react'

const SlidingCard = ({item}) => {
    const {img, title} = item
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out h-auto'>
        <div className='relative h-80 w-80'>
            <Image
                src={img}
                fill
                className='rounded-xl'
            />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default SlidingCard