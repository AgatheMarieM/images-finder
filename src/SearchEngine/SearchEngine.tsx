interface SearchEngineProps {
    query: string
  }

export default function SearchEngine({query}: SearchEngineProps) {
    return (
        <form>
            <input type="text" placeholder="search for..." />
            <input type="submit" value="go!" />
        </form>
    )
}