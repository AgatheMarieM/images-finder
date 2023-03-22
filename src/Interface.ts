export interface SearchEngineProps {
    apiUrl: string;
    page: number;
    query: string;
    setQuery: any;
    results: any[];
    setResults: any;
}

export interface ImagesProps {
    results: any[];
    index: number;
}

export interface ImageProps {
    source: string;

}

export interface SeeMoreProps {
    apiUrl: string;
    results: any[];
    setResults: any;
    page: number;
    setPage: any;
    query: string;
}

