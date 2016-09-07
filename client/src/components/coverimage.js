
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';



class Coverimage extends Component {
  render(){
    return (

      <Carousel>
        <Carousel.Item>
          <img className="coverimage" width={'100%'} height={'50%'} alt="900x500" src={"/src/style/images/fridaycover.jpg"}/>
          <Carousel.Caption>
            <h3>Friday</h3>
            <p>Lets Plan together</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="coverimage" width={'100%'} height={'50%'} alt="900x500" src={"/src/style/images/sanfran.jpeg"}/>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="coverimage" width={'100%'} height={'50%'} alt="900x500" src={"/src/style/images/newyork.jpeg"}/>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>





    );
  }
}

export default Coverimage;
