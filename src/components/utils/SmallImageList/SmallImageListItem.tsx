import './SmallImageListItem.scss';

import React from 'react';

import { ISmallImageListItem } from '../../../data/data';

const SmallImageListItem: React.FC<ISmallImageListItem> = ({ index, image, title, text }) => {
    return (
        <div className="smallListItem">
            <div className="smallListItem__graphics">
                <img src={image} alt="image" className="smallListItem__graphics-image" />
                <h4 className="smallListItem__graphics-index">{index}</h4>
            </div>
            <h4 className="smallListItem__title">{title}</h4>
            <p className="smallListItem__text">{text}</p>
        </div>
    );
};

export default SmallImageListItem;