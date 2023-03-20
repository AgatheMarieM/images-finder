import { useState } from "react";


interface SearchEngineProps {
    query: string
}

export default function SearchEngine({ query }: SearchEngineProps) {
    const [searchQuery, setSearchQuery] = useState<string>("flowers");
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&order=popular`;
   

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setSearchQuery(event.target.value);
        console.log(event.target.value);
    }

    function handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        alert("query submitted!");

    }

    return (
        <form>
            <input type="text" placeholder="search for..." onChange={handleInput} />
            <input type="submit" value="go!" onClick={handleSubmit} />
            <p>{searchQuery}</p>
        </form>
    )
}