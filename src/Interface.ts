export type SearchEngineProps {
    apiUrl: string;
    page: number;
    query: string;
    setQuery: any;
    results: any[];
    setResults: any;
}

export type ImagesProps {
    results: any[];
    index: number;
    favorites: any[];
    setFavorites: any;
   
}

export type ImageProps {
    source: string;
    id: number;
    favorites: any[];
    setFavorites: any;
}

export type SeeMoreProps {
    apiUrl: string;
    results: any[];
    setResults: any;
    page: number;
    setPage: any;
    query: string;
}

export type FavoritesProps {
    favorites: any[];
}