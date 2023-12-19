
import { Listing } from '@prisma/client';
import getLisitingById from '@/app/actions/getLisitingById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import ListingClient from './ListingClient';
import getReservation from '@/app/actions/getReservations';

interface Iparams{
  listingId?:string
}

const ListingPage = async({params}:{params:Iparams}) => {

  const listing=await getLisitingById(params);
  const reservation=await getReservation(params);

  const currentUser=await  getCurrentUser();

  if(!listing){
    return(
      <ClientOnly>
        <EmptyState/>
      </ClientOnly>
    )
  }



  return (
   <ClientOnly>
    <ListingClient listing={listing} currentUser={currentUser} reservation={reservation}/>
   </ClientOnly>
  )
}

export default ListingPage