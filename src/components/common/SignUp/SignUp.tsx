import './SignUp.scss';

import React from 'react';

import AppStore from '../../../assets/icons/app-store.svg?react';
import GooglePlay from '../../../assets/icons/google-play.svg?react';
import Container from '../../utils/Container/Container';

const SignUp: React.FC = () => {
    return (
        <section className="signUp">
            <Container type="wide">
                <div className="signUp__content">
                    <h2 className="signUp__title">Sign up and Scoot off today</h2>
                    <div className="signUp__icons">
                        <AppStore className="signUp__icons-item" />
                        <GooglePlay className="signUp__icons-item" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SignUp;