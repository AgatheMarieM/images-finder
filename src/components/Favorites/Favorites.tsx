import './Favorites.css';
import Pager from '../Pager/Pager';
import Image from '../Image/Image';
import { useFavoritesContext } from '../../context/favorites-context';

const Favorites = () => {
    const { favorites } = useFavoritesContext();

    return (
        <div className='Favorites'>
            <h2>
                Favorite images
            </h2>
            <div>
                {favorites.map(favorite => {
                    return (
                        <Image
                            id={favorite.id}
                            key={favorite.id}
                            source={favorite.source}
                        />
                    )
                })}
            </div>
            <Pager />
        </div>
    )
}

export default Favorites;