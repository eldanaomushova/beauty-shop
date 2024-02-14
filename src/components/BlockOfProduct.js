import React from 'react';
import { DataBox } from '../../src/data/DataBox';
import '../styles/BlockOfProduct.css'

const BlockOfProduct = () => {
    return (
        <div className='products-container'>
            {DataBox.map((record) => (
                <div className='box' key={record.id}>
                    <img src={require(`../images/boxes/${record.image}`)} alt={record.name} />
                </div>
            ))}
        </div>
    );
};

export default BlockOfProduct;
