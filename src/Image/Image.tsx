import "./Image.css";
import { ImageProps } from "../Interface";


export default function Image({ source }: ImageProps) {

    return (
        <div className="container">
            <div className="image" data-testid="image" style={{ backgroundImage: `url(${source})` }}>
                <a className="subtitle" href={source} target="_blank">© Pixabay</a>
            </div>
        </div>
    )
}