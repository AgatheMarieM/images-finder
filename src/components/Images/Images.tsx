import Image from "../Image/Image";
import { ImagesWrapper } from "./Images.styles";
import { IImagesProps } from "./Images.types";

const Images = ({ results }: IImagesProps) => {
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