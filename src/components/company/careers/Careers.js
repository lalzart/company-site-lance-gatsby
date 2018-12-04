import React, { Component } from 'react'
import './Careers.css';
import Title from '../title/Title'
import Career from './Career'

 class Careers extends Component {
  render() {
    return (
      <div>
        <Title description="careers"/>
        <div className="careersContainer">
          <Career 
          departmentTitle="Sales and Marketing"
          departmentInfo="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
          jobTitle="Job Title"
          jobPosition="Position"
          />
          <Career 
          departmentTitle="DEVELOPMENT"
          departmentInfo="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
          jobTitle="Job Title"
          jobPosition="Position"
          />
        </div>
      </div>
    )
  }
}


export default Careers;
