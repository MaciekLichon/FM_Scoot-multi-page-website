import './AnimatedSvgCircles.scss';
import React, {useRef, useEffect, useState} from 'react';

import Circles from "../../../assets/patterns/white-circles.svg?react";

const AnimatedSvgCircles: React.FC = () => {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, { rootMargin: '-100px' });

        if (ref.current) {
            observer.observe(ref.current);
        }
    }, []);

    return (
        <div ref={ref} className={`animatedCircles ${isVisible ? 'animatedCircles__visible' : ''}`}>
            <Circles />
        </div>
    );
};

export default AnimatedSvgCircles;