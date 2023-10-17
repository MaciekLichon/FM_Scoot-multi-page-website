import Container from '../../utils/Container/Container';
import './Jobs.scss';

import React from 'react';

import JobsItem from './JobsItem';
import { jobs } from '../../../data/data';

const Jobs: React.FC = () => {
    return (
        <section className="jobs">
            <Container type="wide">
                <div className="jobs__list">
                    {jobs.map((item, index) => (
                        <JobsItem key={index} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Jobs;