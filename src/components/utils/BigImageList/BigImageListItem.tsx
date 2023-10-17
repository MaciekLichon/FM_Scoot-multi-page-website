import './BigImageListItem.scss';

import React from 'react';

import { IBigImageListItem } from '../../../data/data';
import Button from '../Button/Button';
import AnimatedSvgArrow from '../AnimatedSvgArrow/AnimatedSvgArrow';

const BigImageListItem: React.FC<IBigImageListItem> = ({ image, title, text, Arrow, arrowLocation, buttonText }) => {
    return (
        <div className="bigListItem">
            <div className="bigListItem__imageContainer">
                <img src={image} alt="image" className="bigListItem__image"/>
                <div className={`bigListItem__arrow arrow ${arrowLocation}`}>
                    <AnimatedSvgArrow svgComponent={<Arrow/>} />
                </div>
            </div>
            <div className="bigListItem__content">
                <h2 className="bigListItem__title">{title}</h2>
                <p className="bigListItem__text">{text}</p>
                {buttonText && <Button to="" text={buttonText}/>}
            </div>
        </div>
    );
};

export default BigImageListItem;