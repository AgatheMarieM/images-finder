import "./Image.css";
import {FinderProps} from "../Interface";


export default function Image({ source }: FinderProps) {

    return (
        <div className="container">
            <div className="image" style={{ backgroundImage: `url(${source})` }}>
            </div>
        </div>
    )
}