import { useState } from "react";
import Image from "../Image/Image";
import "./Images.css";

interface ImagesProps {
    results: string[];
}

export default function Images({ results }: ImagesProps) {

    if (results) {
        return (
            <div className="images">
                    {results.map((result) => {
                        return (
                            <Image source={result} />
                        )
                    })}              
            </div>
        )
    } else {
        return null;
    }
}