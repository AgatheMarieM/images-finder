import { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface SearchEngineProps {
    results: any[];
    setResults: any;

}

export default function SearchEngine({ results, setResults }: SearchEngineProps) {
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState(1);

    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&order=popular&page=${page}`;


    function handleResponse(response: AxiosResponse) {
        setResults(response.data.hits);
        console.log(results);
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setQuery(event.target.value);
    }

    function handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        axios.get(apiUrl).then(handleResponse);
    }

    function incrementPage(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        setPage(page + 1);
        console.log(page);
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <>
            <form>
                <input type="text" placeholder="search for..." onChange={handleInput} />
                <input type="submit" value="go!" onClick={handleSubmit} />
                {
                    results.length > 0 && <h3>Results for "{query}"</h3>

                }
            </form>
            <div className="SeeMoreButton">
                <button className="button" onClick={incrementPage}>See more</button>
            </div>
        </>

    )
}