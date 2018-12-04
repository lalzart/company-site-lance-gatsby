import React, { Component } from 'react'
import './Header.css';
import Logo from '../../../assets/logo.svg';
import Link from '../Link/Link';
import GradientContainer from '../GradientContainer/GradientContainer';

 class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <img className="logo" src={Logo} alt=""/>
        <div className="navLinks">
          <Link locale="product"/>
          <Link locale="parners"/>
          <Link locale="company"/>
          <Link locale="plan"/>
        </div>
        <div className="userArea">
          <Link locale="sign up" />
          <GradientContainer>
            <Link locale="get started"/>
          </GradientContainer>
        </div>
      </div>
    )
  }
}

export default Header;