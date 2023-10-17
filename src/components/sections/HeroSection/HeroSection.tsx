import './HeroSection.scss';
import React from 'react';

import Container from '../../utils/Container/Container';
import circles from '../../../assets/patterns/white-circles.svg';

type IProps = {
    title: string
}

const HeroSection: React.FC<IProps> = ({ title }) => {
    return (
        <section className={`heroSection ${title}`}>
            <Container type="narrow">
                <div className="heroSection__content">
                    <h1 className="heroSection__title">{title}</h1>
                    <img src={circles} alt="circles" className="heroSection__circles" />
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;