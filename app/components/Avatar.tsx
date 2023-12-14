"use client"

import Image from 'next/image'

const Avatar = () => {
  return (
   <Image height={30} width={30} alt='avatar' src='/images/placeholder.jpg' className='rounded-full'/>
  )
}

export default Avatar