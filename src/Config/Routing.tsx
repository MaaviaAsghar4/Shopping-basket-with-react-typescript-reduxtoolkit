import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cart from '../Container/Cart'
import Home from '../Container/Home'
import Product from '../Container/Product'
import ProductItem from '../Container/ProductItem'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product/:id' element={<ProductItem />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default Routing
