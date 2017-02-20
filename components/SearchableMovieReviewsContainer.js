const React = require('react')
const {Component} = require('react')
const fetch = require('node-fetch')

const api_key = 'b8df5b4b990e49118aeccd6b77ed3422'

const MovieReviews = require('./MovieReviews')
const nytSearchApi = (search) => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=${api_key}`

class SearchableMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      reviews: []
    }
    this.newSearch = this.newSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e){
    this.setState({searchTerm: e.target.value})

    if (e.target.value.length > 2){
      this.newSearch()
    }
  }

  newSearch(){
    fetch(nytSearchApi(this.state.searchTerm))
      .then(res => res.json()).then(json =>{
        this.setState({
          reviews: json.results
        })
      }
    )

  }
  render(){
    return (
      <div className="searchable-movie-reviews">
        <input value={this.state.searchTerm} onChange={this.handleChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer
