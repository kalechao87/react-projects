import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      // console.log(newJobs);
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  // console.log(jobs[activeIdx]);
  const { title, dates, duties, company } = jobs[activeIdx];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === activeIdx && 'active-btn'}`}
                key={job.id}
                onClick={() => {
                  setActiveIdx(index);
                }}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        <div className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>

          {duties.map((duty, index) => (
            <div className='job-desc' key={index}>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))}
        </div>
      </div>

      <button type='button' className='btn'>
        more info
      </button>
    </section>
  );
}

export default App;
