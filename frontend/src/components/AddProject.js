import React, { useEffect, useState } from "react";
import '../styles/AddProject.css'

function AddProject(){
    let [ProjectName, setProjectName] = useState([]);
    let [ProjectDetail, setProjectDetail] = useState([]);
    let [ProjectLink, setProjectLink] = useState([]);
    let [ProjectImage, setProjectImage] = useState("")

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            console.log(reader.result);
            setProjectImage(reader.result);
        }
        reader.onerror = error =>{
            console.log("Error");
        }
    }

    function Add(e){
        console.log({ProjectImage})
        e.preventDefault()
        fetch('http://localhost:8000/addproject', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify({
                "ProjectName": `${ProjectName}`,
                "ProjectDetail": `${ProjectDetail}`,
                "ProjectLink": `${ProjectLink}`,
                "ProjectImage": `${ProjectImage}`,
                "ProjectStudentEmail": `${localStorage.getItem('email')}`,
            })
        })
        .then(window.location.href = '/projects')
        
    }

    return(
        <div className='AddProjects'>
            <div className='Header'>
                <div className='Name'><img src='https://cdn-user-icons.flaticon.com/96885/96885753/1679508402160.svg?token=exp=1679509303~hmac=3ea85d6f2433ef92f3e0fc3a95e26187' width='30' alt='' style={{marginRight: "1rem"}}/>Add Project</div>
            </div>  
            <form onSubmit={Add}>
                <div className="mb-3 Add">
                    <label htmlFor="Project" className="form-label">Project Name</label>
                    <input type="text" className="form-control" id="Project" placeholder="Enter the Project name here..." style={{padding: '0.7rem'}} onChange={(e) => setProjectName(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Project" className="form-label">Project Details</label>
                    <input type="text"  maxlength="100" className="form-control" id="Project" placeholder="Enter the Project name here..." style={{padding: '0.7rem'}} onChange={(e) => setProjectDetail(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Project" className="form-label">Project Link</label>
                    <input type="text" className="form-control" id="Project" placeholder="Enter the Project name here..." style={{padding: '0.7rem'}} onChange={(e) => setProjectLink(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Project" className="form-label">Project Image<span style={{fontSize:'14px',color:'red', marginLeft:'2rem'}}>max size 50kb </span></label>

                    <input 
                        type="file"
                        className="form-control"
                        lable="Image"
                        name="myFile"
                        id='file-upload'
                        accept='image/*'
                        style={{padding: '0.7rem'}} 
                        onChange={convertToBase64}
                        required/>
                </div>
                
                <button type="submit" className="btn" style={{background: '#017256', color: 'white', margin: '2rem 0'}}>Add Project</button>
            </form>
        </div>
    )
}

export default AddProject