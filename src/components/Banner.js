import { React, useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import mitchellHomResume2023 from '../assets/img/mitchellHomResume2023.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting ] = useState(false);
    const toRotate = ["Full Stack Engineer", "Web Developer", "Software Engineer"];
    const [text, setText ] = useState('');
    //deterimine how fast letters get typed on a screen
    const [delta, setDelta ] = useState(300 - Math.random() * 100)
    //transition between each word
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        //as the loopNum (the element we are selecting in Rotate) we rotate back to
        // to the first element
        let i = loopNum % toRotate.length;

        //keep track to rotate later
        let fullText = toRotate[i];

        //if its deleting then subtract the length, else we build our typing via substring so its closer to full text]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            //deleting quickly by halving it
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            //start deleting process and set Delta back to normal pace
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            // stop deleting; move onto next element
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisibile}) =>
                            <div className={isVisibile ? "animate__animated animate__fadeIn": ""}>
                                <span className="tagline">Welcome to my portfolio!</span>
                                <h1>{`Hi I am Mitchell, `}<span className="wrap">{text}</span></h1>
                                <a href={mitchellHomResume2023} download="mitchellHomResume2023.pdf" target="_blank"><button onClick={() => console.log('connect')}>Download My Resume<ArrowRightCircle size={25}></ArrowRightCircle></button></a>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

