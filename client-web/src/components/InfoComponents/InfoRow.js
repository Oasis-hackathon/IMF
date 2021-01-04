import React from 'react';

const InfoRaw = ({field, value}) => {
    return (
        <div className="table-row">
           <div className="table-cell field"><div>{field}</div></div>
           <div className="table-cell data"><div>{value}</div></div>
        </div>
    )
}

export default InfoRaw;