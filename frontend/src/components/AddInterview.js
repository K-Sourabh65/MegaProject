import React, { useEffect, useState, useId } from "react";
import '../styles/AddInterview.css'

function AddInterview(){
    let [CompanyName, setCompanyName] = useState([]);
    let [Role, setRole] = useState([]);
    let [Location, setLocation] = useState([]);
    let [Salary, setSalary] = useState([]);
    let [Round, setRound] = useState([]);
    let [Date, setDate] = useState([]);
    let [InterviewDetail, setInterviewDetail] = useState([]);
    let [Verdict, setVerdict] = useState([]);
    let [CompanyImage, setInterviewImage] = useState("")

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            console.log(reader.result);
            setInterviewImage(reader.result);
        }
        reader.onerror = error =>{
            console.log("Error");
        }
    }

    const interviewid = useId();
    function Add(e){
        console.log({CompanyImage})
        e.preventDefault()
        fetch('http://localhost:8000/addinterview', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify({
                "InterviewId": `${interviewid}`,
                "CompanyName": `${CompanyName}`,
                "Role": `${Role}`,
                "Location": `${Location}`,
                "Salary": `${Salary}`,
                "Round": `${Round}`,
                "Date": `${Date}`,
                "CompanyImage": `${CompanyImage}`,
                "InterviewDetail": `${InterviewDetail}`,
                "InterviewStudentId": `${localStorage.getItem('email')}`,
                "Verdict": `${Verdict}`,
            })
        })
        .then(window.location.href = '/interviews')
        
    }

    return(
        <div className='AddInterviews m-4'>
            <div className='Header'>
                <div className='Name'><img src='https://cdn-user-icons.flaticon.com/96885/96885753/1679508402160.svg?token=exp=1679509303~hmac=3ea85d6f2433ef92f3e0fc3a95e26187' width='30' alt='' style={{marginRight: "1rem"}}/><h2>Add Interview</h2></div>
            </div>  
            <form onSubmit={Add}>
                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="Interview" placeholder="Enter the Interview name here..." style={{padding: '0.7rem'}} onChange={(e) => setCompanyName(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Role</label>
                    <input type="text"  maxlength="100" className="form-control" id="Interview" placeholder="Enter the Interview name here..." style={{padding: '0.7rem'}} onChange={(e) => setRole(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Location</label>
                    <input type="text" className="form-control" id="Interview" placeholder="Enter the Interview name here..." style={{padding: '0.7rem'}} onChange={(e) => setLocation(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="Interview" placeholder="Enter the Interview name here..." style={{padding: '0.7rem'}} onChange={(e) => setSalary(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Round</label>
                    <input type="text" className="form-control" id="Interview" placeholder="Enter the Interview name here..." style={{padding: '0.7rem'}} onChange={(e) => setRound(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Date</label>
                    <input type="text" className="form-control" id="Interview" placeholder="ex. 23 July 2024" style={{padding: '0.7rem'}} onChange={(e) => setDate(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Interview Detail</label>
                    <input type="text" className="form-control" id="Interview" placeholder="Enter the Interview name here..." style={{padding: '0.7rem'}} onChange={(e) => setInterviewDetail(e.target.value)} required/>
                </div>

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Verdict</label><br></br>

                    <input type="radio" id="selected" name="verdict" value="selected" onChange={(e) => setVerdict(e.target.value)}/>

                    <label className="form-label" for="selected">selected</label>

                    <input className='ms-4' type="radio" id="rejected" name="verdict" value="rejected" onChange={(e) => setVerdict(e.target.value)}/>

                    <label className="form-label" for="rejected">rejected</label><br></br>
                </div>

                

                <div className="mb-3 Add">
                    <label htmlFor="Interview" className="form-label">Company Image<span style={{fontSize:'14px',color:'red', marginLeft:'2rem'}}>max size 50kb </span></label>

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
                
                <button type="submit" className="btn" style={{background: '#017256', color: 'white', margin: '2rem 0'}}>Add Interview</button>
            </form>
        </div>
    )
}

export default AddInterview