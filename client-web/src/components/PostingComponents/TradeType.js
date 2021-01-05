import React from 'react';
import {Field} from 'redux-form';

const TradeType = () => {
    return (
        <div className="input-container">
            <label className="post-label">거래방법</label>
            <div className="field-container">
                <label><Field name="tradeType" component="input" type="radio" value="deposit" /> 입금</  label>
                <label><Field name="tradeType" component="input" type="radio" value="direct"/> 직거래</label>
            </div>
        </div>
    )
}

export default TradeType;