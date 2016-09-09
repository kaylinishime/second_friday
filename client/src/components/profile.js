
import React, { Component } from 'react';
import { Col, Grid, Row, MenuItem, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import Navbar from './navbar';
import '../App.css';
import SearchBar from './containers/searchbar';
import YelpList from './containers/yelp_list';

class Profile extends Component {

  render(){

    var navStyle = {
      marginTop: '20px',
    }

    return (
      <div className="App">
      <div>
      <Navbar />
      </div>
      <SearchBar />
      <YelpList />
      </div>
    )
  }
}

export default Profile;
