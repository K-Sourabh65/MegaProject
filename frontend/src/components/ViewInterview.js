import { useLocation } from "react-router-dom";
import '../styles/ViewInterview.css'

import React, {useState, useEffect}from 'react'

export default function ViewInterview(props) {

  const [interview, setInterview] = useState([]);

  const InterviewId = props.location.state.InterviewId;
  console.log(InterviewId);

  useEffect(() => {
    fetch(`http://localhost:8000/viewinterview/${InterviewId}`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
        setInterview(json)
    })
  }, [])

  return(
    <>

      <div className='vinter-container'>

        <div className='vinter-card'>
            <div className='inter-img'>
              <img src={interview.CompanyImage} alt="png"/>
            </div>
            

            <div className='info'>

              <h3>{interview.CompanyName}</h3>
              <div className='title'>
                  <h4>{interview.Role} | {interview.Location} | {interview.Salary}</h4>
                  <h6>{interview.Round} Rounds | {interview.Date} | {interview.InterviewStudentId}</h6>
              </div>
            </div>

            <div className='result'>
              {interview.Verdict === 'selected' && 
                <div className='select'>
                  <div className='text'>
                    <h4><i class="fa-solid fa-circle-check"></i>  selected</h4>
                  </div>
              </div>}

              {interview.Verdict === 'rejected' && 
                <div className='reject'>
                  <div className='text'>
                    <h4><i class="fa-solid fa-circle-xmark"></i> rejected</h4>
                  </div>
              </div>}
            </div>
          </div>

        </div>

        <div className='inter-card-1'>
          {interview.InterviewDetail}
        </div>
    </>
  );
}
