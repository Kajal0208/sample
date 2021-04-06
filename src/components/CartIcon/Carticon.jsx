import React from 'react'
import shoppingBag  from '../../assets/istockphoto-1206806317-612x612.jpg'
import './cartIcon.scss';
function Carticon() {
    return (
        <div className='cart-container'>
            <img src={shoppingBag} alt='cart-icon' />
            <span className='cart-count'>
                5
            </span>
        </div>
    )
}

export default Carticon
