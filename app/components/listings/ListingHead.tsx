"use client"
import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HeartButton';


interface ListingHeadProps{
    title:string
    locationValue:string
    id:string;
    imageSrc:string
    currentUser?:SafeUser| null
}
const ListingHead = ({title,locationValue,id,currentUser,imageSrc}:ListingHeadProps) => {

    const {getByValue}=useCountries();

    const location=getByValue(locationValue);
  return (
    <>
    <Heading title={title} subtitle={`${location?.label} , ${location?.region}`}/>
    <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
        <Image src={imageSrc} fill  alt='image' className='object-cover w-full'/>
        <div className='absolute top-3 right-5'>
            <HeartButton listingId={id} currentUser={currentUser}/>

        </div>

    </div>
    </>
  )
}

export default ListingHead