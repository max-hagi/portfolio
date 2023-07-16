import Carousel from "react-bootstrap/Carousel";
import skill1 from "../assets/memoji.PNG";
import skill2 from "../assets/hangshake-icon.svg"
import skill3 from "../assets/hangshake-icon.svg"


export const Skills = () => {

    return (
        <section className="skill" id="skills">
            <Carousel infinite={true} className="skill-slider">
                <Carousel.Item className='slide'>      
                    <img src={skill1} alt="Skill 1" /> 
                    <h5> Object Oriented Languages </h5>    
                </Carousel.Item>

                <Carousel.Item className='slide'>      
                    <div>
                        <img src={skill2} alt="Skill 2" /> 
                        <h5> Customer Service </h5>
                    </div>
                </Carousel.Item>
            　　　      
                <Carousel.Item className='slide'>      
                    <div>
                        <img src={skill3} alt="Skill 3" /> 
                        <h5> Lorem Ipsum </h5>
                    </div>
                </Carousel.Item>
            </Carousel>

        </section>
    );
}

export default Skills