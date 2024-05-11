import React from 'react'

function ReviewItems({review, score}) {
  return (
    <div className='card'>
        <div className='num-display'>{score}</div>
        <div>{review}</div>
    </div>
  )
}

export default ReviewItems