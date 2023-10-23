import './BigImageListItem.scss';

import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { IBigImageListItem } from '../../../data/data';
import Button from '../Button/Button';
import AnimatedSvgArrow from '../../animated/AnimatedSvgArrow/AnimatedSvgArrow';

const BigImageListItem: React.FC<IBigImageListItem> = ({ image, title, text, Arrow, arrowLocation, buttonText }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px -50px 0px" });
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
                staggerChildren: 1
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0 },
        visible: { 
            scale: 1,
            transition: {
                duration: 0.7
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.div 
            className="bigListItem"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="bigListItem__imageContainer" variants={imageVariants}>
                <img src={image} alt="image" className="bigListItem__image" />
                <div className={`bigListItem__arrow arrow ${arrowLocation}`}>
                    <AnimatedSvgArrow svgComponent={<Arrow/>} />
                </div>
            </motion.div>
            <motion.div className="bigListItem__content" variants={textVariants}>
                <h2 className="bigListItem__title">{title}</h2>
                <p className="bigListItem__text">{text}</p>
                {buttonText && <Button to="" text={buttonText}/>}
            </motion.div>
        </motion.div>
    );
};

export default BigImageListItem;