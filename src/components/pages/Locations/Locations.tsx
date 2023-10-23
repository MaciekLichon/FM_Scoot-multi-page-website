import React from 'react';

import TransitionedPage from '../../animated/TransitionedPage/TransitionedPage';
import HeroSection from '../../sections/HeroSection/HeroSection';
import Map from '../../sections/Map/Map';

const Locations: React.FC = () => {
    return (
        <TransitionedPage>
            <HeroSection title="locations" />
            <Map />
        </TransitionedPage>
    );
};

export default Locations;