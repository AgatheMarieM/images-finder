import Image from "../Image/Image";
import "./Images.css";

import { ImagesProps } from "../../Interface";

const Images = ({ results }: ImagesProps) => {
    return (
        <div className="images" data-testid="images-box" >
            {results.map((result) => {
                return (
                    <Image
                        id={result.id} key={result.id}
                        source={result.webformatURL}
                    />
                )
            })}
        </div>
    )
}

export default Images