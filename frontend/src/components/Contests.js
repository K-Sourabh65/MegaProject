import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contests.css'

function Contests() {
    let [Contests, setContests] = useState([]);

    let [Platform, setPlatform] = useState();
    let [ContestName, setContestName] = useState();
    let [ContestLink, setContestLink] = useState();
    let [ContestDate, setContestDate] = useState();
    let [ContestTime, setContestTime] = useState();

    useEffect(() => {
        fetch(`http://localhost:8000/contests`, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((json) => {
            setContests(json)
        })
    }, [])

    function AddContest(e) {
        e.preventDefault()
        fetch('http://localhost:8000/addcontest', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify({
                "Platform": `${Platform}`,
                "ContestName": `${ContestName}`,
                "ContestLink": `${ContestLink}`,
                "ContestDate": `${ContestDate}`,
                "ContestTime": `${ContestTime}`,
                "Status": "No",
            })
        })
            .then(document.documentElement.style.setProperty('--displayAddS', 'none'))
            .then(window.location.href = '/contests')
    }

    function UpdateContest(e) {
        e.preventDefault()
        fetch(`http://localhost:8000/updatecontest/${e.target.alt}`, {
            method: 'PUT',  
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify({
                ContestName: `${e.target.alt}`,
                Status: "Yes",
            })
        })
        .then(window.location.href = '/contests')
    }

    const Upcoming = Contests.map((element,i) => {
      if (element.Status === "No") {
      return (
          <div className='Contests-column'>
                        <div>{i + 1}</div>
                        <div style={{ textAlign: "start" }}>{element.ContestName}</div>
                        <div class="link-opacity-100"><a href={element.ContestLink}>Link</a></div>
                        <div>{element.Platform}</div>
                        <div>{element.ContestDate}</div>
                        <div>{element.ContestTime}</div>
                        <div className='Action'>
                        <Link><img class="float-end" src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt={element.ContestName} width="20"  onMouseOut = {(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'} onClick={UpdateContest}/></Link>
                        </div>
                    </div>
      );
    }
  });

  const Past = Contests.map((element,i) => {
    if (element.Status === "Yes") {
    return (
        <div className='Contests-column'>
                      <div>{i + 1}</div>
                      <div style={{ textAlign: "start" }}>{element.ContestName}</div>
                      <div ><a class="link-primary" href={element.ContestLink}>Link</a></div>
                      <div>{element.Platform}</div>
                      <div>{element.ContestDate}</div>
                      <div>{element.ContestTime}</div>
                  </div>
    );
  }
});

    return (
        <div className='Contests'>

            <div class="float-end mt-3">
                    <div className='Add-Contest-Button' onClick={() => document.documentElement.style.setProperty('--displayAddS', 'flex')}>Add Contest<img src='https://cdn-icons-png.flaticon.com/512/1828/1828925.png' width="15" alt='' style={{ marginLeft: "10px", filter: "invert(100%)"}} /></div>
            </div>
            
            <form className="Add-Contest" onSubmit={AddContest}>
                <input type="text" className="form-control" placeholder='Platform' onChange={(e) => setPlatform(e.target.value)} required />
                <input type="text" className="form-control" placeholder='Contest Name' onChange={(e) => setContestName(e.target.value)} required />
                <input type="text" className="form-control" placeholder='Contest Link' onChange={(e) => setContestLink(e.target.value)} required />
                <input type="date" className="form-control" placeholder='Contest Link' onChange={(e) => setContestDate(e.target.value)} required />
                <input type="time" className="form-control" placeholder='Contest Link' onChange={(e) => setContestTime(e.target.value)} required />
                <button className="btn btn-outline-secondary" type='submit'>Add</button>
                <button className="btn btn-outline-secondary" onClick={() => document.documentElement.style.setProperty('--displayAddS', 'none')}>Cancel</button>
            </form>
            

            <div className='Header'>
                <div className='Name'><img src='https://cdn-user-icons.flaticon.com/96885/96885753/1679413474378.svg?token=exp=1679414375~hmac=6711997f218f020aa8895c37fe44ec4b' width='30' alt='' style={{ marginRight: "1rem" }} /><h2> Upcoming Contests</h2></div>
            </div>

            <div className='Contests-heading'>
                <div>No.</div>
                <div style={{ textAlign: "start" }}>Contest</div>
                <div>Link</div>
                <div>Platform</div>
                <div>Date</div>
                <div>Time</div>
                <div>Actions</div>
            </div>

            {Upcoming}

            <div className='Header' class="mt-6">
                <div className='Name'><img src='https://cdn-user-icons.flaticon.com/96885/96885753/1679413474378.svg?token=exp=1679414375~hmac=6711997f218f020aa8895c37fe44ec4b' width='30' alt='' style={{ marginRight: "1rem" }} /><h2> Past Contests</h2></div>
            </div>

            <div className='Contests-heading'>
                <div>No.</div>
                <div style={{ textAlign: "start" }}>Contest</div>
                <div>Link</div>
                <div>Platform</div>
                <div>Date</div>
                <div>Time</div>
            </div>

            {Past}
        </div>
    );
}

export default Contests;

