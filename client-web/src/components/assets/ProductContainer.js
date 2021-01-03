import React from 'react';

const category = "제작판매";
const title = "제목제목제목제목제목제목제목제목제목";
const cost = 30000;

const ProductContainer = ({src}) => {
   return (
       <div className="product-container">
         <div className="product-img-container">
            <div className="product-img-text no-drag">자세히</div>
            <img className="product-img" src={src} alt="product img"/>
         </div>
         <div className="product-description">
            <div className="product-title">{title}</div>
            <div className="product-cost">{cost.toLocaleString()} 원</div>
            <div className="product-category">{category} <img src=""/></div> 
         </div>
      </div>
   )
}

export default ProductContainer;