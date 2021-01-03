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
            {/* <div className="short-description">
                이 편지는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다.
            </div> */}
        </React.Fragment>
    )
}

export default ProductInfo;