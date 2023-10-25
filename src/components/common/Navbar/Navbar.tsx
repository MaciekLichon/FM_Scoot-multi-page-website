import Container from '../../utils/Container/Container';
import './Navbar.scss';
import Logo from '../../../assets/icons/logo-dark.svg?react';

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button/Button';

const Navbar: React.FC = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <Container type="wide">
                <div className="nav__content">
                    <button className={`nav__toggle ${open ? 'nav__toggle-open' : ''}`} onClick={() => setOpen(!open)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="nav__links">
                        <div>
                            <div>
                                <div className="nav__links-items">
                                    <Link to="/about" className="nav__links-item" onClick={() => setOpen(!open)}>About</Link>
                                    <Link to="/locations" className="nav__links-item" onClick={() => setOpen(!open)}>Locations</Link>
                                    <Link to="/careers" className="nav__links-item" onClick={() => setOpen(!open)}>Careers</Link>
                                </div>
                                <Button to="" text="Get Scootin" />
                            </div>
                        </div>
                    </div>
                    <Link to="" className="nav__logo">
                        <Logo />
                    </Link>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;