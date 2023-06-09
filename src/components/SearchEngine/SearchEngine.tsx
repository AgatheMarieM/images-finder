import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./SearchEngine.css";
import { SearchEngineProps } from "../../Interface";


const SearchEngine = ({ apiUrl, results, setResults, query, setQuery }: SearchEngineProps) => {
    const [message, setMessage] = useState('');
    const [totalHits, setTotalHits] = useState();

    function updateMessage() {
        if (totalHits === 0) {
            setMessage(`No results could be found`)
        } else if (results.length > 0) {
            setMessage(`${totalHits} Results for '${query}'`);
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
        event.preventDefault();//prevent from reloading the page
        setQuery(event.target.value);
    }

    function handleSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        query.trim().length > 0 ? axios.get(apiUrl).then(handleResponse) : setMessage(`Please type a query`);
    }

    return (
        <div className="search-engine">
            <form className="search-form">
                <input type="text" placeholder="search for..." onChange={handleInput} data-testid="search-for" />
                <input type="submit" value="go!" onClick={handleSubmit} data-testid="go-button" />
            </form>
            <h2 data-testid="message">{message}</h2>

        </div>

    )
}

export default SearchEngine