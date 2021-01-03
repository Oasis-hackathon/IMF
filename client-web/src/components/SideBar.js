import React from 'react';

const SideBar = () => {
    return (
        <div className="side-bar no-drag">
            <ul className="side-buttons">
                <img src={window.location.origin + "/images/사자.png"} alt="사자아이콘" />
                <li><a href="1">내정보</a></li>
                <li><a href="#">장바구니</a></li>
                <li><a href="#">찜목록</a></li>
                <li><a href="#">주문보기</a></li>
                <li><a href="#">상품관리</a></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">↑ TOP</a></li>
            </ul>
        </div>
    )
}

export default SideBar;