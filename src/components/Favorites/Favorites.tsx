import './Favorites.css';
import Pager from '../Pager/Pager';
import { FavoritesProps } from "../../Interface";
import FavoritesContext from '../../context/favorites-context';
import { useContext } from 'react';



const Favorites = ({ favorites }: FavoritesProps) => {
    const ctx = useContext(FavoritesContext);
    return (
   
            <div className='Favorites'>
                <h2>
                    Favorite images
                </h2>
                <p>{ctx.favorites}</p>
                <Pager />
            </div>
       
    )
}

export default Favorites;