

import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"
import { SafeListing, SafeUser } from "../types"


interface FavoriteClientProps{
    listing:SafeListing[]
    currentUser:SafeUser | null
}

const FavoriteClient = ({listing,currentUser}:FavoriteClientProps) => {
  return (
    <Container>
        <Heading title="Favorites" subtitle="List of Places  favorites"/>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {
                listing.map((item)=>(
                    <ListingCard data={item} key={item.id} currentUser={currentUser}/>
                ))
            }
        </div>
    </Container>
  )
}

export default FavoriteClient