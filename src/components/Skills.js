import { Container, Row, Col} from "react-bootstrap"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import reactLogo from "../assets/img/react-logo.png"
import jsLogo from "../assets/img/jsLogo.png"
import djangoLogo from "../assets/img/djangoLogo.png"
import psql from "../assets/img/psql.png"
import mongo from "../assets/img/mongo.png"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import fastapi from "../assets/img/fastapi.svg"
import python from "../assets/img/python.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I recently attended a coding bootcamp where I learned a wide range of programming skills, 
                                including front-end web development technologies such as HTML, CSS, React and JavaScript, 
                                as well as back-end technologies like Python, Django, and Fastapi. I am able to incorporate both sql and non sql databases
                                using postgreSQL and mongoDB into both current and future projects.
                                <br></br>
                            <p>I also gained experience with version control using Git and working in a team environment using agile development methodologies. In the future, I hope to continue building upon these skills and expand my knowledge in areas such as machine learning, web development, and data analysis. I am also interested in learning more about cloud computing and how to develop and deploy applications on platforms like AWS</p></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={reactLogo} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={jsLogo} alt="Javascript" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={djangoLogo} alt="django" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={fastapi} alt="FastApi" />
                                    <h5>Fast Api</h5>
                                </div> 
                                <div className="item">
                                    <img src={psql} alt="PostressSQL" />
                                    <h5>Postgress SQL</h5>
                                </div> 
                                <div className="item">
                                    <img src={mongo} alt="Mongo" />
                                    <h5>MongoDB</h5>
                                </div>  
                                <div className="item">
                                    <img src={html} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>  
                                <div className="item">
                                    <img src={css} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>  
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
}





//    // "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",