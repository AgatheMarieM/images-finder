import "./Image.css";
import { useState } from "react";
import { ImageProps } from "../../Interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';




export default function Image({ source }: ImageProps) {
    const [heartIcon, setHeartIcon] = useState(faRegularHeart);
    const [toggle, setToggle] = useState(true);

    function toggleIcon() {
        setToggle(!toggle);
        setHeartIcon(heartIcon === faRegularHeart ? faSolidHeart : faRegularHeart);
    }

    return (
        <div className="container">
            <div className="image" data-testid="image" style={{ backgroundImage: `url(${source})` }}>
                <a className="subtitle" href={source} target="_blank">© Pixabay</a>
            </div>
            <FontAwesomeIcon onClick={toggleIcon} icon={heartIcon} />
        </div>
    )
}