import React, {useState} from 'react';
import InfoRow from './InfoRow';
import EditInfo from './EditInfo';

const MoreInfo = (props) => {
    
    const [editMode, setEditMode] = useState('off');
    const field_name = {
        phone: "핸드폰",
        address: "배송지",
        bank: "입금은행",
        bankAccount: "입금계좌"
    }
    const editable = ["phone", "address", "bank", "bankAccount"];
    const title = "결제 및 배송 정보"
    const small_title = "상품거래를 위해 필요한 정보입니다";
    const onClickEditButton = () => {
        setEditMode('on');
    }

    const renderInfo = ({data}) => {
        const keys = Object.keys(field_name);
        return (
            keys.map(key => {
                return <InfoRow field={field_name[key]} value={data[key]} />
            })
        )
    }

    const showInfo = (props) => {
        return (
            <div className="info-container">
                <div className="horizontal-space-between small-title-container">
                    <div>
                        <div className="small-title">{title}</div>
                        <div>{small_title}</div>
                    </div>
                    <div className="purple-button edit-button read-mode" onClick={onClickEditButton}>수정하기</div>
                </div>
                {renderInfo(props)}
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

export default MoreInfo;