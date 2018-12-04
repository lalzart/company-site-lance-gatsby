import React, { Component }  from 'react'
import './Values.css';
import Title from '../Title/Title';
import Value from './Value';
import Vector from '../../../assets/Logo/Vector.png'

 class Values extends Component {
  render() {
    return (
      <div className="contianer">
        <Title description="Values"/>
          <div className="valuesContainer">
            <Value 
              value="Beyond Expectations" 
              num="1"
              description="We are never satisfied with what we have now because we create the future. We go beyond the expectations of customers and society, and astonish the world. Prior to that, we must challenge stiff impediments and go beyond our limits. Do not fear. Let us challenge together, and innovate something that no man has ever witnessed"
              />
            <Value 
              value="You are Zenport" 
              num="2"
              description="All the members of Zenport are capable and responsible for not only refining the company, but also pleasing the customers. Your position, experience, ability, age do not matter at all. As long as you strive lively, we are the most enthusiastic advocate of your action and belief. Never ever forget that You are Zenport itself."
              />
            <Value 
              value="Embrace our Differences" 
              num="3"
              description="We were raised in different cultures, environments, and countries. That is why we all have unique ideas and values. Perhaps we find distinctive values bizarre. Yet, we shall embrace our differences and debate constructively. We may be wrong sometimes , and thus we always ought to be humble, be fair to everyone, and express gratitude."
              />
            <Value 
              value="Simplification is Innovation" 
              num="4"
              description="Simplicity is innovation. It eliminates what is not necessary, build an flexible organization opened to constant changes, and block vested interests that are about to be secured. Hence, we shall keep seeking the tips to simplify product, organization and society. Perhaps it is mere simplicity, but it can be magnificently radical."
              />
          </div>
          <img className="vector" src={Vector} alt=""/>
      </div>
    )
  }
}


export default Values;


