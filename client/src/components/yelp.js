



yelpSearch(term){

}
yelp: [],
selectedYelp: null



  render(){
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
        </div>
    )
  }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term)
    }
}
