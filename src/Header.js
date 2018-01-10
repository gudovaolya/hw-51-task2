import React, { Component } from 'react';
import logo from './logo.jpg';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="container">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">SiteName</h1>
        </div>
      </header>
    );
  }
}

export default Header;