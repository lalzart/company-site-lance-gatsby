import React, { Component } from 'react';
import './People.css';
import Akira from '../../../assets/about/akira.jpg';
import Toshi from '../../../assets/about/toshi.jpg';
import Kaka from '../../../assets/about/kaka.jpg'
import Yosei from '../../../assets/about/yosei.jpg';
import Fumi from '../../../assets/about/fumi.jpg';
import TJ from '../../../assets/about/tj.jpg';
import Hiroya from '../../../assets/about/hiroya.jpg';

import Kevin from '../../../assets/about/kevin.jpg';
import Max from '../../../assets/about/maxime.jpg';
import Subaru from '../../../assets/about/subaru.jpg';
import Placeholder from '../../../assets/about/placeholder.png';
import Title from '../Title/Title';

class People extends Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      hovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      hover: !state.hover,
    };
  }


  render() {
    return (
      <React.Fragment>
      <Title description="People"/>
      <div className="container">
        <div className="flexRow">
          <div className="person">
            <div 
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
              className="toshi"> 
              {  this.state.hover &&
                <div className="toshiInfo">Toshi is the CEO and founder of Zenport. He holds undergrad and master degree from the University of Tokyo.</div>
              }
              <img src={Toshi} alt="" className="large"/>
            </div>
            <h4 className="name">Toshihiro KASEDA</h4>
            <h6 className="role">CEO, Founder</h6>
          </div>
          <div className="person">
            <img src={Kaka} alt="" className="medium"/>
            <h4 className="name">Kaka Huynh</h4>
            <h6 className="role">Lead Front-end Engineer</h6>
          </div>
          <div className="person personSmall">
            <img src={Akira} alt="" className="small"/>
            <h4 className="name">Akira Ishikawa</h4>
            <h6 className="role">Business Development</h6>
          </div>
          <div className="person">
            <img src={Yosei} alt="" className="large"/>
            <h4 className="name">Yosei Ito</h4>
            <h6 className="role">Business Development</h6>
          </div>
        </div>
        <div className="flexRow flexCenter">
          <div className="person ">
            <img src={Fumi} alt="" className="medium"/>
            <h4 className="name">Fumiyuki OTA</h4>
            <h6 className="role">COO</h6>
          </div>
          <div className="person personSmall">
            <img src={TJ} alt="" className="small"/>
            <h4 className="name">Jiang Jifa</h4>
            <h6 className="role">Front-end Engineer</h6>
          </div>
          <div className="person">
            <img src={Hiroya} alt="" className="large"/>
            <h4 className="name">Hiroya Kawaguchi</h4>
            <h6 className="role">Business Development</h6>
          </div>
          <div className="person">
            <img src={Placeholder} alt="" className="medium"/>
            <h4 className="name">Takehiro Ide</h4>
            <h6 className="role">Business Development</h6>
          </div>
        </div>
        <div className="flexRow">
          <div className="person personSmall">
            <img src={Kevin} alt="" className="small"/>
            <h4 className="name">Kevin</h4>
            <h6 className="role">Manager</h6>
          </div>
          <div className="person">
            <img src={Max} alt="" className="large"/>
            <h4 className="name">Maxime Perrimond</h4>
            <h6 className="role">Lead Back-end Engineer</h6>
          </div>
          <div className="person">
            <img src={Subaru} alt="" className="medium"/>
            <h4 className="name">Subaru</h4>
            <h6 className="role">Designer</h6>
          </div>
          <div className="person personSmall">
            <img src={Placeholder} alt="" className="small"/>
            <h4 className="name">ESTHER PARK</h4>
            <h6 className="role">Business Development</h6>
          </div>
        </div>

      </div>
      </React.Fragment>
    )
  }
}

export default People;
