import React from 'react'
import './RightPanel.scss';
function RightPanel() {
    return (
        <div className="RightPanel">
            <div className="Pannel__Wrapper">
                <div className="layer1">
                </div>
                <div className="layer2">
                    <img src={process.env.PUBLIC_URL+"/images/house2.jpg"} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default RightPanel
