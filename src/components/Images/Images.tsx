import Image from "../Image/Image";
import "./Images.css";
import {ImagesProps} from "../../Interface";


export default function Images({ results, index }: ImagesProps) {
    return (
        <div className="images" data-testid="images-box" >
            {results.map((result, index) => {
                return (
                    <Image key={index} source={result.webformatURL} />
                )
            })}
        </div>
    )
}