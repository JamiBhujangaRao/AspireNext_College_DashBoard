import { useEffect, useState } from 'react'
import Header from '../Header'
import CollegeCard from '../CollegeCard'
import { removeFavorite } from '../../api/colleges'
import { getFavorites } from '../../api/favorites'
import { FavoritesContainer, CollegeGrid } from './styledComponents'

const Favorites = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favoriteColleges = await getFavorites()
                setFavorites(favoriteColleges)
            } catch (error) {
                console.error(error)
            }
        }
        fetchFavorites()
    }, [])

    const handleRemoveFavorite = async (id) => {
        try {
            await removeFavorite(id)
            setFavorites(prev => prev.filter(c => c.college_id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Header />
            <FavoritesContainer>
                <h1>My Favorite Colleges</h1>
                {favorites.length === 0 ? (
                    <p>No favorites added yet.</p>
                ) : (
                    <CollegeGrid>
                        {favorites.map(college => (
                            <CollegeCard
                                key={college.college_id}
                                college={college}
                                onAction={handleRemoveFavorite}
                                actionLabel="Remove from Favorites"
                            />
                        ))}
                    </CollegeGrid>
                )}
            </FavoritesContainer>
        </>
    )
}

export default Favorites
