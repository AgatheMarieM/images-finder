import "./Image.css";
import Card from "../Card/Card";
import { useState, useEffect, useContext, FC } from "react";
import { ImageProps } from "../../Interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import FavoritesContext from '../../context/favorites-context';


const Image = ({ source, favorites, setFavorites }: ImageProps) => {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(false)
    }, [source])

    function toggleIcon() {
        if (favorite) {
            setFavorites(favorites.filter((fav) => fav !== source));
            setFavorite(false);
        } else {
            setFavorites([...favorites, source]);
            /* setFavorites((prevFavorites) => {
                return [...prevFavorites, source];
            }) */
            localStorage.setItem('favorites', JSON.stringify(favorites));
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