import React from 'react';
import {withRouter} from 'react-router-dom';
import studioBag from '../../assets/studiobag.png.jpg';
import './MainSection.scss'



const MainSection=({history})=> {
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="image">
                    <img  src={studioBag} alt="studioBag"/>
                </div>
                <div className="description">
                    <h2>Designed for fashion.Crafted for sport</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="button is-black" id="#shop-now" onClick={()=> history.push('/product')}>
                        STUDIO BAG
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection)
