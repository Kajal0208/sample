import React from 'react'
import './Hero.scss'
function Hero() {
    return (
       <section class="hero is-large is-info hero-image">
        <div class="hero-body">
            <div className="container">
                <h1 className="hero-title">
                    Bags reimagined for modern life
                </h1>
                <div className="shop-now-btn">
                    <button className="button is-black" id="shop-now">
                       SHOP NOW
                    </button>
                </div>
            </div>
         
        </div>
      </section>
    )
}

export default Hero
