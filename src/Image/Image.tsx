import "./Image.css";
import {ImageProps} from "../Interface";


export default function Image({ source }: ImageProps) {

    return (
        <div className="container">
            <div className="image" data-testid="image" style={{ backgroundImage: `url(${source})` }}>
            </div>
        </div>
    )
}