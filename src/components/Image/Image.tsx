import "./Image.css";
import { ImageProps } from "../../Interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';




export default function Image({ source }: ImageProps) {

    return (
        <div className="container">
            <div className="image" data-testid="image" style={{ backgroundImage: `url(${source})` }}>
                <a className="subtitle" href={source} target="_blank">© Pixabay</a>
            </div>           
        
            <FontAwesomeIcon icon={faRegularHeart} />
            <FontAwesomeIcon icon={faSolidHeart} />
        
        </div>
    )
}