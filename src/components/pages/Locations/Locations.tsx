import React from 'react';

import HeroSection from '../../sections/HeroSection/HeroSection';
import Map from '../../sections/Map/Map';

const Locations: React.FC = () => {
    return (
        <>
            <HeroSection title="locations" />
            <Map />
        </>
    );
};

export default Locations;