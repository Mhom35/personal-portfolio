import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from '../assets/img/github.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mitchell-hom/"><img src={navIcon1} alt=""/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitchellhom"><img src={github} alt=""/></a>
            </div>
            <p>Copyright 2023. All Rights Reserved Mitchell Hom</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
