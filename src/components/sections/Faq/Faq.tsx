import './Faq.scss';
import React from 'react';

import { faqData } from '../../../data/data';
import FaqGroup from './FaqGroup';
import Container from '../../utils/Container/Container';

const Faq: React.FC = () => {
    return (
        <section className="faq">
            <Container type="wide">
                <h2 className="faq__title">FAQs</h2>
                {faqData.map(group => (
                    <FaqGroup key={group.title} {...group} />
                ))}
            </Container>
        </section>
    );
};

export default Faq;