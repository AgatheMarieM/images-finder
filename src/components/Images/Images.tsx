import Image from "../Image/Image";
import "./Images.css";
import { ImagesProps } from "../../Interface";

const Images = ({ results, favorites, setFavorites }: ImagesProps) => {

    return (
        <div className="images" data-testid="images-box" >
            {results.map((result, index) => {
                return (
                    <Image id={result.id} key={index} source={result.webformatURL} favorites={favorites} setFavorites={setFavorites} />
                )
            })}
        </div>
    )
}

export default Images