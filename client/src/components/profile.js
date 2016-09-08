
import React, { Component } from 'react';
import { ButtonToolbar, Button, Col, Grid, Row } from 'react-bootstrap';
import Navbar from './navbar';
import '../App.css';

class Profile extends Component {

  render(){


    return (
      <div className="App">
      <Navbar />

      <h1>Welcome back!</h1>

      <Grid>
        <Row className="show-grid">
        <Col md={6} mdPush={6} className="column">
        </Col>

        <Col md={6} mdPull={6} className="column">
          <ButtonToolbar>
            <Button bsStyle="success">Create Event</Button>
          </ButtonToolbar>
        </Col>
        </Row>
      </Grid>

      </div>
    )
  }
}

export default Profile;
