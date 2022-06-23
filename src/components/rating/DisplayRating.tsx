import React from 'react'

const DisplayRating: React.FunctionComponent<{ rating: number; }> = ({ rating }) => {
  return (
    <span className='star-rating'>
      <span className={rating > 0 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={rating > 1 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={rating > 2 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={rating > 3 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={rating > 4 ? "fa fa-star checked" : "fa fa-star"}></span>
    </span>
  )
}

export default DisplayRating