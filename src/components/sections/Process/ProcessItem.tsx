import './ProcessItem.scss';
import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


import { IProcessItem } from '../../../data/data';

const ProcessItem: React.FC<IProcessItem> = ({ Icon, title, text }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div 
            className="processItem"
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className="processItem__icon">
                <Icon />
            </div>
            <div className="processItem__content">
                <h4 className="processItem__title">{title}</h4>
                <p className="processItem__text">{text}</p>
            </div>
        </motion.div>
    );
};

export default ProcessItem;