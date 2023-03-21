import axios, { AxiosResponse } from "axios";
import "./SeeMore.css"
import {FinderProps} from "../Interface";

export default function SeeMore(props: FinderProps) {

    const apiKey = `34572071-131273e105e5eb7248557f286`;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${props.query}&image_type=photo&order=popular&page=${props.page}`;


    function handleResponse(response: AxiosResponse) {
        let updatedResults = props.results.concat(response.data.hits);
        props.setResults(updatedResults);
    }


    function incrementPage(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        props.setPage(props.page + 1);
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