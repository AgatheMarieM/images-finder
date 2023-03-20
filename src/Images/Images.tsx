import Image from "../Image/Image";
import "./Images.css";

interface ImagesProps {
    results: any[];
    index: number;
}

export default function Images({ results }: ImagesProps) {
    return (
        <div className="images">
            {results.map((result, index) => {
                return (
                    <Image index={index} source={result.webformatURL} />
                )
            })}
        </div>
    )
}