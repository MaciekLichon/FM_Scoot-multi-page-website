import './Map.scss';

import Button from '../../utils/Button/Button';
import Container from '../../utils/Container/Container';
import mapImage from '../../../assets/images/world-map-desktop.png';

import React from 'react';

const Map: React.FC = () => {

    return (
        <section className="map">
            <Container type="wide">

                <div className="map__world">
                    <img src={mapImage} alt="" />
                    <div className="map__world-labels">
                        <h4 className="map__world-labels-item" data-location="new york">New York</h4>
                        <h4 className="map__world-labels-item" data-location="london">London</h4>
                        <h4 className="map__world-labels-item" data-location="jakarta">Jakarta</h4>
                        <h4 className="map__world-labels-item" data-location="yokohama">Yokohama</h4>
                    </div>
                </div>

                <div className="map__content">
                    <h2 className="map__title">Your City Not Listed?</h2>
                    <p className="map__text">If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                    <Button to="" text="Message Us" />
                </div>
            </Container>
        </section>
    );
};

export default Map;