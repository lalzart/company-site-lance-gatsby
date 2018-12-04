import React from 'react'
import './Grad.css'

export default function GradientContainer(props) {
  return (
    <div className="gradientContainer">
      {props.children}
    </div>
  )
}
