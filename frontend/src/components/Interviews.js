import React, { useEffect, useState} from 'react'
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../styles/Interviews.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Routes } from "./routes";


export default function Interviews() {

  let [Interviews, setInterviews] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8000/interviews`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
        setInterviews(json)
    })
  }, [])

  
  const handleCardClick = (InterviewId) => {
    
  };

  const myInterviews = Interviews.map((element) => {
    if (element.InterviewStudentId === localStorage.getItem('email')) {
      return (
        <>
        <Link className='inter-card-link' to={{pathname: '/viewinterview', state: {InterviewId: element.InterviewId}}} >

            <div className='inter-card' key={element.InterviewId} onClick={() => handleCardClick(element.InterviewId)}>
            <div className='inter-img'>
              <img src={element.CompanyImage} alt="png"/>
            </div>
            

            <div className='info'>

              <h3>{element.CompanyName}</h3>
              <div className='title'>
                  <h4>{element.Role} | {element.Location} | {element.Salary}</h4>
                  <h6>{element.Round} Rounds | {element.Date} | {element.InterviewStudentId}</h6>
              </div>
            </div>

            <div className='result'>
              {element.Verdict === 'selected' && 
                <div className='select'>
                  <div className='text'>
                    <h4><i class="fa-solid fa-circle-check"></i>  selected</h4>
                  </div>
              </div>}

              {element.Verdict === 'rejected' && 
                <div className='reject'>
                  <div className='text'>
                    <h4><i class="fa-solid fa-circle-xmark"></i> rejected</h4>
                  </div>
              </div>}
            </div>
          </div>
        </Link>
          </>
      );
    }
  });

  const allInterviews = Interviews.map((element) => {
    if (element.InterviewStudentId !== localStorage.getItem('email')) {
      return (
        <>

      <Link className='inter-card-link' to={{pathname: '/viewinterview', state: {InterviewId: element.InterviewId}}} >
          <div className='inter-card'>
            <div className='inter-img'>
              <img src={element.CompanyImage} alt="png"/>
            </div>

            <div className='info'>

              <h3>{element.CompanyName}</h3>
              <div className='title'>
                  <h4>{element.Role} | {element.Location} | {element.Salary}</h4>
                  <h6>{element.Round} Rounds | {element.Date} | {element.InterviewStudentId}</h6>
              </div>
            </div>

            <div className='result'>

              {element.Verdict === 'selected' && 
                <div className='select'>
                  <div className='text'>
                    <h4><i class="fa-solid fa-circle-check"></i>  selected</h4>
                  </div>
              </div>}

              {element.Verdict === 'rejected' && 
                <div className='reject'>
                  <div className='text'>
                    <h4><i class="fa-solid fa-circle-xmark"></i> rejected</h4>
                  </div>
              </div>}
              
            </div>
        </div>

        </Link>
          </>
      );
    }
  });


  return (
    <>
      <div className='Interviews'>
        <div className='addinter'>
          <h2>My Interview Experiences</h2>
          <Button id="addinterbtn" as={Link} to={Routes.AddInterview.path} variant="primary">
                  <FontAwesomeIcon icon={faPlus} /> add Interview
          </Button>
        </div>
        <div className='linebr'></div>

        <div className='inter-container'>
          {myInterviews}
        </div>
      </div>

      <div className='Interviews'>
        <div className='addinter'>
          <h2>All Interview Experiences</h2>
        </div>
        <div className='linebr'></div>

        <div className='inter-container'>
          {allInterviews}
        </div>
      </div>
    </>
  
  )
}
