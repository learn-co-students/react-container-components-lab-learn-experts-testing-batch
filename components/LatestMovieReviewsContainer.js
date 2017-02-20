const React = require('react');
const { Component } = require('react');
const MovieReviews = require('./MovieReviews')
const fetch = require('node-fetch')

const api_key = 'b8df5b4b990e49118aeccd6b77ed3422'
const nytLatestMovieReviewApi = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${api_key}`

class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: []
    }
    this.updateLatest = this.updateLatest.bind(this)
  }

  componentWillMount(){
    this.updateLatest()
  }

  updateLatest(){
    fetch(nytLatestMovieReviewApi).then(res => res.json())
      .then(json =>{
        this.setState({
          reviews: json.results
        })
      }
    )
  }
  render(){
    console.log(this.state.reviews)
    return(
      <ul className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </ul>
    )
  }
}

module.exports = LatestMovieReviewsContainer
