// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";
// import { Routes } from './routes';
// import Login from './Login';
// import Register from './Register';
// import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function Website (e)  {

//     return (
//         <>
            
//     <BrowserRouter>
            
            // <Button as={Link} to={Routes.Login.path} variant="secondary" className="upgrade-to-pro mb-3"><FontAwesomeIcon className="me-1" /> Login</Button>

            // <Button  as={Link} to={Routes.Register.path} variant="secondary" className="upgrade-to-pro mb-6"><FontAwesomeIcon className="me-1" /> Register</Button>

            //     <Switch>
            //     <Route exact path={Routes.Login.path} component={Login} />

            //     <Route exact path={Routes.Register.path} component={Register} />
                            
            //     </Switch>
            
//             </BrowserRouter>
//         </>
//     );

// };


import React from "react";
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faCode } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Login from './Login';
import Register from './Register';
import KITlogo from '../assets/img/kitlogo.png'

import { Routes } from "./routes";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";

export default function Website () {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
    };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <BrowserRouter>
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
          <i class="fa fa-code" aria-hidden="true"></i>
            <span className="ms-2 brand-text d-none d-md-inline">KCC</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center text-light">
                <Nav.Link as={HashLink} to="#dashboard">Dashboard</Nav.Link>
                <Nav.Link as={HashLink} to="#problems">Problems</Nav.Link>
                <Nav.Link as={HashLink} to="#dsa" >DSA Sheets</Nav.Link>
                <Nav.Link as={HashLink} to="#contests">Contests</Nav.Link>
                <Nav.Link as={HashLink} to="#projects">Projects</Nav.Link>
                <Nav.Link as={HashLink} to="#interviews">Interviews</Nav.Link>
                <Nav.Link as={HashLink} to="#jobs">Jobs</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Button as={Link} to={Routes.Login.path} variant="outline-white" className="ms-3"><FontAwesomeIcon className="me-1" /> Login</Button>

            <Button  as={Link} to={Routes.Register.path} variant="outline-white" className="ms-3"><FontAwesomeIcon className="me-1" /> Register</Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white " id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center mt-2">
              <h1 className="fw-bolder text-secondary">KIT Coding Club</h1>
              <p className="text-muted fw-light mb-5 h5">Let's start today's learning, Happy Coding! 🚀</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.Login.path} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
                
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0 mt-6">
        <Container className="mt-n10 mt-lg-n12 z-2">
          
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder text-white">1000+</h3>
              <p className="text-white">Coding Problems</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder text-white">Contests</h3>
              <p className="text-white">Daily Posting</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder text-white">DSA Sheets</h3>
              <p className="text-white">Best in market</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder text-white">Jobs / Internships</h3>
              <p className="text-white">100+</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3">
        <Container>
          <Row className="justify-content-between align-items-center pt-5 mb-5 mb-lg-7" id="dashboard">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>KIT Coding Club Dashboard</h2>
              <p className="mb-3 lead fw-bold">From coding resources, DSA Sheets and interview prep to career opportunities and a supportive community, we are your one-stop solution for navigating the world of technology and achieving your goals seamlessly.</p>
              <Button as={Link} to={Routes.Dashboard.path} variant="secondary" target="_blank">Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7" id="problems">
            <Col lg={5}>
              <h2>Problems</h2>
              <p className="mb-3 lead fw-bold">2000+ Data Structure Problems </p>
              <p className="mb-4">Empower your coding journey with a rich collection of Data Structures and Competitive Programming resources.</p>
              <p className="mb-4">Check out the problem section and try to code.</p>
              <Button as={Link} to={Routes.Login.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank"><FontAwesomeIcon icon={faCode} className="me-1" />Solve Problems</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7" id="dsa">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">DSA Sheets</h2>
              <p className="mb-3 lead fw-bold">Understanding data structures and algorithms enables you to understand the problem statements on a deeper level and create logical solutions to solve them.</p>
              <Button as={Link} to={Routes.Login.path} className="me-3" variant="secondary" ><FontAwesomeIcon icon={faBook} className="me-2" />DSA Sheets</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7" id="contests">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Contests</h2>
              <p className="mb-3 lead fw-bold">
                Daily Coding Contests
              </p>
              <p className="mb-4">
              Coding Contests enhances problem-solving skills and exposes you to diverse topics, improving coding proficiency and preparation for technical interviews.
              </p>
              <Button as={Link} to={Routes.Login.path} className="me-3" variant="secondary"><FontAwesomeIcon icon={faCalendarAlt} className="me-2" />View Contests</Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center" id="projects">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Projects</h2>
              <p className="mb-3 lead fw-bold">
              Explore a variety of coding projects—web development, mobile apps, machine learning, and more.
              </p>
              <Button as={Link} to={Routes.Login.path} className="me-3" variant="secondary" ><FontAwesomeIcon icon={faCalendarAlt} className="me-2" />Explore Projects</Button>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7" id="interviews">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Interviews</h2>
              <p className="mb-3 lead fw-bold">
              Read Interview Experiences...
              </p>
              <p className="mb-4">
              Reading interview experiences helps to provides tips, builds confidence, and helps avoid common mistakes, enhancing preparation and performance.
              </p>
              <Button as={Link} to={Routes.Login.path} className="me-3" variant="secondary" ><FontAwesomeIcon icon={faCalendarAlt} className="me-2" />Read</Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center" id="jobs">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Jobs</h2>
              <p className="mb-3 lead fw-bold">
              coding75 helps you expore recent opening and opportunities. Stay ahead in your coding career by exploring the vast array of opportunities presented by Coding75 and propel yourself into the forefront of the tech industry.
              </p>
              <Button as={Link} to={Routes.Login.path} className="me-3" variant="secondary" ><FontAwesomeIcon icon={faCalendarAlt} className="me-2" />Explore Oppotunities</Button>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="section section-lg bg-light text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5 text-dark">So, what are you waiting for?</h2>
              <p className="lead px-lg-8 text-dark">
Start learning today. Practice DSA, Develop projects, Explore opportunities, everything at one place 🎯.</p>
            </Col>
          </Row>
          <Row style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
          <Button variant="secondary" as={Link} to={Routes.Login.path} className="text-dark w-25">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
            </Button>
          </Row>
        </Container>
      </section>
      
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col className="mb-md-2">
              <Card.Link className="d-flex justify-content-center">
                <Image src={KITlogo} height={100} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © KIT Student<span className="current-year">2024</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>

      <Switch>
        <Route exact path={Routes.Login.path} component={Login} />
        <Route exact path={Routes.Register.path} component={Register} />
      </Switch>
    </BrowserRouter>
  );
};