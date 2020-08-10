import React from 'react'
import './SingleItem.scss';
const SingleItem = ( { name, location, image, popular = false }) => {
    const imageURL = process.env.PUBLIC_URL+"/images/"+image;
    return (
        <div className={'SingleItem col-md-3 animate__animated animate__zoomIn'}>
            <div className="SingleItem__Image__Container" style={{
                backgroundImage: `url(${imageURL})`,
            }}>
                {
                    popular && <div className="SingleItem__PopularChoice"> Popular Choice</div>
                }
            </div>
            <div className="SingleItem__Bottom__Container">
                <h4 className="SingleItem__Name">{name}</h4>
                <p className="SingleItem__Location">{location}</p>
            </div>
        </div>
    )
}

export default SingleItem
