"use client"

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";


export const categories=[
    {
        label:'Beach',
        icon:TbBeach,
        description:"This property is close to the beach"
    },{
        label:'Windmills',
        icon:GiWindmill,
        description:"This property has windmills" 

    },
    {
        label:'Modern',
        icon:MdOutlineVilla,
        description:"This property is villa" 

    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
      },
      {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!'
      },
      {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
      },
      {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake!'
      },
      {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activies!'
      },
      {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is an ancient castle!'
      },
]

const Categories = () => {

    const params=useSearchParams();
    const category=params?.get('category');
    const pathname=usePathname();

    const mainPage=pathname==='/';

    if(!mainPage)return null

   

    
  return (
  <Container>
    <div className="pb-4 flex flex-row items-center justify-between overflow-x-auto">
        
{
    categories.map((item)=>(
       <CategoryBox key={item.label}  label={item.label} selected={category==item.label} icon={item.icon}/>
    ))
}
    </div>
  </Container>
  )
}

export default Categories