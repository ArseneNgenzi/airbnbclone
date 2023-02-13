import Image from 'next/image'
import React from 'react'

const SmallCard = ({item}) => {
    const {img, location, distance} = item
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-200 hover:scale-105 transition rounded-lg'>
        {/* LEFT */}
        <div>
            <Image
                src={img}
                width={100}
                height={100}
                className='rounded-lg'
            />
        </div>

        {/* RIGHT */}
        <div>
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard