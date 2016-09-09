import React, { Component } from 'react';
import { connect } from 'react-redux';

class YelpList extends Component {
  renderYelp(data){
    const name = data.businesses.map(place => place.name)
    const rating = data.businesses.map(place => place.rating)
    return(
      <tr key={name}>
      <td>{name}</td>
      <td>{rating}</td>
      </tr>

    )
  }

  render(){
    return (
      <table className="yelpPlaces">
      <thead>
      <tr>
      <th>Place</th>
      </tr>
      </thead>
      <tbody>
      {this.props.yelp.map(this.renderYelp)}
      </tbody>
      </table>

    );
  }
}

function mapStateToProps(state){
  return { yelp: state.yelp };
}

export default connect(mapStateToProps)(YelpList);
