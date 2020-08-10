import React from 'react'
import './MostPickItem.scss';
const MostPickItem = ({ mainItem }) => {
    const imageURL = process.env.PUBLIC_URL+"/images/house1.jpg";
    return (
        <div className="MostPickItem">
            <div className={`MostPickItem__Container ${mainItem ? 'MainItem': 'OtherItem'}`} style={{
                backgroundImage: `url(${imageURL})`,
            }}>
                <div className="MoctPickItem__Overlay">
                    <div className="Top__Section">
                        <div className="MoctPickItem__PopularChoice">$ 39.99 per night</div>
                    </div>
                    <div className="Bottom__Section">
                        <div>
                        <h4 className="MostPickItem__Name">Sedona</h4>
                        <p className="MostPickItem__Location">Yangon in Myanmar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPickItem
