import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReviews.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
     { productReviews.map((item,index)=>(
        <ProductReviewCard price={item.price} name={item.name} image={item.image} index={index} key={item.image} review={item.review}/>
     ))}
    </div>
  )
}

export default ProductReviews
