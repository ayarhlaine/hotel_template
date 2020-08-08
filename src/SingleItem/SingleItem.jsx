import React from 'react'
import './SingleItem.scss';
function SingleItem() {
    return (
        <div className={'SingleItem col-md-3'}>
            <div className="SingleItem__Image__Container">
                <img src={process.env.PUBLIC_URL+"/images/house1.jpg"} alt="House" className="w-100"/>
            </div>
            <div className="SingleItem__Bottom__Container">
                <h4 className="SingleItem__Name">Sedona</h4>
                <p className="SingleItem__Location">Yangon in Myanmar</p>
            </div>
        </div>
    )
}

export default SingleItem
