import Container from '../Container/Container';
import './BigImageList.scss';

import React from 'react';
import BigImageListItem from './BigImageListItem';
import { IBigImageListItem } from '../../../data/data';

type IProps = {
    data: IBigImageListItem[]
}

const BigImageList: React.FC<IProps> = ({data}) => {
    return (
        <section className="bigImageList">
            <Container type="narrow">
                <div className="bigImageList__list">
                    {data.map(item => (
                        <BigImageListItem key={item.title} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default BigImageList;