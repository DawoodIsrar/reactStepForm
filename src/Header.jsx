import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './img/stellar-college-indiana-campus-logo.png'
import npc from './img/Net-Price-Calculator.png'
function Header() {
    return (
        <>
        
            <Container fluid className='top-header'>
                <Row className='info'>
                    <Col lg={3} className='info-col' >
                        <FontAwesomeIcon icon={['fas', 'phone']} style={{ color: "#cc1919" }} />
                        <p>Phone: (219) 900-5700</p>
                        <FontAwesomeIcon icon={['far', 'envelope']} style={{ color: "#cc1919" }} />
                        <p>Email: Stellerindiana@gmail.com</p>
                    </Col>
                    <Col lg={3} className='info-col'>
                        <p>Apply</p>
                        <p>Portal</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='logo'>
                <Row >
                    <img src={logo} alt='no image found'></img>
                </Row>
            </Container>
            <Container fluid>
                <Row >
                    <ul className='navbar'>
                        <li>Home</li>
                        <li>Training Program</li>
                        <li>About Us</li>
                        <li>Career Service</li>
                        <li>Financial Assistence</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>

                    </ul>
                </Row>
                <Row className='mt-5 hero'>
                    <Col lg={6} className='mt-5 hero-text'>
                        <h1>Net Price Calculator</h1>
                        <p>In 2011, the Higher Education Opportunity Act of 2008 made the ‘inclusion of net price calculator’ mandatory to assist parents and students alike in reckoning the total out-of-pocket cost for degree programs. Stellar Career College strives to make education affordable, and the net calculator will provide prospective students with an overview of how much money they will need to attend our college.</p>
                    </Col>
                    <Col  lg={6} hero-img>
                        <img src={npc} alt='no image found'/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;
