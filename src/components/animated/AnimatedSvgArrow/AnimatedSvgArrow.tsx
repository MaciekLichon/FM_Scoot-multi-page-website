import './AnimatedSvgArrow.scss';
import React, {useRef, useEffect, useState} from 'react';

type IProps = {
    svgComponent: React.ReactNode
}

const AnimatedSvgArrow: React.FC<IProps> = ({ svgComponent }) => {

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
        <div ref={ref} className={`animatedArrow ${isVisible ? 'animatedArrow__visible' : ''}`}>
            {svgComponent}
        </div>
    );
};

export default AnimatedSvgArrow;