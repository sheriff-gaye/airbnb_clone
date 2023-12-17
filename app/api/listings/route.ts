import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';

export async function POST(
    request: Request
) {


    const user=await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    const body = await request.json();


    const {
        category,
        location,
        guestCount,
        roomCount,
        bathroomCount,
        imageSrc,
        price,
        title,
        description
    }=body


    const listing =await prisma.listing.create({
        data:{
            category,
            locationValue:location.value,
            guestCount,
            roomCount,
            bathroomCount,
            imageSrc,
            price:parseInt(price,10),
            title,
            description,
            userId:user.id

        }
    });

    return NextResponse.json(listing);





}