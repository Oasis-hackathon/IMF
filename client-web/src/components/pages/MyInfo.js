import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../assets/LoginButton';

class MyInfo extends React.Component {
    
    renderRow(key, value) {
        const field_name = {
            userName: "이름",
            univId: "대학교",
            majorName: "학과",
            phone: "핸드폰",
            address: "배송지",
            bank: "입금은행",
            bankAccount: "입금계좌"
        }

        if (field_name[key]) {
            console.log(key, field_name[key], value)
            return (
                <div className="table-row">
                    <div className="table-cell field"><div>{field_name[key]}</div></div>
                    <div className="table-cell data"><div>{value}</div></div>
                </div>
            )
        }
    }

    renderInfo() {
        if (this.props.userInfo) {
            const keys = Object.keys(this.props.userInfo);
            return (
                keys.map(k => {
                    console.log(this.props.userInfo[k]);
                    return (this.renderRow(k, this.props.userInfo[k]));
                })
            )
        }
            
    }

    render() {
        if (!this.props.isSignedIn) {
            return (
                <LoginButton />
            )
        }
        else {
            return (
                <div>
                    <div className="page-title">
                        내 정보
                    </div>
                    <div className="table-container">
                        <div className="table">
                            {this.renderInfo()}
                        </div>
                    </div>
                    <div className="horizontal-center">
                        <div className="purple-button edit-button">수정하기</div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.user.isSignedIn,
        userInfo: state.user
    };
}

export default connect(mapStateToProps)(MyInfo);