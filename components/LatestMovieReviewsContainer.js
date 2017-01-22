const React = require('react')
const MovieReviews = require('./MovieReviews')
var fetch = require('node-fetch');

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      key: "a3fc0cbfbe1e475ab7cca59a6957e3b3"
    }
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    this.update()
  }

  update(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json" + this.state.key)
      .then(res => this.setState({reviews: rev}))
  }

  render() {
    return(
      <ul className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </ul>
    )
  }
}

module.exports = LatestMovieReviewsContainer