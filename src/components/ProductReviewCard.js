import React from 'react'
import '../styles/ProductReviewCard.css'
const ProductReviewCard = ({price,name,review,image,index}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`image${index}`} />
     <h5>{review}</h5>
    <span>{name}</span>
     <b>{price}</b>

    </div>
  )
}

export default ProductReviewCard
