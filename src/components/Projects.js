import { Container, Row, Col, Nav, Tab, TabContent} from "react-bootstrap"
import {useState} from 'react';
import {ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import {projects1, projects2, projects3,  techstack1, techstack3} from "./projectData"
import Card from 'react-bootstrap/Card';
import Typography from "@mui/material/Typography";
import github from '../assets/img/github.svg'

import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
      return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Check out some of projects I built</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Project 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Project 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Project 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            <a target="_blank" rel="noopener noreferrer" href="https://niteout1.gitlab.io/nite-out"><h2>Nite Out</h2></a>
                            <div className="ptext">
                              <img src={github} alt=""/>
                              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mhom35/Nite-out"><span>Github</span></a>
                              
                            </div>

                            <p className="description">Plan your night out based on other users bar crawl recommendations</p>
                            <div class="projcontainer">
                              <div class="offset"></div>
                              <div class="project-wrapper">
                                {techstack1.map((location) => (
                                  <div class="projitem" >
                                    <img key={location.title} src={location.imgUrl} alt="" />
                                    <p>{location.title}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {
                              projects1.map((project, index, link) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            
                              {
                                projects2.map((project, index, link) => {
                                  return (
                                    <ProjectCard
                                      key={index}
                                      {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                          <h2>Car Car</h2>
                            <div className="ptext">
                              <img src={github} alt=""/>
                              <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/Mhom35/project-beta"><span>Github</span></a>
                              
                            </div>

                            <p className="description">Plan your night out based on other users bar crawl recommendations</p>
                            <div class="projcontainer">
                              <div class="offset"></div>
                              <div class="project-wrapper">
                                {techstack3.map((location) => (
                                  <div class="projitem" >
                                    <img key={location.title} src={location.imgUrl} alt="" />
                                    <p>{location.title}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                                {
                                  projects3.map((project, index, link) => {
                                    return (
                                      <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                  })
                                }
                              </Row>                
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
    }
