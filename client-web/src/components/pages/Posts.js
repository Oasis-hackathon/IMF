import React from 'react';
import ProductContainer from "../assets/ProductContainer";
import DropdownLink from '../DropdownLink';

var univRange = "우리 학교"


export default function Slider() {


   return (

      <div className="posts">

         <div className="top">
            <div className="horizontal-space-between">
               <h1>{univRange}의 상품들</h1>
               <div className="select-category">
                  <select>
                     <option selected value="all">전체</option>
                     <option value="제작">제작판매</option>
                     <option value="공구">공동구매</option>
                     <option value="졸작">졸업작품</option>
                     <option value="중고">중고물품</option>
                  </select>
               </div>
            </div>
         </div>

         <div className="post-container">
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
            <ProductContainer src={window.location.origin + "/images/img1.png"} />
         </div>

      </div>

   );
}