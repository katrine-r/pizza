import React from 'react';

const Button = ({props, children}) => {
    return (
        <div className="button button--outline button--add" {...props}>
            { children }
        </div>
    )
}

export default Button