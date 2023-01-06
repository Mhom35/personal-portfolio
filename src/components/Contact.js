import React, {useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';


export const Contact = () => {
    const formInitialDetails = {
        name: '',
        number: '',
        email: '',
        company: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        //update only the input that got changed
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = await response.json();
    //     //clear form
    //     setFormDetails(formInitialDetails);
    //     if (result.code == 200) {
    //       setStatus({ succes: true, message: 'Message sent successfully'});
    //     } else {
    //       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //     }
    //   };

    const form = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let result = await emailjs.sendForm('service_9yocr0t', 'template_kayp59r', form.current , 'Cx7dKk2-P7flx-w3n')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        setButtonText("Send");
        //clear form
        setFormDetails(formInitialDetails);
        if (result.status == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
          setFormDetails(formInitialDetails);
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="name" placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="number" value={formDetails.number} placeholder="Phone Number" onChange={(e) => onFormUpdate('number', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="company" value={formDetails.company} placeholder="Company Name" onChange={(e) => onFormUpdate('company', e.target.value)}/>
                                </Col>
                                <Col >
                                    <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Alert variant={status === false ? "danger" : "success"} className="p-6 m-3 text-center">
                                        {status.message}
                                    </Alert>
                                    }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}


// <Col>
// <pop className={status === false ? "danger" : "success"}>{status.message}</p>
// </Col>