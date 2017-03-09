const React = require('react');
const MovieReviews = require('./MovieReviews');
var fetch = require('node-fetch');

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      key: <get your own api key>
    }
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=' + this.state.key)
      .then(res => res.json())
      .then(rev => this.setState({reviews: rev }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;
