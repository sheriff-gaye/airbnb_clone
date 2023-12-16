import { IconType } from 'react-icons';
"use client"


interface CategoryBoxProps{
    label:string;
    description:string
    icon:IconType
    selected?:boolean;
}

const CategoryBox = ({label,description,icon:Icon,selected}:CategoryBoxProps) => {
  return (
    <div>
      
    </div>
  )
}

export default CategoryBox