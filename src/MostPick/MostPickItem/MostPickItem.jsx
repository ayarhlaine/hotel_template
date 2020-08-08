import React from 'react'
import './MostPickItem.scss';
const MostPickItem = ({ mainItem }) => {
    return (
        <div className="MostPickItem">
            <div className={`MostPickItem__Container ${mainItem ? 'MainItem': 'OtherItem'}`} style={{
                // backgroundImage: `url(${(item.imageLinks && item.imageLinks.smallThumbnail) || "/images/book.jpg"})`
                backgroundImage: `url("/images/house1.jpg")`,
            }}>
                <div className="MoctPickItem__Overlay">
                    <div className="Top__Section">

                    </div>
                    <div className="Bottom__Section">
                        <h4 className="MostPickItem__Name">Sedona</h4>
                        <p className="MostPickItem__Location">Yangon in Myanmar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPickItem
