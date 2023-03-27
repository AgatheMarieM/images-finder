import "./Image.css";
import { useState } from "react";
import { ImageProps } from "../../Interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';



export default function Image({ source }: ImageProps) {

    const [bookmarkIcon, setHeartIcon] = useState(faBookmarkRegular);
    const [toggle, setToggle] = useState(true);

    function toggleIcon() {
        setToggle(!toggle);
        setHeartIcon(bookmarkIcon === faBookmarkRegular ? faBookmarkSolid : faBookmarkRegular);
    }

    return (
        <div className="container">
            <div className="image" data-testid="image" style={{ backgroundImage: `url(${source})` }}>
                <a className="subtitle" href={source} target="_blank">© Pixabay</a>
                <FontAwesomeIcon className="bookmark-icon" onClick={toggleIcon} icon={bookmarkIcon} />
            </div>
        </div>
    )
}