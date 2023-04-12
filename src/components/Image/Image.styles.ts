import styled from "styled-components";

export const ImageBox = styled.div`
    background-size: cover;
    background-position: center;
    border-radius: 6%;
    padding: 50%;
    position:relative;
    width: 100%;
`;

export const ImageWatermark = styled.a`

    font-size: 0.7rem;
    position: absolute;
    color: white;
    bottom: 1%;
    right: 5%;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        font-style: italic;
    }
`;

export const BookmarkIcon = styled.div`
 
    color: white;
    position: absolute;
    top: 5%;
    right: 5%;

&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`;