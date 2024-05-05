import React, { useEffect, useState } from 'react';

import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';

import '../styles/Profile.css'
import leetcodeimg from '../assets/img/leetcode.png'
import codechefimg from '../assets/img/codechef.png'
import gfgimg from '../assets/img/gfg.png'
import hackerrankimg from '../assets/img/hackerrank.png'
import codeforceimg from '../assets/img/codeforce.png'

import { Routes  } from './routes';
import { Link } from 'react-router-dom';


export default function Profile() {

  let [student, setStudent] = useState([]);
  let [projects, setProjects] = useState([]);
  let [interviews, setInterviews] = useState([]);

  let [leetcode, setLeetcode] = useState("");
  let [codechef, setCodechef] = useState("");
  let [gfg, setGeeksforgeeks] = useState("");
  let [codeforce, setCodeforce] = useState("");
  let [hackerrank, setHackerrank] = useState("");

  let [DP, setDP] = useState("")

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/profile/${localStorage.getItem('email')}`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
        setStudent(json)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${localStorage.getItem('email')}`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
        setProjects(json)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/interviews/${localStorage.getItem('email')}`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
        setInterviews(json)
    })
  }, [])

  const handleSave = () => {

    if(leetcode === "") {
      leetcode = student.Leetcode
    }
    if(codechef === "") {
      codechef = student.Codechef
    }
    if(gfg === "") {
      gfg = student.Geeksforgeeks
    }
    if(codeforce === "") {
      codeforce = student.Codeforce
    }
    if(hackerrank === "") {
      hackerrank = student.Hackerrank
    }

    fetch(`http://localhost:8000/platform/${localStorage.getItem('email')}`, {
            method: 'PUT',  
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify({
                "Leetcode": `${leetcode}`,
                "Codechef": `${codechef}`,
                "Geeksforgeeks": `${gfg}`,
                "Codeforce": `${codeforce}`,
                "Hackerrank": `${hackerrank}`,
            })
        })
    setIsEditing(false); 
    window.location.reload();
  };

  const handleCancel = () => {
    setIsEditing(false); 
  }

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
        console.log(reader.result);
        setDP(reader.result);
    }
    reader.onerror = error =>{
        console.log("Error");
    } 
  }

  function Add(e){
    console.log(DP);
    e.preventDefault()
    fetch(`http://localhost:8000/adddp/${localStorage.getItem('email')}`, {
            method: 'PUT',  
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify({
                "DP": `${DP}`,
            })
        })
        .then(window.location.href = '/profile')
}


  const myProjects = projects.map((element) => {
      return (
        <>
          <ListGroup.Item className="project-item px-0 rounded-2" size="sm">
            <Row className="align-items-center">
              <Col className="col-auto">
                <a>
                  <Image style={{width:"80px", height: "60px", overflow: "hidden"}} src={element.ProjectImage} alt="image"/>
                </a>
              </Col>
              <Col className="ms--2">
                <h4 className="h6 mb-0">
                  <a href="#!"><h5>{element.ProjectName}</h5></a>
                </h4>
              </Col>
              <Col className="col-auto">
                <Button variant="tertiary" size="sm" as={Link} to={Routes.Projects.path}>
                  View
                </Button>
              </Col>
              </Row>
          </ListGroup.Item>
        </>
      );
  });

  const myInterviews = interviews.map((element) => {
    return (
      <>
        <ListGroup.Item className="project-item px-0 rounded-2" size="sm">
          <Row className="align-items-center">
            <Col className="col-auto">
              <a href="#">
                <Image style={{width:"100px", height: "50px", overflow:"hidden"}} src={element.CompanyImage} alt="image"/>
              </a>
            </Col>
            <Col className="ms--2">
              <h4 className="h6 mb-0">
                <a href="#!"><h5>{element.CompanyName}</h5><h6>{element.Role}</h6></a>
              </h4>
            </Col>
            <Col className="col-auto">
              <Button size="sm" as={Link} to={Routes.Interviews.path}>
                View
              </Button>
            </Col>
            </Row>
        </ListGroup.Item>
      </>
    );
});

