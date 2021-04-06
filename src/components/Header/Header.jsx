
import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import Carticon from '../CartIcon/Carticon'

function Header() {
    return (
        <nav className='nav-menu container'>
                <div className='logo'>
                    <Link to="/">NOMAD</Link>
                </div>

                <ul>
                    <li>
                        <Link to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop">
                            SHOP
                        </Link>
                    </li>
                </ul>
                <Carticon />
        </nav>
    )
}

export default Header
