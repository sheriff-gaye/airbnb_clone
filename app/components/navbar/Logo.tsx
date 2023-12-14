"use client"

import Image from 'next/image'

const Logo = () => {
  return (
    <Image className='hidden md:block cursor-pointer' height={100} width={100} alt='logo' src='/images/logo.png'/>
  )
}

export default Logo