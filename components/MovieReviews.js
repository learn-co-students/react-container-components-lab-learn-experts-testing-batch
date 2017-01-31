const React = require('react');

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map(review => {
        return(
          <div className="review" key={review.display_title}>
            <h2>{review.display_title}</h2>
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
