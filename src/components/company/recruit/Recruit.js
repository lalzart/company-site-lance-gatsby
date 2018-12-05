import React from 'react'
import './Recruit.css'
import Lever from '../../../assets/company/Lever.png'
import Linkedin from '../../../assets/company/Linkedin.png'
import Wantedly from '../../../assets/company/wantedly_logo.png'

function Recruit() {
  return (
    <div className="recruitContainer">
      <div className="recruitPhrase">We also meet new members on</div>
      <a href="https://jobs.lever.co/zenport" className="recruitLink" target="_blank">
        <img src={Wantedly} alt="" className="recruitIcon wantedly"/>
      </a> 
      <div className="recruitSlash">/</div>  
      <a href="https://jobs.lever.co/zenport" className="recruitLink" target="_blank">
        <img src={Lever} alt="" className="recruitIcon"/>
      </a>
      <div className="recruitSlash">/</div>
      <a href="https://jobs.lever.co/zenport" className="recruitLink" target="_blank">
        <img src={Linkedin} alt="" className="recruitIcon"/>
      </a>
    </div>
  )
}

export default Recruit;
