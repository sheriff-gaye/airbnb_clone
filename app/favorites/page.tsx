
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import {getCurrentUser} from "@/app/actions/getCurrentUser";

import FavoriteClient from './FavoriteClient';
import getFavorites from "../actions/getFavorites";

const ListingPage = async () => {
  const listings = await getFavorites();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClient
        listing={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;