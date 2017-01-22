const React = require('react')
const MovieReviews = require('./MovieReviews')
const fetch = require('node-fetch')

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.update()
  }

  handleChange() {
    this.setState({ searchTerm: e.target.value })
  }

  update() {
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + this.state.term
    
    fetch(url)
      .then(reviews => this.setState({reviews}))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <input value={this.state.searchTerm} onChange={this.handleChange} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer