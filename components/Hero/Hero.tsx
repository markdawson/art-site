import { Container, TextContainer } from './style'

export const Hero = () => {

    return (
        <Container>
            <TextContainer>
                <h1>Hello!</h1>
                <h2>More than 300 years ago London was in the grip of the Great Plague. Robinson Crusoe writer Daniel Defoe's account about this time.</h2>
            </TextContainer>
            <button src="#">Learn More</button>

            <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11C5B/production/_111859727_plague.jpg" alt="ahh plague!"></img>
        </Container>
    )
}