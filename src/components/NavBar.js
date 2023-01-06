import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from '../assets/img/github.svg'



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
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mhom35"><img src={github} alt=""/></a>
                    {/* <a href="#"><img src={navIcon3} alt=""/></a> */}
                </div>
                <a href="#connect"><button className="vvd"  href="#connect" onClick={() => console.log('connect')}><span>Hire Me</span></button></a>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
