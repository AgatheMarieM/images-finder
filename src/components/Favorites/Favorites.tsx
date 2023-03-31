import './Favorites.css';
import Pager from '../Pager/Pager';
import { FavoritesProps } from "../../Interface";



const Favorites = ({favorites}: FavoritesProps) => {
    return (
        <div className='Favorites'>
            <h2>
                Favorite images
            </h2>
            <p>looping through favorites array</p>
            <Pager />
        </div>

    )
}

export default Favorites;