import './Container.scss';

import React from 'react';

type IProps = {
    type: 'wide' | 'narrow'
    children: React.ReactNode
}

const Container: React.FC<IProps> = (props) => {
    return (
        <div className={`container ${props.type}`}>
            {props.children}
        </div>
    );
};

export default Container;