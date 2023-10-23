import './Map.scss';

import Container from '../../utils/Container/Container';
import MapText from './MapText';
import mapImage from '../../../assets/images/world-map-desktop.png';

import React, {useRef} from 'react';
import { motion } from 'framer-motion';

const Map: React.FC = () => {

    const ref = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <section className="map">
            <Container type="wide">

                <div className="map__world">
                    <img src={mapImage} alt="" />
                    <motion.div 
                        className="map__world-labels"
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h4 className="map__world-labels-item" data-location="new york" variants={itemVariants}>New York</motion.h4>
                        <motion.h4 className="map__world-labels-item" data-location="london" variants={itemVariants}>London</motion.h4>
                        <motion.h4 className="map__world-labels-item" data-location="jakarta" variants={itemVariants}>Jakarta</motion.h4>
                        <motion.h4 className="map__world-labels-item" data-location="yokohama" variants={itemVariants}>Yokohama</motion.h4>
                    </motion.div>
                </div>
                <MapText />
            </Container>
        </section>
    );
};

export default Map;