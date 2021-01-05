import React from 'react';
import {Field} from 'redux-form';

const Stock = () => {
    return (
        <div className="input-container">
            <label className="post-label">재고</label>
            <div className="field-container">
                <div className="input-field-container">
                    <Field className="input-field" component="input" name="stock" placeholder="숫자를 입력하세요" />
                </div>
            </div>
        </div>
    )
}

export default Stock;