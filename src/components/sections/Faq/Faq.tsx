import './Faq.scss';
import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { faqData } from '../../../data/data';
import FaqGroup from './FaqGroup';
import Container from '../../utils/Container/Container';

const Faq: React.FC = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px 0px -30px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <section className="faq">
            <Container type="wide">
                <motion.h2 
                    className="faq__title"
                    ref={ref}
                    variants={{
                        hidden: { scale: 0.6, y: 100 },
                        visible: { scale: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >
                    FAQs
                </motion.h2>
                {faqData.map(group => (
                    <FaqGroup key={group.title} {...group} />
                ))}
            </Container>
        </section>
    );
};

export default Faq;