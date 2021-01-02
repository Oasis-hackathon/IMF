import React from 'react';

const ProductCost = 30000;

const ProductCategory = "제작판매";
const ProductTitle = "수제 카드지갑";
const Product = "수제 카드지갑";

const LinkToProductPage = "";

const ProductContainer = ({src}) => {
   return (
       <div className="product-container">
         <div className="product-img-container">
            <div className="product-img-text no-drag">{ProductCost.toLocaleString()} 원</div>
            <img className="product-img" src={src} alt="product img"/>
         </div>
         <p>{ProductCategory}</p>
         <p>{ProductTitle}</p>
      </div>
   )
}

export default ProductContainer;