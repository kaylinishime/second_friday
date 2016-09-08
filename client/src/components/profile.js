
import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import Navbar from './navbar';
import '../App.css';
import SearchBar from './containers/searchbar'

class Profile extends Component {

  render(){


    return (
      <div className="App">
      <Navbar />

      <h1>Welcome back!</h1>
      <Nav className="profilenav" bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
      <NavItem eventKey="2" title="Item">Create Event</NavItem>
      <NavDropdown eventKey="4" title="My Events" id="nav-dropdown">
      <MenuItem eventKey="4.1">Action</MenuItem>
      <MenuItem eventKey="4.2">Another action</MenuItem>
      <MenuItem eventKey="4.3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4.4">Separated link</MenuItem>
      </NavDropdown>
      </Nav>
      <SearchBar />

      <Grid>
        <Row className="show-grid">
        <Col md={6} mdPush={6} className="column">
        </Col>

        <Col md={6} mdPull={6} className="column">
      saasf
        </Col>
        </Row>
      </Grid>

      </div>
    )
  }
}

export default Profile;
