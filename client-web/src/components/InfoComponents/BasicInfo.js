import React, {useState} from 'react';
import InfoRow from './InfoRow';
import EditInfo from './EditInfo';


const BasicInfo = (props) => {
    const [editMode, setEditMode] = useState('off');
    const field_name = {userName: "이름", nickname: "닉네임", reliability: "신뢰도"}
    const editable = ["nickname"];
    const title = "기본 정보"
    const small_title = "";
    const onClickEditButton = () => {
        setEditMode('on');
    }
    
    const showInfo = ({userName, nickname, reliability}) => {
        return (
            <div className="info-container">
                <div className="horizontal-space-between small-title-container">
                    <div className="small-title">{title}</div>
                    <div className="purple-button edit-button read-mode" onClick={onClickEditButton}>수정하기</div>
                </div>
                <InfoRow field={field_name["userName"]} value={userName} />
                <InfoRow field={field_name["nickname"]} value={nickname} />
                <InfoRow field={field_name["reliability"]} value={reliability} />
            </div>
        )
    }

    const showEdit = () => {
        return (
            <EditInfo 
                title={title}
                small_title={small_title}
                saveCallback={() => {setEditMode('off')}}
                content={props}
                field_name={field_name}
                editable={editable}
            />
        );
    }
    
    if (editMode === 'off')
        return showInfo(props, field_name);
    else
        return showEdit();

}

export default BasicInfo;