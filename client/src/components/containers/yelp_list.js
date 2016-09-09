import React, { Component } from 'react';
import { connect } from 'react-redux';

class YelpList extends Component {
  renderYelp(data){
    return(
      <tr>
      <td>{data.businesses.map(place => place.name)}</td>
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
