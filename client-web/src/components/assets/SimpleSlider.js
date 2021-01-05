import React, {useState} from 'react';
import SmallImage from './SmallImage';

const images = {
    0: {id: 0, src: "/images/detail1.png"},
    1: {id: 1, src: "/images/detail2.png"},
    2: {id: 2, src: "/images/detail3.png"},
    3: {id: 3, src: "/images/detail4.png"}
}

const SimpleSlider = ({thumbnail}) => {
    const [current, setCurrent] = useState(0);
    const images = {
        0: {id: 0, src: "/uploadImages/" + thumbnail},
        1: {id: 1, src: "/images/detail2.png"},
        2: {id: 2, src: "/images/detail3.png"},
        3: {id: 3, src: "/images/detail4.png"}
    }

    const changeFocus = (currentId) => {
        setCurrent(currentId);
        document.querySelectorAll('.image-wrapper img').forEach(e => e.style.border = "none");
        document.querySelector(`#image${currentId}`).style.border = "1px solid #7735ff";
    }

    const moveLeft = () => {
        if (current === 0)
            changeFocus(Object.keys(images).length - 1);
        else
            changeFocus(current - 1);
    }
    
    const moveRight = () => {
        if (current === Object.keys(images).length - 1)
            changeFocus(0);
        else
            changeFocus(current + 1);
    }

    const renderBigImage = () => {
        return (
            <img className="simple-slider-image" src={window.location.origin + images[current].src} alt={images[current].src} />
        )
    }

    const renderSmallImages = () => {
        const images_arr = Object.values(images);
        return (
            images_arr.map(e => {
                return (
                    <SmallImage onImageClick={changeFocus} info={e} key={e.id} />
                )
            })
        )
    }
        
    return (
        <div className="horizontal">
            <div className="arrow" onClick={moveLeft}>&#x2039;</div>
            <div className="imgs-preview">
                {renderBigImage()}
                <div className="simple-slider-small-image">
                    {renderSmallImages()}
                </div>
            </div>
            <div className="arrow" onClick={moveRight}>&#x203A;</div>
        </div>
    )
}

export default SimpleSlider;