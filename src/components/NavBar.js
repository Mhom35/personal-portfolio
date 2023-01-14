import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import github from '../assets/img/github.svg'
import mitchellHomResume2023 from '../assets/img/mitchellHomResume2023.pdf';


export const NavBar = () => {
    const [activeLink, setActiveLink ] = useState('home');
    const [scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                //if user has scrolled back or hasn't moved
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        // remove EventListner when component gets removed from Dom
        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const sendToContact = async (e) => {
      e.preventDefault();
         // anchor link
      const element = document.createElement("a");
      element.target="_blank";
      element.href = {mitchellHomResume2023};
      element.rel = "noopener noreferrer";
      element.style.display = "none";
      element.download = "mitchellHomResume2023.pdf";

    // simulate link click
      await document.body.appendChild(element); // Required for this to work in FireFox
      
      await document.getElementById("connect").scrollIntoView();
      await element.click();

    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text" >
                <div className="social-icon">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mitchell-hom/"><img src={navIcon1} alt=""/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitchellhom"><img src={github} alt=""/></a>
                    {/* <a href="#"><img src={navIcon3} alt=""/></a> */}
                </div>
                <button className="vvd" onClick={sendToContact}><span>Hire Me</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
