import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from './img/stellar-college-indiana-campus-logo.png';
import npc from './img/Net-Price-Calculator.png';
import SchoolIcon from '@mui/icons-material/School'; 
function Header() {
    return (
        <>
             <Container fluid className='top-header'>
                <Row className='info'>
                    <Col lg={3} className='info-col' >
                        <PhoneIcon className='icon' />
                        <p>Phone: (219) 900-5700</p>
                        <MailOutlineIcon className='icon' />
                        <p>Email: Stellerindiana@gmail.com</p>
                    </Col>
                    <Col lg={3} className='info-col'>
                        <svg style={{ fontSize: 25, color: 'white' ,marginTop: "10px"}} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M4.32184 1L22.7366 1C23.6922 1 24.4668 1.77459 24.4668 2.73012V8.10868C24.4668 9.06421 23.6922 9.8388 22.7366 9.8388H11.9146" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.54193 9.83935H2.73018C1.77465 9.83935 1.00006 9.06475 1.00006 8.10923V2.73067C1.00006 1.77514 1.77465 1.00055 2.73018 1.00055H4.63575" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.83038 7.47648L5.36941 3.42079C5.40086 3.34364 5.5097 3.3435 5.54133 3.42061L7.06634 7.47648" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.31049 6.46609H6.59422" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.6165 3.36249V7.47266C16.6618 7.48045 18.0517 7.47266 18.0517 7.47266" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.0287 3.36249L20.3379 5.37487L21.6363 3.37292" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.3328 7.47623L20.3379 5.37494" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.70276 3.36249V7.47616" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.70276 3.36249H9.84399C10.4828 3.36249 11.0233 3.88225 11.0233 4.52336C11.0233 5.16447 10.4828 5.68423 9.84399 5.68423L8.71069 5.68938" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6597 3.36249V7.47616" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6597 3.36249H13.801C14.4398 3.36249 14.9802 3.88225 14.9802 4.52336C14.9802 5.16447 14.4398 5.68423 13.801 5.68423L12.6677 5.68938" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.377 20.7307C16.7485 20.0994 16.9618 19.3638 16.9618 18.5783V14.8544C16.9633 14.3704 16.5721 13.9791 16.0881 13.9806C15.6088 13.9821 15.2188 14.3684 15.2102 14.8461V14.3753C15.2117 13.8912 14.8204 13.5 14.3364 13.5015C13.8526 13.503 13.4592 13.8963 13.4577 14.3801V13.9086C13.4592 13.4245 13.068 13.0333 12.5839 13.0348C12.1001 13.0363 11.7068 13.4296 11.7053 13.9134V9.19237C11.7068 8.7083 11.3155 8.31707 10.8315 8.31858C10.3477 8.32009 9.95433 8.7134 9.95282 9.19723L9.95216 16.2995C9.95216 16.5636 9.74204 16.7797 9.4781 16.7872L9.46677 16.7876C9.2729 16.7931 9.09418 16.6831 9.01169 16.5076L7.91036 14.163C7.72584 13.7702 7.28573 13.5668 6.86701 13.6809C6.33082 13.8271 6.05682 14.4222 6.29446 14.9246L8.84478 20.3707C9.54732 21.8709 11.0543 22.8292 12.7108 22.8292C13.7659 22.8292 14.731 22.4447 15.4742 21.8083" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.4577 13.9086L13.4577 14.8872" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7053 14.846V13.9134" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.2101 14.8461V14.9283" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <SchoolIcon style={{ fontSize: 25, color: 'white' ,marginTop: "10px"}} />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='logo'>
                <Row >
                    <img src={logo} alt='no image found' />
                </Row>
            </Container>
            <Container fluid>
                <Row >
                    <ul className='navbar'>
                        <li>Home</li>
                        <li>Training Program</li>
                        <li>About Us</li>
                        <li>Career Service</li>
                        <li>Financial Assistance</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>
                </Row>
                <Row className='mt-5 hero'>
                    <Col lg={6} className='mt-5 hero-text'>
                        <h1>Net Price Calculator</h1>
                        <p>In 2011, the Higher Education Opportunity Act of 2008 made the ‘inclusion of net price calculator’ mandatory to assist parents and students alike in reckoning the total out-of-pocket cost for degree programs. Stellar Career College strives to make education affordable, and the net calculator will provide prospective students with an overview of how much money they will need to attend our college.</p>
                    </Col>
                    <Col lg={6} hero-img>
                        <img src={npc} alt='no image found' />
                    </Col>
                </Row>
            </Container>
        </>      
    );
}

export default Header;
