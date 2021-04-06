import React from 'react'
import './footer.scss'
function Footer() {
    const year = new Date().getFullYear();
    return (
        
        <div className="footer">
            {year} @ NOMAD
        </div>
    )
}

export default Footer
