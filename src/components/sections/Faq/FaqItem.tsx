import './FaqItem.scss';
import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import Chevron from '../../../assets/icons/chevron.svg?react';

import { IFaqItem } from '../../../data/data';

const FaqItem: React.FC<IFaqItem> = ({ question, answer }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px -50px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div 
            className="faqItem"
            ref={ref}
            variants={{
                hidden: { opacity: 0, x: 300 },
                visible: { opacity: 1, x: 0}
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className="faqItem__header">
                <h5>{question}</h5>
                <Chevron className="faqItem__header-chevron" />
            </div>
            <div className="faqItem__answer">
                <div>
                    <p className="faqItem__answer-text">{answer}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default FaqItem;