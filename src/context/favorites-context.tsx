import React, { useState, FC, ReactNode, useContext, useEffect } from 'react';

export interface IFavorite {
    id: number;
    source: string;
}

interface IFavoritesContext {
    favorites: IFavorite[];
    setFavorites: (favorites: any) => void;
}

//Context is an empty object
export const FavoritesContext = React.createContext<IFavoritesContext>({} as IFavoritesContext);


//context provider component,
// takes a child component as a prop named 'children' of type ReactNode.
export const FavoritesContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites') || '[]'));

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    //localStorage.setItem(): object updated each time favorites change!
    //when an image is erased from the favorites as well

    return <FavoritesContext.Provider value={{
        favorites: favorites,
        setFavorites: setFavorites,
    }}>
        {children}
    </FavoritesContext.Provider>
}

//creating custom hook useFavoritesContext()
export const useFavoritesContext = () => {
    const favoritesContext = useContext(FavoritesContext);
    return favoritesContext;
}

//we export the provider that will wrap around the root, and the hook that we'll use when needed
export default { Provider: FavoritesContextProvider, useFavoritesContext };