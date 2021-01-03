import React from 'react';

const SmallImage = (props) => {

    const onClick = () => {
        return props.onImageClick(props.info.id);
    }

    return (
        <div className="image-wrapper">
            <img id={"image"+props.info.id} onClick={onClick} src={window.location.origin + props.info.src} />
        </div>
    )
}

export default SmallImage;