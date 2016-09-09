
import React, { Component } from 'react';
import $ from 'jquery';




class Coverimage extends Component {
  render(){
    var imageStyle = {
      width: '100%',
      position: 'absolute',
      marginTop: '7%',
      left: '0',
      top: '0'
    }
    var containerStyle = {
      height: '100%',
      width: '100%',
      position: 'relative'
    }

    var textStyle = {
      zIndex: '100',
      position: 'absolute',
      color: 'white',
      fontSize: '90px',
      fontWeight: 'bold',
      left: '190px',
      textShadow: '1px 1px rgba(0,0,0,0.6)',
      top: '220px'
    }
    return (
      <div>
      <div style={containerStyle} idName="container">
        <img style={imageStyle} idName="image" src={"/src/style/images/fridaycover.jpg"} />
        <p style={textStyle} idName="text">Lets plan together.</p>
      </div>
      </div>
    );
  }
}

export default Coverimage;
