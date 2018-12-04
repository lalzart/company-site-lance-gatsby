import React from 'react'
import './Hero.css'
import HeroImg from '../../../assets/company/hero-background.jpeg'
 function Hero() {
  return (
    <div className="heroBanner">
        <div className="grad">
        <div className="lrgText">
          <h1>Be a standard of global trading</h1>
          <h1>Make one world market where all people</h1>
          <h1>connect through trading</h1>
        </div>
        <div className="smText">
          <p>The world is united. Yet, the market is divided by countries. The invisible line created by</p>
          <p>nations prevents the interaction between people, goods, and even our souls.</p>
          <p>This is the moment we unite. Since 1492, the world is rapidly getting closer thanks to</p>
          <p>Columbus who discovered the New World.It is time for us to connect. Let us create the world with chains of people and goods.</p>
        </div>
        </div>
        <img src={HeroImg} alt=""/>
    </div>
  )
}

export default Hero;
