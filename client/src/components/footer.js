import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


//import social media icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

//create footer component
function Footer() {
    return (
        /*
        <Container fluid className="footer__container" style={{ marginTop: "100px" }}>
            <Row>
                <Col>
                    <div className="footer__social-media" style={{ position : "sticky", top : "5px" }}>
                        <a href="https://www.facebook.com/"><FaFacebookF /></a>
                        <a href="https://twitter.com/"><FaTwitter /></a>
                        <a href="https://www.instagram.com/"><FaInstagram /></a>
                    </div>
                </Col>
                <Col>
                    <div className="footer__text">
                        <p>© 2022 - All rights reserved</p>
                    </div>
                </Col>
            </Row>
        </Container>
        */
       // footer should be at the bottom of the page
         <footer className="footer justify-content-center" style={{ position : "fixed", bottom : "-3px" }}>
            <div className="footer__social-media">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="https://twitter.com/"><FaTwitter /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
            </div>
            <div className="footer__text text-center">
                <p>© 2022</p>
            </div>
        </footer>
    );
}

export default Footer;
