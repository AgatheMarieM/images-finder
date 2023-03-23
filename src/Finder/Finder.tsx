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
    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&order=popular&page=${searchPage}`;

    return (
        <>
            <Header />
            {/* component is always rendered, which means that an API call will be made even if the search query is empty? */}
            <SearchEngine
                apiUrl={apiUrl}
                results={searchResults}
                setResults={setSearchResults}
                query={searchQuery}
                setQuery={setSearchQuery}
                page={searchPage} />

            {searchQuery && <Images
                results={searchResults} />
            }

            {searchResults.length > 0 && searchQuery &&
                <SeeMore
                    apiUrl={apiUrl}
                    results={searchResults}
                    setResults={setSearchResults}
                    query={searchQuery}
                    page={searchPage}
                    setPage={setSearchPage} />
            }

            {searchResults.length > 0 && searchQuery &&
                <Footer />
            }
        </>
    )
}