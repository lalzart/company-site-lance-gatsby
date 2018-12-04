import React from 'react';
import './Title.css'

function Title(props) {
  return (
    <div className="titleBar">
      <span className="zenport">zenport</span>
      <p className="discription">{props.description}</p>
    </div>
  )
}

export default Title;
