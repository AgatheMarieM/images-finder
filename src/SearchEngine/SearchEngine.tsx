import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import "./SearchEngine.css";
import {FinderProps} from "../Interface";


export default function SearchEngine( {setResults, page, query, setQuery }: FinderProps) {
    const [message, setMessage] = useState("");
    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&order=popular&page=${page}`;


    function updateMessage(data: any){
        if(data.length){
            setMessage(`Results for '${query}'`)
        } else {
            setMessage(`No results can be found`)
        }

    }
    function handleResponse(response: AxiosResponse) {
        setResults(response.data.hits);
        updateMessage(response.data.hits); //needs useEffect to do callback directly here? improve later
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