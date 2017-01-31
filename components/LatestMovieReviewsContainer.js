const React = require('react');
const MovieReviews = require('./MovieReviews');
import fetch from 'isomorphic-fetch'

class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
    this.fetchReviews = this.fetchReviews.bind(this)
  }

  fetchReviews(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=4f70f3e7397b4c5891599c43b3032039').then(result =>{
      return result.json()
    }).then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  componentWillMount(){
    this.fetchReviews()
  }

  render(){
    const { reviews } = this.state;
    return(
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;
