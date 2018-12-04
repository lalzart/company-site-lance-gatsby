import React from 'react'
import './Value.css'

function Value(props) {
  return (
    <div className="valueBox">
      <div className="valueTitle">{props.value}</div>
      <div className="numRow">
        <div className="line"></div>
        <div className="valueNumber">{props.num}</div>
        <div className="line"></div>
      </div>
      <p className="valueDescription">{props.description}</p>
    </div>
  )
}

export default Value;
