import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/ViewInterview.css';

export default function ViewProject(props) {
  const [project, setProject] = useState({});
  const projectId = props.location.state.projectId;

  useEffect(() => {
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
      <div className='vinter-container'>
        <div className='vinter-card'>
          <div className='inter-img'>
            <img src={project.ProjectImage} alt="png" />
          </div>
          <div className='info'>
            <h3>{project.ProjectName}</h3>
            <div className='title'>
              {/* <h4>{project.ProjectDetail}</h4> */}
              <h6>
                <a href={project.ProjectLink} target="_blank" rel="noopener noreferrer">
                  Link <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </h6>
            </div>
          </div>
          {/* <div className='result'>
            <h4>{project.ProjectStudentEmail}</h4>
          </div> */}
        </div>
      </div>
      <div className='inter-card-1'>
        {project.ProjectDetail}
      </div>
    </>
  );
}
