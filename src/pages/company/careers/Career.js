import React from 'react'
import Frame from '../../../assets/career/Frame.png';
import Icon from '../../../assets/career/Icon.png';
import './Career.css'

 function Career(props) {
  return (
    <div className="careerContainer">
      <div className="descriptionBox">
        <h1 className="departmentTitle">{props.departmentTitle}</h1>
        <p className="departmentInfo">{props.departmentInfo}</p>
      </div>
      <div className="linkBox">
        <div className="jobLink">
         <img src={Frame} alt="" className="careerVector"/>
         <h3 className="jobTitle">{props.jobTitle}</h3>
         <h3 className="slash">/</h3>
         <h3 className="position">{props.jobPosition}</h3>
         <img src={Icon} alt="" className="arrow"/>
        </div>
        <div className="jobLink">
         <img src={Frame} alt="" className="careerVector"/>
         <h3 className="jobTitle">{props.jobTitle}</h3>
         <h3 className="slash">/</h3>
         <h3 className="position">{props.jobPosition}</h3>
         <img src={Icon} alt="" className="arrow"/>
        </div>
        <div className="jobLink">
         <img src={Frame} alt="" className="careerVector"/>
         <h3 className="jobTitle">{props.jobTitle}</h3>
         <h3 className="slash">/</h3>
         <h3 className="position">{props.jobPosition}</h3>
         <img src={Icon} alt="" className="arrow"/>
        </div>
      </div>
    </div>
  )
}

export default Career;