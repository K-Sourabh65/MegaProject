import React, { useState, useEffect } from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress'; // Assuming you're using Material-UI for the progress bar
import '../styles/Jobs.css'

const Jobs = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track current page of entries

  const fetchEntries = async (page) => {
    try {
      setLoading(true);

      const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          "limit": 12,
          "offset": 0
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        const data = result.jdList;
        setEntries((prevEntries) => [...prevEntries, ...data]); // Append new entries to existing list
        setLoading(false);
        } catch (error) {
          console.error('Error fetching entries:', error);
          setLoading(false);
        }
  };

  useEffect(() => {
    fetchEntries(page);
  }, [page]); // Fetch entries when page changes

  const handleIntersection = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1); // Load next page when user reaches the end
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const targetElement = document.getElementById('bottom-of-list');
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []); // Set up IntersectionObserver

  return (
    <div>
      <div className='Jobs'>
      {entries.map((e,i) => (
        <>
          <div className='job-card'>

            <div className='job-sub'>

              <div className='company'>
                <img src={e.logoUrl} alt=""></img>
              </div>

              <div className='job-detail'>
                <span className='company-name'>{e.companyName}</span>
                <span className='company-role'>{e.jobRole}</span>
                <span className='company-location'><i class="fa-solid fa-location-dot"></i> {e.location}</span>
              </div>

            </div>

            <div class="button-wrapper"> 
              <button class="job-btn outline" onClick={e.jdLink}>DETAILS</button>
                <button class="job-btn fill">APPLY NOW</button>
            </div>
          </div>
        </>
      ))}
      
      </div>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          {/* <CircularProgress /> */}Loading...
        </div>
      )}
      <div id="bottom-of-list" style={{ height: '10px' }}></div>
    </div>
  );
};

export default Jobs;

