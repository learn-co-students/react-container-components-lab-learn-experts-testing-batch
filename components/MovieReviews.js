const React = require('react');

const MovieReviews = function(props){
  const list = props.reviews.map((review, index) => {
    return <li className="review" key={index}><a href={review.link.url}>{review.display_title}</a></li>
  })
  return(
    <ul className="review-list">
      {list}
    </ul>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
