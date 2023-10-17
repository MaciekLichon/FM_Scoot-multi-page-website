import React from 'react';

import HeroSection from '../../sections/HeroSection/HeroSection';
import BigImageList from '../../utils/BigImageList/BigImageList';
import SmallImageList from '../../utils/SmallImageList/SmallImageList';
import { bigListCareersData, smallListData } from '../../../data/data';
import Jobs from '../../sections/Jobs/Jobs';

const Careers: React.FC = () => {
    return (
        <>
            <HeroSection title="careers" />
            <BigImageList data={bigListCareersData} />
            <SmallImageList title='Why join us?' data={smallListData} />
            <Jobs />
        </>
    );
};

export default Careers;