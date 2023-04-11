import "./Image.css";
import Card from "../Card/Card";
import { useState, useEffect, useContext, FC } from "react";
import { ImageProps } from "../../Interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { useFavoritesContext } from '../../context/favorites-context';



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
        <Card className="image-container">
            <div className="image" data-testid="image" style={{ backgroundImage: `url(${source})` }}>
                <a className="subtitle" href={source} target="_blank">© Pixabay</a>
                <FontAwesomeIcon className="bookmark-icon" onClick={toggleIcon} icon={favorite ? faBookmarkSolid : faBookmarkRegular} />
            </div>
        </Card>
    )
}

export default Image