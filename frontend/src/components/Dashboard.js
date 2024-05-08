import React from 'react'
import '../styles/Dashboard.css'
import { Link, NavLink } from 'react-router-dom';
import {Routes} from './routes'

export default function Dashboard() {
  return (
    <div className='Dashboard'>

      <div className='dash-head'>
        <div>
          <h1 className='fw-bold'>Welcome, Karan Jadhav!</h1>
          <h5 className='fw-light'>Let's start today's learning, Happy Coding! 🚀</h5>

          <div className='dash-btns mt-5'>
            
              <NavLink to={Routes.Problems.path} className='dash-btn'>Solve Problems <i class="fa-solid fa-inbox"></i></NavLink>
              <NavLink as={Link} to={Routes.Jobs.path} className='dash-btn ms-4'>Find Job <i class="fa-solid fa-briefcase"></i></NavLink>
           </div>
        </div>
        
        <div className='dash-svg'>
          <img className='img-svg' src="https://cdn.codechef.com/images/home/coding_boy.svg"></img>
        </div>
      </div>

      <div className='dsa'>

        <div className='dsa-block'>

            <div className='dsa-head'>
              <span><i class="fa-solid fa-inbox"></i></span>
              <h3>Problems</h3>
            </div>
              <p className='dsa-detail'> Regularly practicing problems can teach help you to think faster and make you good in problem solving which in a way helps in interview.</p>
              <Link className='dsa-link' to={Routes.Problems.path}>Solve Problems Now...</Link>
        </div>  

        <div className='dsa-block'>

            <div className='dsa-head'>
              <span><i class="fa-solid fa-list"></i></span>
              <h3>DSA Sheets</h3>
            </div>
              <p className='dsa-detail'> Understanding data structures and algorithms enables you to understand the problem statements on a deeper level and create logical solutions to solve them.</p>
              <Link className='dsa-link' to={Routes.DSASheets.path}>View DSA Sheets Now...</Link>
        </div>  

        <div className='dsa-block'>

            <div className='dsa-head'>
              <span><i class="fa-solid fa-calendar-days"></i></span>
              <h3>Contests</h3>
            </div>
              <p className='dsa-detail'>
                Coding Contests enhances problem-solving skills and exposes you to diverse topics, improving coding proficiency and preparation for technical interviews.</p>
              <Link className='dsa-link' to={Routes.Contests.path}>Vist Daily Contests...</Link>
        </div>  

        <div className='dsa-block'>

            <div className='dsa-head'>
              <span><i class="fa-solid fa-code"></i></span>
              <h3>Projects</h3>
            </div>
              <p className='dsa-detail'> Explore a diverse range of projects that span various domains, including web development, mobile app creation, machine learning, and more.</p>
              <Link className='dsa-link' to={Routes.Projects.path}>Explore Projects...</Link>
        </div>  

        <div className='dsa-block'>

            <div className='dsa-head'>
              <span><i class="fa-solid fa-users"></i></span>
              <h3>Interviews</h3>
            </div>
              <p className='dsa-detail'>Reading interview experiences helps to provides tips, builds confidence, and helps avoid common mistakes, enhancing preparation and performance.</p>
              <Link className='dsa-link' to={Routes.Interviews.path}>Read Interview Experiences...</Link>
        </div>  

        <div className='dsa-block'>

            <div className='dsa-head'>
              <span><i class="fa-solid fa-briefcase"></i></span>
              <h3>Jobs</h3>
            </div>
              <p className='dsa-detail'> Stay ahead in your coding career by exploring the vast array of opportunities presented by KIT Coding Cliub and propel yourself into the forefront of the tech....</p>
              <Link className='dsa-link' to={Routes.Jobs.path}>Explore Opportunities...</Link>
        </div>  
        
      </div>

      <div className="problems text-center mt-4 mb-4">
        <h1>Leetcode Profile</h1>
        <iframe src="https://leetcard.jacoblin.cool/karans7105?theme=light&font=Monda&ext=heatmap" style={{width: "60%", height: "300px"}}/>
      </div>
    </div>
  );
}




