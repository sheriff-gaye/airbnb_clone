import Image from 'next/image'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import EmptyState from './components/EmptyState'
import getListings from './actions/getListings'
import ListingCard from './components/listings/ListingCard'
import { getCurrentUser } from './actions/getCurrentUser'

export default async function Home() {
  const lisitng= await getListings();
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
        lisitng.map((item)=>{
          return(
            <ListingCard  key={item.id} data={item} user={currentUser}/>
          )
        })
      }

      </div>
    </Container>
   </ClientOnly>
  )
}
