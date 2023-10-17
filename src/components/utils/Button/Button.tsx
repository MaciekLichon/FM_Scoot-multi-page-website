import { Link } from 'react-router-dom';
import './Button.scss';

import React from 'react';

type IProps = {
    to: string
    text: string
}

const Button: React.FC<IProps> = ({ to, text }) => {
    return (
        <Link to={to} className="ctaBtn">{text}</Link>
    );
};

export default Button;