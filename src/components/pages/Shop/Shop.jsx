import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductContext'
import FeaturedProduct from '../../shared/Featured';
import Layout from '../../shared/Layout'

function Shop() {
    const {products}= useContext(ProductsContext);
    const allProducts = products.map(product =>(
        <FeaturedProduct {...products} key ={product.id}/>
    ))
    return (
        <div className="product-list-container">
            <h2 className="product-list-title">Shop</h2>
            <div className="product-list">
            {
                allProducts
            }
            </div>
           
        </div>
    )
}

export default Shop
