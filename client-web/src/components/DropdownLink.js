import React from 'react';
import { Link } from 'react-router-dom';

const DropdownLink = ({link, title}) => {
    return (
        <div>
            <Link className="link" to={link} alt={title}>
                <span>{title}</span>
            </Link>
        </div>
    )
}

export default DropdownLink;