import { useState } from "react";


interface SearchEngineProps {
    query: string
}

export default function SearchEngine({ query }: SearchEngineProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");

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