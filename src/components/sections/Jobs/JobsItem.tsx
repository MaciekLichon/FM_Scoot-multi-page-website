import './JobsItem.scss';

import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { IJob } from '../../../data/data';
import Button from '../../utils/Button/Button';

const JobsItem: React.FC<IJob> = ({ title, location }) => {

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
            className="job"
            ref={ref}
            variants={{
                hidden: { opacity: 0, x: 400 },
                visible: { opacity: 1, x: 0}
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className="job__details">
                <h5 className="job__title">{title}</h5>
                <p className="job__location">{location}</p>
            </div>
            <Button to="" text="Apply"></Button>
        </motion.div>
    );
};

export default JobsItem;