import React from 'react';
import {Field} from 'redux-form';

const AccessValue = () => {
    return (
        <div className="input-container">
            <label className="post-label">공개범위</label>
            <div className="field-container">
                <label><Field name="accessValue" component="input" type="radio" value="us" /> 우리학교</label>
                <label><Field name="accessValue" component="input" type="radio" value="every"/> 모든학교</label>
            </div>
        </div>
    )
}

export default AccessValue;