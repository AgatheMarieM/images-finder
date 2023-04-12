import { FooterWrapper } from "./Footer.styles";

const Footer = () => {
    return (
        <FooterWrapper>
            <p >All photos from:
                <a href="https://pixabay.com"
                    target={"_blank"}
                    rel="noopener noreferrer">
                    https://pixabay.com
                </a>
            </p>
        </FooterWrapper>
    )
}

export default Footer