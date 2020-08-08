import React from 'react'
import './FooterLink.scss';
const FooterLink = ({ title, links = []}) => {
    return (
        <div className="FooterLink">
            <h4>{title}</h4>
            {
                links.map((link, index) => {
                    return <a href="#no-action" key={index}> {link} </a>
                })
            }
        </div>
    )
}

export default FooterLink
