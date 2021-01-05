import React from 'react';

const ProductInfo = ({info}) => {
    const category = {
        "made": "제작판매",
        "gongu": "공동구매",
        "graduation": "졸업작품",
        "jungo": "중고물품"
    }

    return (
        <React.Fragment>
            <div className="categorize">
                <span className="product-category">{category[info.category]} ></span>
                <span> 해커톤대학교 ></span>
                <span> 해커톤학과</span>
            </div>

            <div >판매자 : ssh9199</div>
            
            <div className="vertical-padding">
                <div className="title">{info.title}</div>
                <div className="price">{info.price} 원</div>
            </div>
        </React.Fragment>
    )
}

export default ProductInfo;