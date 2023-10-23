import './SmallImageList.scss';
import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import Container from '../Container/Container';
import SmallImageListItem from './SmallImageListItem';
import { ISmallImageListItem } from '../../../data/data';

type IProps = {
    title: string
    data: ISmallImageListItem[]
}

const SmallImageList: React.FC<IProps> = ({ title, data }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px 0px -30px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);


    return (
        <section className="smallImageList">
            <Container type="narrow">
                <motion.h2 
                    className="smallImageList__title"
                    ref={ref}
                    variants={{
                        hidden: { scale: 0.6, y: 100 },
                        visible: { scale: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>
                <div className="smallImageList__list">
                    {data.map(item => (
                        <SmallImageListItem key={item.index} {...item}/>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SmallImageList;