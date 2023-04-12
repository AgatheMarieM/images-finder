import Pager from '../Pager/Pager';
import Image from '../Image/Image';
import { IFavoritesProps } from './Favorites.types';
import { useFavoritesContext } from '../../context/favorites-context';
import {
    FavoritesWrapper,
    FavoritesImages,
    FavoritesTitle
} from './Favorites.styles';

const Favorites = () => {
    const { favorites } = useFavoritesContext();

    return (
        <FavoritesWrapper>
            <FavoritesTitle>
                Favorite Images
            </FavoritesTitle>
            <FavoritesImages>
                {favorites.map(favorite => {
                    return (
                        <Image
                            id={favorite.id}
                            key={favorite.id}
                            source={favorite.source}
                        />
                    )
                })}
            </FavoritesImages>
            <Pager />
        </FavoritesWrapper>
    )
}

export default Favorites;