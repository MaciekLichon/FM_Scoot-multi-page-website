import './Process.scss';

import React from 'react';
import Container from '../../utils/Container/Container';

import { processData } from '../../../data/data';
import ProcessItem from './ProcessItem';

const Process: React.FC = () => {
    return (
        <section className="process">
            <Container type="narrow">
                <div className="process__list">
                    {processData.map(item => (
                        <ProcessItem key={item.title} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Process;