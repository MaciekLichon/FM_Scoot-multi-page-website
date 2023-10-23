import './MapText.scss';

import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import Button from '../../utils/Button/Button';

const MapText: React.FC = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px -50px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
            console.log('map text visible');
        }
    }, [isInView]);

    return (
        <motion.div 
            className="map__content"
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <h2 className="map__title">Your City Not Listed?</h2>
            <p className="map__text">If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
            <Button to="" text="Message Us" />
        </motion.div>
    );
};

export default MapText;