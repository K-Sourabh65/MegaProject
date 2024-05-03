import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Routes } from "./routes";


export default function Project() {
  let [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8000/projects`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
        setProjects(json)
    })
  }, [])

  function deleteProject(e){
    console.log(e.target.alt);
    const URL = `http://localhost:8000/deleteproject/${e.target.alt}`
    fetch(URL, {
      method: 'DELETE',
    })
    .then(window.location.href = '/projects')
    
  }

  const myProjects = projects.map((element) => {
    if (element.ProjectStudentEmail === localStorage.getItem('email')) {
      return (
        <div class="row">
        <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header">
                <div class="body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src={element.ProjectImage} alt=""/> </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-12">
                            <h4 class="m-t-0 m-b-0 fs-2"><strong>{element.ProjectName}</strong></h4>
                            <span class="job_post">{element.ProjectStudentEmail}</span>
                            <p>7{element.ProjectDetail}</p>
                            {/* <div>

                                <button class="btn btn-round link-primary ">Visit <i class="fa-solid fa-link"></i></button>
                                <button class="btn float-end" alt={element.ProjectLink} onClick={deleteProject}><i class="fa-solid fa-trash"></i></button>
                                <button class="btn float-end"><i class="fa-regular fa-pen-to-square"></i></button>
                                
                            </div> */}

                              <div className='Action'>

                              <button class="btn btn-round link-primary border-primary">Visit <i class="fa-solid fa-link"></i></button> 
                                  {/* <Link onClick={() => {
                                    const data = {name: element.ProjectName, detail: element.ProjectDetail, link: element.ProjectLink, image: element.ProjectImage}
                                    history.push({ pathname: "/updateproject", state: data });
                                  }} class="float-end" state={{value: element}}><img src='https://cdn-icons-png.flaticon.com/512/2951/2951136.png' alt='' width="25" style={{marginRight: "10px"}}  onMouseOut = {(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/512/2951/2951136.png'}/></Link>  */}

                                  <Link><img class="float-end" src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt={element.ProjectName} width="20"  onMouseOut = {(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'} onClick={deleteProject}/></Link>
                                </div>
                        </div>                
                    </div>
                </div>                    
            </div>
        </div>
	</div>
      );
    }
  });

  const allProjects = projects.map((element) => {
    if (element.ProjectStudentEmail !== localStorage.getItem('email')) {
      return (
        <div class="row">
        <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header">
                <div class="body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src={element.ProjectImage} alt=""/> </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-12">
                            <h4 class="m-t-0 m-b-0 fs-2"><strong>{element.ProjectName}</strong></h4>
                            <span class="job_post">{element.ProjectStudentEmail}</span>
                            <p>7{element.ProjectDetail}</p>
                            {/* <div>

                                <button class="btn btn-round link-primary ">Visit <i class="fa-solid fa-link"></i></button>
                                <button class="btn float-end" alt={element.ProjectLink} onClick={deleteProject}><i class="fa-solid fa-trash"></i></button>
                                <button class="btn float-end"><i class="fa-regular fa-pen-to-square"></i></button>
                                
                            </div> */}

                              <div className='Action'>

                              <button class="btn btn-round link-primary border-primary">Visit <i class="fa-solid fa-link"></i></button>
                              </div>
                        </div>                
                    </div>
                </div>                    
            </div>
        </div>
	</div>
      );
    }
  });

    return(
      <>
      <div>
        <Button as={Link} to={Routes.AddProject.path} variant="primary" size="sm" className="me-2 float-end">
              <FontAwesomeIcon icon={faPlus} className="me-2"/> add Project
        </Button>
      </div>
      <div class="container profile-page">
      <h3>My Project</h3>
        {myProjects}
      <h3>All Project</h3>
        {allProjects}
      
      </div>
      </>
    );
}
