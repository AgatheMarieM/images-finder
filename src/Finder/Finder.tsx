import Header from "../Header/Header";
import SearchEngine from "../SearchEngine/SearchEngine";
import Images from "../Images/Images";
import SeeMore from "../SeeMore/SeeMore";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function Finder() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchPage, setSearchPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState<string>("");

    return (
        <>
            <Header />
            <SearchEngine
                results={searchResults}
                setResults={setSearchResults}
                query={searchQuery}
                setQuery={setSearchQuery}
                page={searchPage} />
            <Images
                results={searchResults} />
            <SeeMore
                results={searchResults}
                setResults={setSearchResults}
                query={searchQuery}
                page={searchPage}
                setPage={setSearchPage} />

            {(searchResults.length) ? <Footer /> : null}
        </>
    )
}