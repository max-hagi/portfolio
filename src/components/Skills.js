import Carousel from "react-bootstrap/Carousel";
import skill1 from "../assets/code-icon.svg";
import skill2 from "../assets/website-icon.svg"
import skill3 from "../assets/hangshake-icon.svg"
import "./Skills.css"


export const Skills = () => {

    const responsive = {
        largeScreen: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        averageScreen: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        smallScreen: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobileScreen: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skill">
            <div className="carousel-box">
                <div className="overhead-description">
                    <h1>About Me</h1>
                    <p>
                    I'm a student at Western Univsersity working towards and honours spec in computer science and a minor in game development.<br></br>I have experience working on self-driven and collaborative software development projects using agile methodologies.</p>
                </div>

                <div className="carousel-slider">
                    <Carousel responsive={responsive} infinite={true}>
                        <Carousel.Item className="carousel-item">      
                            <img 
                            className="carousel-image"
                            src={skill1} 
                            alt="Object Oriented Programming"
                            /> 
                            <Carousel.Caption className="carousel-caption">
                                <h5> Object Oriented Programming </h5>    
                                <p>C++, Python, Java</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">      
                            <img 
                            className="carousel-image"
                            src={skill2} 
                            alt="Object Oriented Programming"
                            /> 

                            <Carousel.Caption className="carousel-item-caption">
                                <h5>Web Development</h5>    
                                <p>ReactJS, Bootstrap CSS</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">      
                            <img 
                            className="carousel-image"
                            src={skill3} 
                            alt="Object Oriented Programming"
                            /> 
                            <Carousel.Caption className="carousel-caption">
                                <h5>Leadership</h5>    
                                <p>d</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </section>
    );
}

export default Skills