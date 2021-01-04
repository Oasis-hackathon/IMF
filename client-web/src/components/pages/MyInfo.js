import React from 'react';
import { connect } from 'react-redux';
import LoginButton from '../assets/LoginButton';
import BasicInfo from '../InfoComponents/BasicInfo';
import MoreInfo from '../InfoComponents/MoreInfo';
import UnivInfo from '../InfoComponents/UnivInfo';

class MyInfo extends React.Component {
    
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
                            <BasicInfo 
                                userName={this.props.userInfo.userName}
                                nickname={this.props.userInfo.nickname}
                                reliability={this.props.userInfo.reliability}    
                            />
                            <UnivInfo
                                univId={this.props.userInfo.univId}
                                majorName={this.props.userInfo.majorName}
                            />
                            <MoreInfo
                                data={this.props.userInfo}
                            />
                        </div>
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