import Header from "../Header/Header";
import SearchEngine from "../SearchEngine/SearchEngine";
import Images from "../Images/Images";
import { useState } from "react";


interface FinderProps {
    searchResults: string[],
    searchQuery: string
}

export default function Finder({searchResults, searchQuery}: FinderProps) {

   
    const [results, setResults] = useState<string[]>([]);
    const [query, setQuery] = useState<string>("");

    return (
        <>
            <Header />
            <SearchEngine query={query} />
            <Images results={results} />
        </>
    )
}