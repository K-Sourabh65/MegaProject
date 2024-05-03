import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faLinkedin, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';
import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket, faUser, faLinkedIn } from "@fortawesome/free-solid-svg-icons";
import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";
import '../styles/DSASheets.css'
import striverimg from '../assets/img/striver.jpeg';
import lovebabbarimg from '../assets/img/lovebabbar.jpg';
import shraddhaimg from '../assets/img/shraddhaimg.jpg';
import nishantimg from '../assets/img/nishantimg.png'
import arshimg from '../assets/img/arshimg.jpeg'
import frazimg from '../assets/img/frazimg.jpeg'


export default function DSASheets() {
    return (
        <>
        <div className="container">

        <div className="row">
            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={striverimg} className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4>Raj Vikramaditya (Striver)</h4>
                            <p className="text-muted">Senior SDE @Google <span>| </span><span><a href="https://takeuforward.org/" className="text-pink">takeuforward.org</a></span></p>

                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.youtube.com/@takeUforward" data-original-title="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.linkedin.com/in/rajstriver/" data-original-title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.instagram.com/striver_79/" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >Explore Now <FontAwesomeIcon icon={faRocket} className="me-1" /></button></a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={lovebabbarimg}className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4>Love Babbar</h4>
                            <p className="text-muted">Ex SDE @Microsoft <span>| </span><span><a href="https://www.codehelp.in/" className="text-pink">codehelp.in</a></span></p>

                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.youtube.com/@LoveBabbar" data-original-title="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.linkedin.com/in/love-babbar-38ab2887/" data-original-title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.instagram.com/lovebabbar1/" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <a href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/"><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >Explore Now <FontAwesomeIcon icon={faRocket} className="me-1" /></button></a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={shraddhaimg} className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4>Shradha Khapra</h4>
                            <p className="text-muted">Ex SDE @Microsoft <span>| </span><span><a href="https://www.apnacollege.in/" className="text-pink">apnacollege.in</a></span></p>

                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.youtube.com/@shradhaKD" data-original-title="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.linkedin.com/in/shradha-khapra/" data-original-title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.instagram.com/shradhakhapra/" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <a href="https://docs.google.com/spreadsheets/d1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/edit#gid=0"><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >Explore Now <FontAwesomeIcon icon={faRocket} className="me-1" /></button></a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={nishantimg} className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4>Nishant Chahar</h4>
                            <p className="text-muted">Ex SDE @Microsoft <span>| </span><span><a href="https://www.algoprep.in/" className="text-pink">algoprep.in</a></span></p>

                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.youtube.com/@NishantChahar11" data-original-title="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.linkedin.com/in/chaharnishant11/" data-original-title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.instagram.com/chahar__nishant/" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <a href="https://docs.google.com/spreadsheets/d1kyHfGGaLTzWspcqMUUS5Httmip7t8LJB0P-uPrRLGos/edit#gid=0"><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >Explore Now <FontAwesomeIcon icon={faRocket} className="me-1" /></button></a>
                    </div>
                </div>
            </div>
        
            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={arshimg} className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4>Arsh Goyal</h4>
                            <p className="text-muted">Senior SDE @Samsung <span>| </span><span><a href="https://www.linkedin.com/in/arshgoyal/" className="text-pink">arshgoyal.com</a></span></p>

                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.youtube.com/@ArshGoyal" data-original-title="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.linkedin.com/in/arshgoyal/" data-original-title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.instagram.com/arshgoyalyt/" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <a href="https://docs.google.com/spreadsheets/d1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/edit#gid=0"><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >Explore Now <FontAwesomeIcon icon={faRocket} className="me-1" /></button></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src={frazimg} className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div className="">
                            <h4>Mohammad Fraz</h4>
                            <p className="text-muted">Ex SWE @Google <span>| </span><span><a href="https://learnyard.com/" className="text-pink">learnyard.com</a></span></p>

                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.youtube.com/@mohammadfraz" data-original-title="Youtube"><i class="fa-brands fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.linkedin.com/in/frazmohammad/" data-original-title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="https://www.instagram.com/frazmohammad/" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>

                        </div>
                        <a href="https://learnyard.com/practice/dsa"><button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >Explore Now <FontAwesomeIcon icon={faRocket} className="me-1" /></button></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}