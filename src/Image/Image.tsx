import "./Image.css";

interface ImageProps {
    source: string;
    index: number;
}


export default function Image({ source }: ImageProps) {

    return (
        <div className="container">
            <div className="image" style={{ backgroundImage: `url(${source})` }}>
            </div>
        </div>
    )
}