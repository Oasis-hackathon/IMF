import React from 'react';

const ProductInfo = () => {
    return (
        <React.Fragment>
            <div className="categorize">
                <span className="product-category">공동구매 ></span>
                <span> 해커톤대학교 ></span>
                <span> 해커톤학과</span>
            </div>
                <div>판매자: ssh9199</div>
                <div className="vertical-padding">
                <div className="title">해커톤학과 과잠 공구해요</div>
                <div className="price">30,000 원</div>
            </div>
        </React.Fragment>
    )
}

export default ProductInfo;