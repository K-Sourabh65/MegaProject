// import React from 'react'

// export default function Problems() {
//   return (
//     <div className="problems">
//       <iframe src="https://scuffedcode.chowkabhara.com" style={{width: "100%", height: "600px"}}/>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import '../styles/Problems.css';

export const ProblemCard = ({ problem }) => {
  const {
    questionTitle,
    questionLink,
    difficulty,
    topicTags,
    likes,
    dislikes,
  } = problem;

  return (
    <div className="problem-card">
      <h2>{questionTitle}</h2>
      <div className="details">
        <div className="info">
          <span className="label">Difficulty:</span>
          <span className="value">{difficulty}</span>
        </div>
        <div className="info">
          <span className="label">Likes:</span>
          <span className="value">{likes}</span>
        </div>
        <div className="info">
          <span className="label">Dislikes:</span>
          <span className="value">{dislikes}</span>
        </div>
      </div>
      <div className="tags">
        {topicTags.map((tag, index) => (
          <span key={index} className="tag">{tag.name}</span>
        ))}
      </div>
      <a href={questionLink} className="view-problem-btn">View Problem</a>
    </div>
  );
};


const Problems = () => {
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch('https://alfa-leetcode-api.onrender.com/daily');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProblem(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchProblem();
  }, []);

  return (
    <div>
      {/* <div className="iframe-container">
        <iframe src="https://scuffedcode.chowkabhara.com" style={{ width: "100%", height: "600px" }} />
      </div>
      <div className="problem-container">
        <h1>LeetCode Daily Problem</h1>
        {problem && <ProblemCard problem={problem} />}
      </div> */}
      {/* <div className="iframe-container"> */}
      <iframe
  style={{
    maxWidth: "100%",
    width: "100%",
    border: "none",
    height: "375px",
  }}
  src="https://www.interviewbit.com/embed/snippet/8d7fa988d2527253135a"
  title="Interviewbit Ide snippet/8d7fa988d2527253135a"
  loading="lazy"
  allow="clipboard-write"
  allowFullScreen
  referrerPolicy="unsafe-url"
  sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
></iframe>
      {/* </div> */}
    </div>
  )};
  
export default Problems;
