import React from 'react'
import './MostPickItem.scss';
const MostPickItem = ({ mainItem, image, name, location, price }) => {
    const imageURL = process.env.PUBLIC_URL+"/images/"+image;
    return (
        <div className="MostPickItem">
            <div className={`MostPickItem__Container ${mainItem ? 'MainItem': 'OtherItem'}`} style={{
                backgroundImage: `url(${imageURL})`,
            }}>
                <div className="MoctPickItem__Overlay">
                    <div className="Top__Section">
                        <div className="MoctPickItem__PopularChoice">$ {price} per night</div>
                    </div>
                    <div className="Bottom__Section">
                        <div>
                        <h4 className="MostPickItem__Name">{name}</h4>
                        <p className="MostPickItem__Location">{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPickItem
