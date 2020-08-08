import React from 'react'
import './FooterLogo.scss';
function FooterLogo() {
    return (
        <div className="FooterLogo">
            <img src={process.env.PUBLIC_URL+"/images/logo.png"} alt=""/>
            <p>We will make you wonderful holiday instantly and remembarable</p>
        </div>
    )
}

export default FooterLogo
