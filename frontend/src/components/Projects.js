import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from '@themesberg/react-bootstrap';
import { Routes } from "./routes";
import '../styles/Project.scss';

const Card = ({ image, title, text, projectLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (    
    <a href={projectLink} className={`card ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="card__image">
        <img src={image} alt={title} />
        <div className="overlay"></div>
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__content">
        <p>{text}</p>
        <div className="project-link-icon">
          <a href={projectLink} target='#'>
            <span>View Project</span>
          </a>
        </div>
      </div>
    </a>
  );
};


export default function Project() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8000/projects`, {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setProjects(json);
    });
  }, []);

  // function deleteProject(e) {
  //   console.log(e.target.alt);
  //   const URL = `http://localhost:8000/deleteproject/${e.target.alt}`;
  //   fetch(URL, {
  //     method: 'DELETE',
  //   })
  //   .then(window.location.href = '/projects');
  // }

  const MyProjects = projects.map((element, index) => {
    if (element.ProjectStudentEmail === localStorage.getItem('email')) {
      return (
        <div className="cell medium-4" key={index}>
          <Card
            image={element.ProjectImage}
            title={element.ProjectName}
            text={element.ProjectDetail}
            projectLink={element.ProjectLink}
          />
        </div>
      );
    }
    return null;
  });

  const AllProjects = projects.map((project, index) => {
    if (project.ProjectStudentEmail !== localStorage.getItem('email')) {
      return (
        <div className="cell medium-4" key={index}>
          <Card
            image={project.ProjectImage}
            title={project.ProjectName}
            text={project.ProjectDetail}
            projectLink={project.ProjectLink}
          />
        </div>
      );
    }
    return null;
  });

  return(
    <>
      <div>
        <Button as={Link} to={Routes.AddProject.path} variant="primary" size="sm" className="me-2 float-end">
          <FontAwesomeIcon icon={faPlus} className="me-2"/> add Project
        </Button>
      </div>
      <div className="container profile-page">
        <h3>My Project</h3>
        <div className="grid-container">
          <div className="grid-x grid-padding-x grid-margin-y">
            {MyProjects}
          </div>
        </div>
        <h3>All Project</h3>
        <div className="grid-container">
          <div className="grid-x grid-padding-x grid-margin-y">
            {AllProjects}
          </div>
        </div>
      </div>
    </>
  );
}
