import React, { Component } from 'react'
import Header from '../components/company/header/Header'
import Hero from '../components/company/hero/Hero'
import Values from '../components/company/values/Values'
import People from '../components/company/people/People'
import Hiring from '../components/company/hiring/Hiring'
import Careers from '../components/company/careers/Careers'
import Recruit from  '../components/company/recruit/Recruit'

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
        <Recruit />
      </div>
    )
  }
}
