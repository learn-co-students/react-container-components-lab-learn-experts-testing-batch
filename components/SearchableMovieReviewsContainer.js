const React = require('react');
const fetch = require('node-fetch');
const MovieReviews = require('./MovieReviews')

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ term: e.target.value });
  }

  componentDidMount(){
    this.update();
  }

  update(){
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + this.state.term

    fetch(url)
      .then(res => res.json())
      .then(reviews => this.setState({reviews}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <input value={this.state.term} onChange={this.handleChange} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
