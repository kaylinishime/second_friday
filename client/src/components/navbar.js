import React, { Component } from 'react';
import { Nav, NavItem, handleSelect } from 'react-bootstrap';
import { Link } from 'react-router'



class Navbar extends Component {


  render(){

    var navStyle = {
      color: 'black'
    }

    return (

      <Nav bsStyle="pills" onSelect={handleSelect}>
      <NavItem style={navStyle} href="/">
        <h1 className="fridaynav">Friday</h1>
        </NavItem>

      <NavItem className="smallnav" eventKey={1} href="/home">
        <p className="navbar">Sign Up</p>
      </NavItem>
     <NavItem className="smallnav" eventKey={2} title="Item" href="/signin">
      <p className="navbar">Sign In</p></NavItem>
     <NavItem className="smallnav"eventKey={3}>
     <p className="navbar">Home</p></NavItem>
   </Nav>

    );
  }
}

export default Navbar;
