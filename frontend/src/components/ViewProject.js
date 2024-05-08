import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../styles/ViewProject.css';

export default function ViewProject(props) {
  const [project, setProject] = useState({});
  const projectId = props.location.state.projectId;

  useEffect(() => {
    console.log("projectId", projectId)
    fetch(`http://localhost:8000/viewproject/${projectId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        setProject(json);
      });
  }, [projectId]);

  return (
    <>
      <div className='project-container'>
        <div className='project-card'>
          <div className='project-img'>
            <img src={project.ProjectImage} alt="png" />
          </div>
          <div className='info'>
            <h3>{project.ProjectName}</h3>
            <div className='title'>
              <h4>{project.ProjectDetail}</h4>
              <h6>{project.ProjectLink}</h6>
            </div>
          </div>
          <div className='result'>
            <h4>{project.ProjectStudentEmail}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
