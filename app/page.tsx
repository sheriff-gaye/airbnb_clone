import Image from 'next/image'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import EmptyState from './components/EmptyState'
import getListings from './actions/getListings'
import ListingCard from './components/listings/ListingCard'
import { getCurrentUser } from './actions/getCurrentUser'
import { IListingparams } from './actions/getListings';


interface HomeProps{
  searchParams:IListingparams
}

const Home= async ({searchParams}:HomeProps)=> {

  const lisitng= await getListings(searchParams);
  const currentUser=await  getCurrentUser()

  if(lisitng.length===0){
    return(
      <ClientOnly>

        <EmptyState/>
      </ClientOnly>
    )
  }
  return (
   <ClientOnly>
    <Container>
      <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      {
        lisitng.map((item:any)=>{
          return(
            <ListingCard  key={item.id} data={item} currentUser={currentUser}/>
          )
        })
      }

      </div>
    </Container>
   </ClientOnly>
  )
}

export default Home;
