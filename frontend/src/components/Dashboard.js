
import React, { useState, useEffect } from 'react';
const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://alfa-leetcode-api.onrender.com/karans7105/solved');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="problems">
        <iframe src="https://leetcard.jacoblin.cool/sourabh65?theme=light&font=Monda&ext=heatmap" style={{width: "100%", height: "600px"}}/>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>All</h2>
          <p>Solved: {data.solvedProblem}</p>
          <p>Submissions: {data.totalSubmissionNum[0].submissions}</p>
        </div>
        <div className="card">
          <h2>Easy</h2>
          <p>Solved: {data.easySolved}</p>
          <p>Submissions: {data.acSubmissionNum[1].submissions}</p>
        </div>
        <div className="card">
          <h2>Medium</h2>
          <p>Solved: {data.mediumSolved}</p>
          <p>Submissions: {data.acSubmissionNum[2].submissions}</p>
        </div>
        <div className="card">
          <h2>Hard</h2>
          <p>Solved: {data.hardSolved}</p>
          <p>Submissions: {data.acSubmissionNum[3].submissions}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
