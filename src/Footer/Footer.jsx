import React from 'react'
import './Footer.scss';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterLink from './FooterLink/FooterLink';
function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FooterLogo />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <FooterLink title="Booking" links={['Start Booking', 'Use Payment']}/>
                            </div>
                            <div className="col-md-4">
                                <FooterLink title="Explore Us" links={['About', 'Pravicy & Policy', 'Terms & Conditions']}/>
                            </div>
                            <div className="col-md-4">
                                <FooterLink title="Getting Touch" links={['Start Booking', 'Use Payment']}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
