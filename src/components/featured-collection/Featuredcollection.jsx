import React, { useContext } from 'react'
import FeaturedProduct from '../shared/Featured';
import {ProductsContext} from '../Context/ProductContext'



function Featuredcollection() {

    const {products} =useContext(ProductsContext);
    const productItems = products.filter((product,i)=>i<4).map(product =>(
        <FeaturedProduct {...product} key={product.id}/>
    ))
    return (
        <div className='featured-collection container'>
            <h2 className='featured-section-title'>Featured Collection</h2>
            <div className='products'>
                {
                    productItems
                }
            </div>
        </div>
    )
}

export default Featuredcollection
