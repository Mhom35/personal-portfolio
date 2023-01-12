import { Container, Row, Col} from "react-bootstrap"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import reactLogo from "../assets/img/react-logo.png"
import jsLogo from "../assets/img/jsLogo.png"
import djangoLogo from "../assets/img/djangoLogo.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const About = () => {
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
        <section className="about" id="about">
            <Container>
              <div className="about-bx">
                <Row className="align-items-center">
                    <Col xs={9} md={5} xl={7} responsive={responsive}>
                            <div className="item1">
                                <h2>About Me</h2>
                                <p>I am a recent UC Berkeley graduate with a B.A. in Economics
                                now transitioning into a career in Software Engineering having completed Hack Reactor’s full-time and full-stack SWE bootcamp. My undergraduate education places a strong emphasis on analytical and problem-solving skills, which I look forward to combining with my coding bootcamp education to pursue my passion for software development.</p>
                            </div>
                    </Col>
                    <Col xs={9} md={5} xl={2} responsive={responsive}>
                        <div class="lol">
                            <section class="cube" id="cube">
                                <div className="slider">
                                    <div className="cube-container">
                                    <div class="slide x"></div>
                                    <div class="slide y"></div>
                                    <div class="slide z"></div>
                                    <div className="shadow"></div>
                                </div>
                                </div>
                            </section>
                        </div>                        
                    </Col>
                </Row>
              </div>
            </Container>

        </section> 
      )
}





        // // <section className="about" id="about">
        // //     <Container>
        // //         <Row>
        // //             <Col>
        // //                 <div className='about-bx'>
        // //                     <div class="item1">
        // //                         <h2>
        // //                             About me 
        // //                         </h2>
        // //                         <p> I am recent UC Berkeley grad that majored in economics. I'm looking to make an impact on the world through software</p>
        // //                     </div>
        //                     <div class="lol">
        //                         <section class="cube" id="cube">
        //                             <div className="slider">
        //                                 <div className="cube-container">
        //                                 <div class="slide x"></div>
        //                                 <div class="slide y"></div>
        //                                 <div class="slide z"></div>
        //                                 <div className="shadow"></div>
        //                             </div>
        //                             </div>
        //                         </section>
        //                     </div>
        // //                 </div>
        // //             </Col>
        // //         </Row>

        // //     </Container>

        // // </section>