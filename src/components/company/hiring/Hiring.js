import React from 'react'
import './Hiring.css'
import Team from '../../../assets/career/all-1.jpg';
import Globe from 
'../../../assets/company/andrew-neel-182861-unsplash.png';
export default function Hiring() {
  return (
    <div className="hiringContainer">
      <img src={Globe} alt="" className="globe"/>
      <img src={Team} alt="" className="team"/>
      <div className="hiringInfo">
      <div className="box1">
          <p className="info1">WILL YOU BE THE</p>
          <p className="info1">NEXT ZENPORT PEOPLE?</p>
        </div>
        <div className="box2">
          <p className="info2">Zenport will make new globalization from Tokyo.</p>
          <p className="info2">We will send a message to the world from Tokyo</p>
        </div>
        <p className="info3">"You can decide where to work at wherever you were born"</p>
        <div className="box3">
          <p className="info4">If you agree with this mission, please contact us.</p>
          <p className="info4">Are you guys ready for the adventure?</p>
          <p className="info4">Get on our ship, Zenport!</p>
        </div>
      </div>
    </div>
  )
}
