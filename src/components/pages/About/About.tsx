import React from 'react';

import HeroSection from '../../sections/HeroSection/HeroSection';
import BigImageList from '../../utils/BigImageList/BigImageList';
import SmallImageList from '../../utils/SmallImageList/SmallImageList';
import Faq from '../../sections/Faq/Faq';

import { bigListAboutData, smallListData } from '../../../data/data';

const About: React.FC = () => {
    return (
        <>
            <HeroSection title="about" />
            <BigImageList data={bigListAboutData} />
            <SmallImageList title='Our values' data={smallListData} />
            <Faq />
        </>
    );
};

export default About;