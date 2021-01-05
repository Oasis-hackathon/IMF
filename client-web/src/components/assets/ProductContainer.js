import React from 'react';
import { Link } from 'react-router-dom';

const ProductContainer = ({data}) => {
   return (
       <div className="product-container">
         <div className="product-img-container">
            <Link to={`/product_detail/${data.id}`}><div className="product-img-text no-drag link">자세히</div></Link>
            <img className="product-img" src={window.location.origin + "/uploadImages/" + data.imagePath} alt="product img"/>
         </div>
         <div className="product-description">
            <div className="product-title">{data.title}</div>
            <div className="product-cost">{data.price.toLocaleString()} 원</div>
            <div className="product-category">{data.category} <img src=""/></div> 
         </div>
      </div>
   )
}

export default ProductContainer;