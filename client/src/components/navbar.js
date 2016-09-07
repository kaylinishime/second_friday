import React, { Component } from 'react';
import { Nav, NavItem, handleSelect } from 'react-bootstrap';



class Navbar extends Component {


  render(){
    var navStyle = {
      color: 'grey'
    }

    return (

      <Nav bsStyle="pills" onSelect={handleSelect}>
      <NavItem style={navStyle} href="/home"><h1>Friday</h1></NavItem>
     <NavItem className="smallnav" style={navStyle} eventKey={1} href="/home">Sign Up</NavItem>
     <NavItem className="smallnav" eventKey={2} title="Item" href="/signin">Sign In</NavItem>
     <NavItem className="smallnav"eventKey={3}>Home</NavItem>
   </Nav>

    );
  }
}

export default Navbar;
