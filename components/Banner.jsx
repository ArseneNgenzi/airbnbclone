import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]'>
        <Image
            src='https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbXBsZSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
            // width={500}
            // height={500}
            // width={500}
            fill
            className='object-cover object-center'
        />
        <div className='absolute top-[50%] w-full text-center font-bold'>
            <p className='text-sm sm:text-xl capitalize'>Don't know where to go? Worry not.</p>
            <button className='text-sm sm:text-lg bg-white px-3 md:px-5 py-1 md:py-3 shadow-lg hover:shadow-2xl active:scale-90 transition rounded-full text-red-400 m-4 cursor-pointer'>Random places</button>
        </div>
    </div>
  )
}

export default Banner