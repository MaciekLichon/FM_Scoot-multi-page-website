import Button from '../../utils/Button/Button';
import Container from '../../utils/Container/Container';
import './HeroHome.scss';
import arrowLeft from '../../../assets/patterns/right-arrow.svg';
import line from '../../../assets/patterns/line.svg';
import circles from '../../../assets/patterns/white-circles.svg';

import React from 'react';

const HeroHome: React.FC = () => {
    return (
        <section className="heroHome">
            <Container type="narrow">
                <div className="heroHome__content">
                    <h1 className="heroHome__title">Scooter sharing made simple</h1>
                    <div className="heroHome__content-part">
                        <p className="heroHome__text">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                        <Button to="" text="Get Scootin"/>
                    </div>
                    <img src={arrowLeft} alt="arrow" className="heroHome__arrow arrow" />
                    <img src={line} alt="line" className="heroHome__line line" />
                    <img src={circles} alt="circles" className="heroHome__circles" />
                </div>
            </Container>
        </section>
    );
};

export default HeroHome;