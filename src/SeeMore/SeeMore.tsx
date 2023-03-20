import axios, { AxiosResponse } from "axios";
import "./SeeMore.css"

interface SeeMoreProps {
    results: any[];
    setResults: any;
    page: number;
    setPage: any;
    query: string;

}

export default function SeeMore({ results, setResults, page, setPage, query}: SeeMoreProps) {
   
    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&order=popular&page=${page}`;


    function handleResponse(response: AxiosResponse) {
        setResults(response.data.hits);
        console.log(results);
    }



    function incrementPage(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        setPage(page + 1);
        console.log(page);
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <>           
            <div className="SeeMoreButton">
                <button className="button" onClick={incrementPage}>See more</button>
            </div>
        </>

    )
}