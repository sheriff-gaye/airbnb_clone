
import { getCurrentUser } from "../actions/getCurrentUser"
import getReservation from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripsClient from './TripsClient';




const TripsPage = async() => {

    const currentUser=await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState title="Unauthorized" subtitle="Please Login"/>
            </ClientOnly>
        )
    }

    const reservations=await getReservation({userId:currentUser?.id});

    if(!reservations){
        return(
            <ClientOnly>
                <EmptyState title="No Trips Found" subtitle="Look like you have not reserved any Trips"/>
            </ClientOnly>
        )
    }
  return (

    <ClientOnly>

        <TripsClient reservations={reservations} currentUser={currentUser}/>
    </ClientOnly>
    
  )
}

export default  TripsPage