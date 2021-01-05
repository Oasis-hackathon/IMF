import React, {useState} from 'react';
import Option from './Option';

const Options = () => {
    const [count, setCount] = useState(1);

    const onButtonClick = e => {
        e.preventDefault();
        setCount(count + 1);
    }

    const renderFieldList = () => {
        const field_list = [];
        for (let i = 0; i < count; i++) {
            field_list.push(<Option optionCount={i + 1} />);
        }
        return (
            <div>{field_list}</div>
        )
    }

    return (
        <div className="horizontal option-container">
            <label className="post-label">제품옵션</label>
            <div className="input-container">
                <div className="field-container">
                {renderFieldList()}
                </div>
                <button className="option-plus-button" onClick={onButtonClick}>+</button>
            </div>
        </div>
    )
}

export default Options;