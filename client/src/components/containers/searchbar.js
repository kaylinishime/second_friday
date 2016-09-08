import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchYelp } from '../../actions/index';
import $ from 'jquery';

class SearchBar extends Component {

  constructor(props) {
      super(props)
      this.state = {
        term: '',
        location: ''
      };

      this.onInputTerm = this.onInputTerm.bind(this)
      this.onInputLocation = this.onInputLocation.bind(this)

      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputTerm(event) {
    this.setState({term: event.target.value})
    }
    onInputLocation(event) {
    this.setState({location: event.target.value})
    }

    onFormSubmit(event){
      event.preventDefault();
      this.props.fetchYelp(this.state.term, this.state.location);
      this.setState({ term: ''})
      this.setState({ location: ''})
    }

  render() {
    return (

    <form onSubmit={this.onFormSubmit} className="input-group">

        <input id="term" placeholder="keyword" className="form-control"
        value={this.state.term}
        onChange={this.onInputTerm}
        />

        <input id="location" placeholder="location" className="form-control"
        value={this.state.location}
        onChange={this.onInputLocation}
        />

        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
        Submit
        </button>
      </span>
    </form>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchYelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
