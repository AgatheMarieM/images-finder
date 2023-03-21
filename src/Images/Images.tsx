import Image from "../Image/Image";
import "./Images.css";
import {ImagesProps} from "../Interface"


export default function Images({ results, index }: ImagesProps) {
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