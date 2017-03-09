const React = require('react');

const MovieReviews = (props) => {
  const list = props.reviews.map((review, index) => {
       return <li className="review" key={index}>{review.display_title}</li>
     })
     return (
    <div className="review-list">
        {list}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
