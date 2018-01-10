import React, { Component } from 'react';
import './Sidebar.css';

class MenuItem extends React.Component {
  render() {
    return <li className="menu-item"><a href="">{this.props.name}</a></li>
  }
}

class Menu extends React.Component {

  render() {
    return (
      <ul className="menu">
        <MenuItem name="About" />
        <MenuItem name="Partners" />
        <MenuItem name="News" />
        <MenuItem name="Contacts" />        
      </ul>
    );
  }
}

export default Menu;



