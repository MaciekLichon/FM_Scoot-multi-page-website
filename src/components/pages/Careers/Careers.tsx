import React from 'react';

import TransitionedPage from '../../animated/TransitionedPage/TransitionedPage';
import HeroSection from '../../sections/HeroSection/HeroSection';
import BigImageList from '../../utils/BigImageList/BigImageList';
import SmallImageList from '../../utils/SmallImageList/SmallImageList';
import { bigListCareersData, smallListData } from '../../../data/data';
import Jobs from '../../sections/Jobs/Jobs';

const Careers: React.FC = () => {
    return (
        <TransitionedPage>
            <HeroSection title="careers" />
            <BigImageList data={bigListCareersData} />
            <SmallImageList title='Why join us?' data={smallListData} />
            <Jobs />
        </TransitionedPage>
    );
};

export default Careers;