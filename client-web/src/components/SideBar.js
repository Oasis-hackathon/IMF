import React from 'react';
import history from "../history";


const SideBar = () => {
    return (
        <div className="side-bar no-drag">
            <ul className="side-buttons link">
                <img onClick={() => history.push('/')} src={window.location.origin + "/images/lion.png"} alt="사자아이콘" />
                <li onClick={() => history.push('/')}>내정보 </li>
                <li onClick={() => history.push('/')}>장바구니 </li>
                <li onClick={() => history.push('/')}>찜목록 </li>
                <li onClick={() => history.push('/')}>주문보기 </li>
                <li onClick={() => history.push('/')}>상품관리 </li>
                <li onClick={() => history.push('/')}>고객센터</li>
                <li onClick={() => window.scrollTo(0, 0)}>↑ TOP</li>
            </ul>
        </div>
    )
}

export default SideBar;