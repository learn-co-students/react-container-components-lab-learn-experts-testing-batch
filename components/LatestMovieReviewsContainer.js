const React = require('react');
const MovieReviews = require('./MovieReviews')
var fetch = require('node-fetch');

class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      key: "?api-key=6446ca4f0ff84b7bb7d39ed16d4e5750"
    }
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.update();
  }

  update(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json" + this.state.key)
      .then(res => res.json())
      .then(rev => this.setState({reviews: rev}))
  }

  render(){
    return(
      <ul className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </ul>
    )
  }
}

module.exports = LatestMovieReviewsContainer;
