import Header from "../Header/Header";
import SearchEngine from "../SearchEngine/SearchEngine";
import Images from "../Images/Images";
import { useState } from "react";

/*
interface FinderProps {
    searchResults: string[],
   searchQuery: string
}*/

export default function Finder() {
    const [searchResults, setSearchResults] = useState<string[]>(['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg']);
    const [searchQuery, setSearchQuery] = useState<string>("");

    return (
        <>
            <Header />
            <SearchEngine query={searchQuery} />
            <Images results={searchResults} />
        </>
    )
}