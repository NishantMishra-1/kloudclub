
import React from 'react';
import './Home.css'



export default function Home() {
  return (
    <>
    <div className="main-home">
      <div className='home'> 
      <div className='para'>Start Building Your Own <br></br> Carrer Now</div>
      <div className="app">
       <input type="textarea" placeholder="Search..."/>
         

       <div className='select'>
           <select name="card_type" id="card_type">
             <option value="">All region</option>
             <option value="visa">Seattle </option>
             <option value="rapay">Miami</option>
             <option value="paytm">Chicago</option>
             <option value="master card ">India</option>
            </select>
        </div> 
       
     </div>
     <div className='imgs'>We offer 2,989 job vacancies right now!</div>

     <div className='image' >
                <img src=''alt='' />
                
     </div>

   

      </div>
   
      </div>
      
    </>
  );
}