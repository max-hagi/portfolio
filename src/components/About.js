import "./About.css"
import picture from "../assets/duck.jpeg"
import { Col, Image, Row } from "react-bootstrap";


export const About = () => {

    return (
        <section className="about" id="about">
            <h1>Who am I?</h1>
            <div className="img-gallery">   
                <Row className="row">
                    <Col lg={4} md={12} className="col">
                    <Image src={picture}/>
                    <Image src={picture}/>
                    </Col>
    
                    <Col lg={4} className="col">
                    <Image src={picture}/>
                    <Image src={picture}/>
                    </Col>
                </Row>
            </div>
  
        </section>
        
   
    );

}

export default About;