function myPlatforms () {
  return (
    <>
        {isEditing ? (

          <>
          <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap ">
            <h6 class="mb-0">Leetcode</h6>
            <a class="codingimg text-secondary" href={student.Leetcode}><img src={leetcodeimg} alt='img' /></a>
            <input type="text" defaultValue={student.Leetcode} onChange={(e) => setLeetcode(e.target.value)}/>
          </li>
          <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 class="mb-0">Codechef</h6>
            <a class="codingimg text-secondary" href={student.Codechef}><img src={codechefimg} alt='img' /></a>
            <input type="text" defaultValue={student.Codechef} onChange={(e) => setCodechef(e.target.value)}/>
          </li>
          <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 class="mb-0">Geeksforgeeks</h6>
            <a class="codingimg text-secondary" href={student.Geeksforgeeks}><img src={gfgimg} alt='img' /></a>
            <input type="text" defaultValue={student.Geeksforgeeks} onChange={(e) => setGeeksforgeeks(e.target.value)}/>
          </li>
          <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 class="mb-0">Codeforce</h6>
            <a class="codingimg text-secondary" href={student.Codeforce}><img src={codeforceimg} alt='img' /></a>
            <input type="text" defaultValue={student.Codeforce} onChange={(e) => setCodeforce(e.target.value)}/>
          </li>
          <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 class="mb-0">Hackerrank</h6>
            <a class="codingimg text-secondary" href={student.Hackerrank}><img src={hackerrankimg} alt='img' /></a>
            <input type="text" defaultValue={student.Hackerrank} onChange={(e) => setHackerrank(e.target.value)}/>
          </li>

          <li>
            <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
              <button onClick={handleSave} class="btn btn-outline-primary mt-2 mb-3"> <i class="fa-regular fa-floppy-disk"></i> Save</button>

              <button onClick={handleCancel} class="btn btn-danger mt-2 mb-3 ms-4"> <i class="fa-regular fa-floppy-disk"></i> Cancle</button>
            </div>
          </li>
        </>

         
        ) : (
              <>
                  <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap ">
                    <h6 class="mb-0">Leetcode</h6>
                    <a class="codingimg text-secondary" href={student.Leetcode}><img src={leetcodeimg} alt='img' /></a>
                  </li>
                  <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Codechef</h6>
                    <a class="codingimg text-secondary" href={student.Codechef}><img src={codechefimg} alt='img' /></a>
                  </li>
                  <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Geeksforgeeks</h6>
                    <a class="codingimg text-secondary" href={student.Geeksforgeeks}><img src={gfgimg} alt='img' /></a>
                  </li>
                  <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Codeforce</h6>
                    <a class="codingimg text-secondary" href={student.Codeforce}><img src={codeforceimg} alt='img' /></a>
                  </li>
                  <li class="platform list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Hackerrank</h6>
                    <a class="codingimg text-secondary" href={student.Hackerrank}><img src={hackerrankimg} alt='img' /></a>
                  </li>

                  <li>
                    <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                      <button onClick={() => setIsEditing(true)} class="btn btn-outline-primary mt-2 mb-3"> <i class="fa-regular fa-pen-to-square"></i> Edit</button>
                    </div>
                  </li>
                </>
        )}
    </>
  );
}



  return (
    <div className='Profile'>
        <div class="container">
         <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card border border-dark rounded-4">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img style={{width:"150px", height: "150px", overflow:"hidden", border: "2px solid #000"}} src={student.DP} alt="" class="rounded-circle" />
                    <div class="mt-3">
                      <h3>{student.StudentName}</h3>
                      <p class="text-secondary mb-1">Student</p>
                      <p class="text-muted font-size-sm">{student.StudentEmail}</p>
                      <button class="btn btn-primary">Follow</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-2  border border-dark rounded-4 mt-4">
                <ul style={{margin: "-18px"}} class="list-group list-group-flush ">
                  {myPlatforms()}
                </ul>
              </div>

              <div class="card mt-2  border border-dark rounded-4 p-3">
                  <form onSubmit={Add}>
                  <label htmlFor="Project" className="form-label">Upload Profile Image</label>
                  <input type="file"
                            className="form-control"
                            lable="Image"
                            name="myFile"
                            id='file-upload'
                            accept='image/*'
                            style={{padding: '0.7rem'}} 
                            onChange={convertToBase64}
                            required/>
                            
                            <button class="btn btn-info mt-2"><i class="fa-solid fa-upload"></i> Upload Profile Image</button>
                  </form>
              </div>

              <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>

              
              </div>
            </div>
            <div class="col-md-8">

              <Card border="light" className="border border-dark shadow-sm rounded-4">
                <Card.Header className="border-bottom border-light d-flex justify-content-between">
                  <h3 className="mb-0">Projects</h3>
                  <Button as={Link} to={Routes.Projects.path} variant="secondary" size="sm">See all</Button>
                </Card.Header>
                      <Card.Body>
                      <ListGroup className="list-group-flush">
                          {myProjects}
                      </ListGroup>
                  </Card.Body>
              </Card>


              <Card border="light" className="border border-dark shadow-sm rounded-4 mt-4">
                <Card.Header className="border-bottom border-light d-flex justify-content-between">
                  <h3 className="mb-0">Interview Experiences</h3>
                  <Button as={Link} to={Routes.Projects.path} variant="secondary" size="sm">See all</Button>
                </Card.Header>
                      <Card.Body>
                      <ListGroup className="list-group-flush">

                        {myInterviews}

                      </ListGroup>
                  </Card.Body>
              </Card>
            </div>
          </div>

        </div>
    </div>
    </div>
  )
}


