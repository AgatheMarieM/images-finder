import { useState } from "react";
import Image from "../Image/Image";

interface ImagesProps {
    results: string[];
}

export default function Images({ results }: ImagesProps) {

    if (results) {
        return (
            <div className="Images">
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