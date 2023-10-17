import React from 'react';

import HeroHome from '../../sections/HeroHome/HeroHome';
import Process from '../../sections/Process/Process';
import BigImageList from '../../utils/BigImageList/BigImageList';

import { bigListHomeData } from '../../../data/data';

const Home: React.FC = () => {
    return (
        <>
            <HeroHome />
            <Process />
            <BigImageList data={bigListHomeData} />
        </>
    );
};

export default Home;