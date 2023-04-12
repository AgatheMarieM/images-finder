import Image from "../Image/Image";
import { ImagesWrapper } from "./Images.styles";
import { ImagesProps } from "../../Interface";

const Images = ({ results }: ImagesProps) => {
    return (
        <ImagesWrapper data-testid="images-box" >
            {results.map((result) => {
                return (
                    <Image
                        id={result.id} key={result.id}
                        source={result.webformatURL}
                    />
                )
            })}
        </ImagesWrapper>
    )
}

export default Images