import React from 'react';
import { motion } from 'framer-motion';

type IProps = {
    children: React.ReactNode
}

const TransitionedPage: React.FC<IProps> = (props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4, ease: 'linear'}}
        >
            {props.children}
        </motion.div>
    );
};

export default TransitionedPage;