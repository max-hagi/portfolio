import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from "react";
import ghlogo from "../assets/github-icon.svg"
import lilogo from "../assets/linkedin-icon.svg"
import iglogo from "../assets/instagram-icon.svg"
import logo from "../assets/gamatatsu.webp"
import "./NavBar.css"


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home') //Keeping track of which tab user is in
    const [scrolled, setScrolled] = useState(false) //Detecting if user scrolled enough

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY>50){ //If user is in top 50% of scrollbar
                setScrolled(true);
            } else {
                setScrolled(false); //If user is in bottom 50% of scrollbar
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => { //Changing the active link using useState function
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img width={50} onClick={() => onUpdateActiveLink("home")} src={logo} alt={"Gamatatsu"}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link":"navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link":"navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link":"navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        <Nav.Link href="#resume" className={activeLink === "resume" ? "active navbar-link":"navbar-link"} onClick={() => onUpdateActiveLink("resume")}>Resume</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/maxime-savehilaghi" target={"_blank"} rel="noreferrer"><img src={lilogo} alt={"LinkedIn Logo"} /> </a>
                            <a href="https://github.com/max-hagi" target={"_blank"} rel="noreferrer"><img src={ghlogo} alt={"GitHub Logo"} /> </a>
                            <a href="https://www.instagram.com/max.hagi/" target={"_blank"} rel="noreferrer"><img src={iglogo} alt={"Instagram Logo"} /> </a>
                        </div>
                        <button className="connect-btn" onClick={() => console.log("Connect")}><span>Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar