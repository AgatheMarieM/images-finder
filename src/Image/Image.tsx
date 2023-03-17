interface ImageProps {
    source: string;
    index: number
}


export default function Image ({source, index}: ImageProps){

return(
    <div key={index}>
        <img src={source} alt="#"/>
    </div>
)
}