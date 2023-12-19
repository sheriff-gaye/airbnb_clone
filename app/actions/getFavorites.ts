import { getCurrentUser } from "./getCurrentUser";
import prisma from '@/app/libs/prismadb';

export default async function getFavorites() {

    try {

        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return []
        }

        const favourites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds) || []]
                }
            }
        });

        const safeFavorites = favourites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString()
        }));

        return safeFavorites

    } catch (error: any) {

        throw new Error(error);

    }
}