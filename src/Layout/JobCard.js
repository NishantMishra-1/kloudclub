import React from 'react'
import Image from '../assets/Devops.png'
import './JobCard.css';

const JobCard = () => {
  return (
    <section>
        <div className='holder'>

        <div>
            
                <img src={Image} alt="Web" />
        </div>
        <div>
            <div>
                <h3>Web Developer</h3>
            </div>
            <button>Apply</button>
        </div> 
        </div>
    </section>
  )
}

export default JobCard