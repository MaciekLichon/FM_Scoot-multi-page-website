import './SmallImageList.scss';
import React from 'react';

import Container from '../Container/Container';
import SmallImageListItem from './SmallImageListItem';
import { ISmallImageListItem } from '../../../data/data';

type IProps = {
    title: string
    data: ISmallImageListItem[]
}

const SmallImageList: React.FC<IProps> = ({ title, data }) => {
    return (
        <section className="smallImageList">
            <Container type="narrow">
                <h2 className="smallImageList__title">{title}</h2>
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