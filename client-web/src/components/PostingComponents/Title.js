import React from 'react';
import {Field} from 'redux-form';

const Title = () => {
    return (
        <div className="title-input-field">
            <Field component="input" name="title" placeholder=" 제목" />
        </div>
    )
}

export default Title;