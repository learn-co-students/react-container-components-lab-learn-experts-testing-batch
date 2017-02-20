const React = require('react');

const MovieReviews = (props)=>{
  return(
    <ul className="review-list">
      {props.reviews.map((review, index) =>{
        return(
          <li className="review" key={index}>
            <a href={review.link.url}>{review.display_title}</a>
          </li>
        )
      })
    }
    </ul>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}
module.exports = MovieReviews
