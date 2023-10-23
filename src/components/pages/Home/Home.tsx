import React from 'react';

import TransitionedPage from '../../animated/TransitionedPage/TransitionedPage';

import HeroHome from '../../sections/HeroHome/HeroHome';
import Process from '../../sections/Process/Process';
import BigImageList from '../../utils/BigImageList/BigImageList';

import { bigListHomeData } from '../../../data/data';

const Home: React.FC = () => {
    return (
        <TransitionedPage>
            <HeroHome />
            <Process />
            <BigImageList data={bigListHomeData} />
        </TransitionedPage>
    );
};

export default Home;