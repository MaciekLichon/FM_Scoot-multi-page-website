import './FaqItem.scss';
import React from 'react';

import chevron from '../../../assets/icons/chevron.svg';

import { IFaqItem } from '../../../data/data';

const FaqItem: React.FC<IFaqItem> = ({ question, answer }) => {
    return (
        <div className="faqItem">
            <div className="faqItem__header">
                <h5>{question}</h5>
                <img src={chevron} alt="chevron icon" className="faqItem__header-chevron" />
            </div>
            <div className="faqItem__answer">
                <div>
                    <p className="faqItem__answer-text">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;