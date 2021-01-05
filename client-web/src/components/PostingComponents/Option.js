import React from 'react';
import {Field} from 'redux-form';

const Option = ({optionCount}) => {
    return (
            <div className="input-field-container">
                <Field className="input-field" component="input" name={`option${optionCount}`} placeholder={`옵션${optionCount}을 입력하세요`} />
            </div>
    )
}

export default Option;