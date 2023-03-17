import { useState } from "react";


interface SearchEngineProps {
    query: string
}

export default function SearchEngine({ query }: SearchEngineProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
      
        setSearchQuery(event.target.value);
        console.log(event.target.value);
    }

    return (
        <form>
            <input type="text" placeholder="search for..." onChange={handleInput} />
            <input type="submit" value="go!" />
        </form>
    )
}