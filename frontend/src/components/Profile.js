import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';

import '../styles/Profile.css'
import leetcode from '../assets/img/leetcode.png'
import codechef from '../assets/img/codechef.png'
import gfg from '../assets/img/gfg.png'
import hackerrank from '../assets/img/hackerrank.png'
import codeforce from '../assets/img/codeforce.png'

import { Routes  } from './routes';
import { Link } from 'react-router-dom';


import { faCalendarCheck, faComment } from '@fortawesome/free-solid-svg-icons';

import Profile1 from "../assets/img/team/profile-picture-1.jpg"
import Profile2 from "../assets/img/team/profile-picture-2.jpg"
import Profile3 from "../assets/img/team/profile-picture-3.jpg"
import Profile4 from "../assets/img/team/profile-picture-4.jpg"


export default function Profile() {
  return (
    <div>

        <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary ms-3">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Leetcode</h6>
                    <a class="codingimg text-secondary" href='https://leetcode.com/'><img src={leetcode} alt='img' /></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Codechef</h6>
                    <a class="codingimg text-secondary" href='https://leetcode.com/'><img src={codechef} alt='img' /></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Geeksforgeeks</h6>
                    <a class="codingimg text-secondary" href='https://leetcode.com/'><img src={gfg} alt='img' /></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Codeforce</h6>
                    <a class="codingimg text-secondary" href='https://leetcode.com/'><img src={codeforce} alt='img' /></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Hackerrank</h6>
                    <a class="codingimg text-secondary" href='https://leetcode.com/'><img src={hackerrank} alt='img' /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              {/* <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info float-end" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"><i class="fa-regular fa-pen-to-square"></i> Edit</a>
                    </div>
                  </div>
                </div>
              </div> */}

              <Card border="light" className="shadow-sm">
                <Card.Header className="border-bottom border-light d-flex justify-content-between">
                  <h3 className="mb-0">Projects</h3>
                  <Button as={Link} to={Routes.Projects.path} variant="secondary" size="sm">See all</Button>
                    </Card.Header>
                      <Card.Body>
                      <ListGroup className="list-group-flush list my--3">
                    

                        <ListGroup.Item className="px-0 border-bottom-dark">
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <a href="#top" className="user-avatar">
                              <Image src={leetcode} alt="image"className="rounded-circle" />
                            </a>
                          </Col>
                          <Col className="ms--2">
                            <h4 className="h6 mb-0">
                              <a href="#!"><h5>Hotel management</h5></a>
                            </h4>
                          </Col>
                          <Col className="col-auto">
                            <Button variant="tertiary" size="sm">
                              View
                            </Button>
                          </Col>
                          </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="px-0">
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <a href="#top" className="user-avatar">
                              <Image src={leetcode} alt="image"className="rounded-circle" />
                            </a>
                          </Col>
                          <Col className="ms--2">
                            <h4 className="h6 mb-0">
                              <a href="#!"><h5>Hotel management</h5></a>
                            </h4>
                          </Col>
                          <Col className="col-auto">
                            <Button variant="tertiary" size="sm">
                              View
                            </Button>
                          </Col>
                          </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="px-0">
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <a href="#top" className="user-avatar">
                              <Image src={leetcode} alt="image"className="rounded-circle" />
                            </a>
                          </Col>
                          <Col className="ms--2">
                            <h4 className="h6 mb-0">
                              <a href="#!"><h5>Hotel management</h5></a>
                            </h4>
                          </Col>
                          <Col className="col-auto">
                            <Button variant="tertiary" size="sm">
                              View
                            </Button>
                          </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                  </Card.Body>
              </Card>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style={ {height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={ {width: "80%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style={ {height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={ {width: "72%"}}  aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style={ {height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={ {width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style={ {height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={ {width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style={ {height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={ {width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>



            </div>
          </div>

        </div>
    </div>
    </div>
  )
}


