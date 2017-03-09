const React = require('react');
var fetch = require('node-fetch');
const MovieReviews = require('./MovieReviews');

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      searchTerm: ''
    }
    this.searchReviews = this.searchReviews.bind(this);
  }
  componentDidMount() {
    this.searchReviews();
  }

  searchReviews() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.key + this.state.searchTerm)
      .then(res => res.json())
      .then(rev => this.setState({reviews: rev}))
  }

  handleChange(ev) {
    this.setState({searchTerm: ev.target.value});
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <input value={this.state.searchTerm} onChange={this.handleChange}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
