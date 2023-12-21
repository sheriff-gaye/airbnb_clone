"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Logo = ({}) => {

  const router=useRouter();
  return (
    <Image onClick={()=>router.push('/')} className='md:block cursor-pointer' height={100} width={100} alt='logo' src='/images/logo.png'/>
  )
}

export default Logo