import Image from 'next/image'
import React from 'react'

function HomeImg() {
  return (
    <div className=' relative flex h-[600px]'>
        <Image
            src="https://beatnik-5.myshopify.com/cdn/shop/files/beatnik_slider4.jpg?v=1613508798&width=2400"
            alt=''
            height={1000}
            width={1000}
            className='w-full object-cover'
        />
        <div className='z-10 absolute top-[14rem] left-[20rem]'>
            <p className='text-white text-7xl font-[700] w-[80%] text-center'>NEWS FROM THE OPTOMETRIST</p>
        </div>
    </div>
  )
}

export default HomeImg