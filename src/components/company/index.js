import React, { Component } from 'react'
import Header from './header/Header'
import Hero from './hero/Hero'
import Values from './values/Values'
import People from './people/People'
import Hiring from './hiring/Hiring'
import Careers from './careers/Careers'

export default class Company extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Values />
        <People />
        <Hiring />
        <Careers />
      </div>
    )
  }
}
