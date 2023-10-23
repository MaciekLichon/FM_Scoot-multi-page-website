import './SmallImageListItem.scss';

import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { ISmallImageListItem } from '../../../data/data';

const SmallImageListItem: React.FC<ISmallImageListItem> = ({ index, image, title, text }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px -200px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0 },
        visible: { 
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div 
            className="smallListItem"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="smallListItem__graphics" variants={imageVariants}>
                <img src={image} alt="image" className="smallListItem__graphics-image" />
                <h4 className="smallListItem__graphics-index">{index}</h4>
            </motion.div>
            <motion.h4 className="smallListItem__title" variants={textVariants}>{title}</motion.h4>
            <motion.p className="smallListItem__text" variants={textVariants}>{text}</motion.p>
        </motion.div>
    );
};

export default SmallImageListItem;