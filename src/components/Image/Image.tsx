import "./Image.css";
import { useState } from "react";
import { ImageProps } from "../../Interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { useFavoritesContext } from '../../context/favorites-context';
import Card from "../Card/Card";
import {
    ImageBox,
    ImageWatermark,
    BookmarkIcon
} from './Image.styles';


const Image = ({ id, source }: ImageProps) => {
    const { favorites, setFavorites } = useFavoritesContext();
    //destructuring object returned by the hook

    const [favorite, setFavorite] = useState<boolean>(favorites.some(e => e.id === id));
    //some devolve boolean. Checking if favorite is true || false on first load

    function toggleIcon() {
        if (favorite) {
            setFavorites(favorites.filter((fav) => fav.id !== id));
            setFavorite(false);
        } else {
            setFavorites([...favorites, { 'id': id, 'source': source }]);
            setFavorite(true);
        }
    }

    return (
        <Card>
            <ImageBox data-testid="image" style={{ backgroundImage: `url(${source})` }}>
                <ImageWatermark href={source} target="_blank">© Pixabay</ImageWatermark>
                <BookmarkIcon>
                    <FontAwesomeIcon onClick={toggleIcon} icon={favorite ? faBookmarkSolid : faBookmarkRegular} />
                </BookmarkIcon>
            </ImageBox>
        </Card>
    )
}

export default Image