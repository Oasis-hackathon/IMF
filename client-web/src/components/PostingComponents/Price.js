import React from 'react';
import {Field} from 'redux-form';

const Price = () => {
    return (
        <div className="input-container">
            <label className="post-label">가격</label>
            <div className="field-container">
                <div className="input-field-container">
                    <Field className="input-field" component="input" name="price" placeholder="가격을 입력하세요" />
                </div>
            </div>
        </div>
    )
}

export default Price;