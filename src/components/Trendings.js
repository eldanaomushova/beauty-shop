import React from 'react'
import '../styles/Trendings.css'
import ProductList from './ProductList'

const Trendings = () => {
    return (
        <div className='trendings-container'>
            <h1 classname='header'>Trendings</h1>
            <ProductList />
        </div>
    )
}

export default Trendings
