import './NotFound.scss';
import React from 'react';

import TransitionedPage from '../../animated/TransitionedPage/TransitionedPage';

const NotFound: React.FC = () => {
    return (
        <TransitionedPage>
            <h2 className="notFound__title">Not Found</h2>
        </TransitionedPage>
    );
};

export default NotFound;