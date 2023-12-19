
import { getCurrentUser } from "../actions/getCurrentUser"
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage =async () => {

    const currentUser= await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState title="Unauthorized" subtitle="Please Login"/>
            </ClientOnly>
        )
    }

    const listing= await getListings({userId:currentUser?.id});

    if(!listing){
        return(
            <ClientOnly>
                <EmptyState title="No Properties" subtitle="Looks like you don't have any properties"/>
            </ClientOnly>
        )
    }
  return (

    <ClientOnly>
        <PropertiesClient listings={listing} currentUser={currentUser}/>
    </ClientOnly>
    
  )
}

export default  PropertiesPage