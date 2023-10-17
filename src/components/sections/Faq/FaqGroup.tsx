import './FaqGroup.scss';

import React from 'react';

import { IFaqDataSet } from '../../../data/data';
import FaqItem from './FaqItem';

const FaqGroup: React.FC<IFaqDataSet> = ({ title, items }) => {
    return (
        <div className="faqGroup">
            <h3 className="faqGroup__title">{title}</h3>
            <div className="faqGroup__list">
                {items.map(item => (
                    <FaqItem key={item.question} {...item} />
                ))}
            </div>
        </div>
    );
};

export default FaqGroup;