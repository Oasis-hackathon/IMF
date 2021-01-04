import React from 'react';
import InfoRow from './InfoRow';
import EditInfo from './EditInfo';
import {connect} from 'react-redux';
import {fetchUniv} from '../../actions';

const field_name = {univId: "대학교", majorName: "학과"}
const editable = ["univId", "majorName"];
const title = "대학교 정보"
const small_title = "자신의 학교 게시판에서 상품을 올리거나 사려면 대학교 정보 입력이 필요합니다";

class UnivInfo extends React.Component {
    state = {editMode: 'off'};
    
    componentDidMount() {
        if (this.props)
            this.props.fetchUniv(this.props.univId);
    }

    onClickEditButton = () => {
        this.setState({editMode: 'on'});
    }

    showInfo ({univId, majorName}) {
        let univName = "";
        if (this.props)
            univName = this.props.univ;
        return (
            <div className="info-container">
                <div className="horizontal-space-between small-title-container">
                    <div>
                        <div className="small-title">{title}</div>
                        <div>{small_title}</div>
                    </div>
                    <div className="purple-button edit-button read-mode" onClick={this.onClickEditButton}>수정하기</div>
                </div>
                <InfoRow field={field_name["univId"]} value={univName} />
                <InfoRow field={field_name["majorName"]} value={majorName} />
            </div>
        )
    }

    showEdit() {
        return (
            <EditInfo 
                type={"univ"}
                title={title}
                small_title={small_title}
                saveCallback={() => {this.setState({editMode: 'off'})}}
                content={this.props}
                field_name={field_name}
                editable={editable}
            />
        );
    }

    render() {
        if (this.state.editMode === 'off')
            return this.showInfo(this.props, field_name);
        else
            return this.showEdit();
    }
    
}

const mapStateToProps = (state) => {
    return {
        univ: state.univ.userUnivName
    };
}

export default connect(mapStateToProps, {fetchUniv})(UnivInfo);