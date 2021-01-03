import React, {useState} from 'react';

const ProductButton = ({count}) => {
    const [wish, setWish] = useState(false);
    const [wish_count, setWishCount] = useState(count);
    const empty_heart_src = window.location.origin + "/images/buttons/heart-empty.png";
    const full_heart_src = window.location.origin + "/images/buttons/heart.png"

    const getHeartSrc = () => {
        if (wish === false)
            return empty_heart_src;
        else
            return full_heart_src;
    }

    const onWishClick = () => {
        if (wish === false) {
            setWish(true);
            setWishCount(wish_count + 1);
        }
        else {
            setWish(false);
            setWishCount(wish_count - 1);
        }
    }
    return (
        <div className="horizontal-space-between product-button-container">
            <div className="vertical-center">
                <span>{wish_count}</span>
                <img className="small-button" onClick={onWishClick} src={getHeartSrc()} alt="wish" />
            </div>
            <img className="small-button" src={window.location.origin + "/images/buttons/share.png"} alt="share" />
            <div className="purple-button">나도살래 | 17명</div>
        </div>
    )
}

export default ProductButton;