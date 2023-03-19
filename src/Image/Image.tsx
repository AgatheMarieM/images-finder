import "./Image.css";

interface ImageProps {
    source: string;
    index: number
}


export default function Image({ source, index }: ImageProps) {

    return (
        <div className="container">
            <div className="image" style={{ backgroundImage: `url(${source})` }} key={index}>
                {/* <img src={source} alt="#"/> */}
            </div>
        </div>
    )
}