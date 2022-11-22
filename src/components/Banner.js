import {Row, Col, Container} from "react-bootstrap";
import {useState, useEffect} from "react";
import TrackVisibility from "react-on-screen";
import "./Banner.css"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [isWestern, setIsWestern] = useState(false);
    const rotatingItems = ["CS Student", "Western University", "Software Dev"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % rotatingItems.length;
        let fullText = rotatingItems[i];
        if (fullText===rotatingItems[1]) {setIsWestern(true);}
        else{setIsWestern(false)}
        let updatedText = isDeleting ? fullText.substring(0, text.length -1):fullText.substring(0, text.length+1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>{"Hi! I'm Maxime "} <span className="txt-rotate" dataPeriod="1000" data-rotate='["CS Student", "Western University", "Software Dev"]'><span className={isWestern ? "rotating-purple":"rotating"}>{text}</span></span></h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>

                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}