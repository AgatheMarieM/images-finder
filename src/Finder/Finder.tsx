import Header from "../Header/Header";
import SearchEngine from "../SearchEngine/SearchEngine";
import Images from "../Images/Images";
import { useState } from "react";




export default function Finder() {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <>
            <Header />
            <SearchEngine results={searchResults} setResults={setSearchResults} />
            <Images results={searchResults} />
        </>
    )
}