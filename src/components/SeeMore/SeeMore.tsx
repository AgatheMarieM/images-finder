import axios, { AxiosResponse } from "axios";
import "./SeeMore.css"
import { SeeMoreProps } from "../../Interface";

export default function SeeMore(props: SeeMoreProps) {

    function handleResponse(response: AxiosResponse) {
        let updatedResults = props.results.concat(response.data.hits);
        props.setResults(updatedResults);
    }


    function incrementPage(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        props.setPage(props.page + 1);
        axios.get(props.apiUrl).then(handleResponse);
    }

    return (
        <>
            <div className="SeeMoreButton">
                <button className="button" data-testid="seemore-button" onClick={incrementPage}>See more</button>
            </div>
        </>

    )
}