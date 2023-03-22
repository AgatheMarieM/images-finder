import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./SearchEngine.css";
import { SearchEngineProps } from "../Interface";


export default function SearchEngine({ results, setResults, page, query, setQuery }: SearchEngineProps) {
    const [message, setMessage] = useState("");
    const [totalHits, setTotalHits] = useState();
    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&order=popular&page=${page}`;


    function updateMessage() {
        if (totalHits === 0) {
            setMessage(`No results can be found`)
        } else if (results.length) {
            setMessage(`${totalHits} Results for '${query}'`)
        } else {
            setMessage(``)
        }
    }

    useEffect(() => {
        updateMessage();
    }, [results, totalHits]); //update message whenever results or totalHits change  

    function handleResponse(response: AxiosResponse) {
        setResults(response.data.hits);
        setTotalHits(response.data.total);

    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setQuery(event.target.value);
    }

    function handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="search-engine">
            <form className="search-form">
                <input type="text" placeholder="search for..." onChange={handleInput} />
                <input type="submit" value="go!" onClick={handleSubmit} data-testid="go-button" />
            </form>
            <h2 data-testid="message">{message}</h2>
        </div>

    )
}