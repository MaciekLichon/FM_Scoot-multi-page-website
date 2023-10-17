import './SignUp.scss';

import React from 'react';

import appStore from '../../../assets/icons/app-store.svg';
import googlePlay from '../../../assets/icons/google-play.svg';
import Container from '../../utils/Container/Container';

const SignUp: React.FC = () => {
    return (
        <section className="signUp">
            <Container type="wide">
                <div className="signUp__content">
                    <h2 className="signUp__title">Sign up and Scoot off today</h2>
                    <div className="signUp__icons">
                        <img src={appStore} alt="app store icon" className="signUp__icons-item" />
                        <img src={googlePlay} alt="google play icon" className="signUp__icons-item" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SignUp;