import './HeroSection.scss';
import React from 'react';

import Container from '../../utils/Container/Container';
import AnimatedSvgCircles from '../../animated/AnimatedSvgCircles/AnimatedSvgCircles';

type IProps = {
    title: string
}

const HeroSection: React.FC<IProps> = ({ title }) => {
    return (
        <section className={`heroSection ${title}`}>
            <Container type="narrow">
                <div className="heroSection__content">
                    <h1 className="heroSection__title">{title}</h1>
                    <div className="heroSection__circles">
                        <AnimatedSvgCircles />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;