import React from 'react';
import {Field} from 'redux-form';

const Category = () => {
    return (
        <div className="input-container">
            <label className="post-label" >카테고리</label>
            <div className="field-container">
                <label><Field name="category" component="input" type="radio" value="made" checked="true"/> 제작판매</label>
                <label><Field name="category" component="input" type="radio" value="gongu"/> 공동구매</label>
                <label><Field name="category" component="input" type="radio" value="graduation"/> 졸업작품</label>
                <label><Field name="category" component="input" type="radio" value="jungo"/> 중고제품</label>
            </div>
        </div>
    )
}

export default Category;