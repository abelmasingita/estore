import React from 'react'
import RatingProps from '../interfaces/Rating'

const Rating: React.FC<RatingProps> = ({ numReviews, rating, color }) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <span>
        <i
          style={{
            color: color,
          }}
          className='fas fa-star fa-2xs'
        ></i>
      </span>
      <p
        style={{
          marginLeft: '4px',
        }}
      >
        {rating}
      </p>
    </div>
  )
}

export default Rating
