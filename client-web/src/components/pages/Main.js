import React from 'react';
import ProductSlider from '../assets/ProductSlider'
import MainSlider from '../assets/MainSlider'

const Main = () => {
    return (
        <div>
            <MainSlider />
            <div className="page-title"> 우리 대학교에서 인기 짱! </div>
            <ProductSlider />
            <div className="page-title"> 다른 학교 에서 인기 짱! </div>
            <ProductSlider />
        </div>
    )
}

export default Main;