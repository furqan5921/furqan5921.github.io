import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip';

import "./githubcalendar.css"
import Stats from './stats';

const Calendar = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <section id='calendar' >
      <h5>My Statistics</h5>
      <h2>Github</h2>
      <div className='container github__container'>
        <div className='githubcalendar'>

     <GitHubCalendar username='furqan5921'
     style={{
        // width:"100%"
     }}
     blockSize={11}
     fontSize={20}
     blockRadius={10}
     >

     <ReactTooltip delayShow={20} html />
     </GitHubCalendar>
        </div>
        
            <Stats/>
        
      </div>
    </section>
  )
}

export default Calendar
