const React = require('react');
const MovieReviews = require('./MovieReviews');

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: [],
      query: ""
    }
    this.fetchReviews = this.fetchReviews.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  fetchReviews(){
    const query = this.state.query
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=4f70f3e7397b4c5891599c43b3032039`).then(result =>{
      return result.json()
    }).then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }

  render(){
    const { reviews, searchTerm } = this.state;
    return(
      <div className="searchable-movie-reviews">
        <div>
          <h1>Search Movie Reviews</h1>
          <input type="text" value={this.state.query} onChange={this.handleChange}/>
          <button onClick={this.fetchReviews}>Search</button>
        </div>
        <div>
          <MovieReviews reviews={reviews} />
        </div>
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
