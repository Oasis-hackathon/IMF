import React from 'react';
import { Link } from 'react-router-dom';

const ProductContainer = ({data}) => {
   const category = {
      "made": "제작판매",
      "gongu": "공동구매",
      "graduation": "졸업작품",
      "jungo": "중고물품"
   }
   if (data) {
      return (
         <div className="product-container">
           <div className="product-img-container">
              <Link to={`/product_detail/${data.id}`}><div className="product-img-text no-drag link">자세히</div></  Link>
              <img className="product-img" src={window.location.origin + "/uploadImages/" + data.imagePath}    alt="product img"/>
           </div>
           <div className="product-description">
              <div className="product-title">{data.title}</div>
              <div className="product-cost">{data.price.toLocaleString()} 원</div>
              <div className="product-category">{category[data.category]} <img src=""/></div> 
           </div>
        </div>
      )
   } else return null;
}

export default ProductContainer;