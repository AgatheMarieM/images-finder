export interface FavoritesProps {
    favorites: any[];
}

export interface FavoritesPageProps {
    favorites: any[];
}

export interface PagerProps {
    favorites: any[];
}

export interface FinderProps {
    favorites: any[];
    setFavorites: any;
    page: number;
    setPage: any;
}

export interface FinderPageProps {
    favorites: any[];
    setFavorites: any;
    page: number;
    setPage: any;
}


export interface ImagesProps {
    results: any[];

}

export interface SearchEngineProps {
    apiUrl: string;
    page: number;
    query: string;
    setQuery: any;
    results: any[];
    setResults: any;
}

export interface SeeMoreProps {
    apiUrl: string;
    results: any[];
    setResults: any;
    page: number;
    setPage: any;
    query: string;
}

