import React, { useState, useEffect } from 'react'
import './RightPanel.scss';
const images = [
    'mostpick4.jpg',
    'hotel1.jpg',
    'mostpick5.jpg',
    'kitchen1.jpg',
];
function RightPanel() {
    const [ index, setIndex ] = useState(0);
    const changeIndex = () => {
        const updatedIndex = index + 1;
        const newIndex = updatedIndex < images.length ? updatedIndex : 0;
        setIndex(newIndex);
    };
    useEffect(() => {
        const timerID = setInterval(
            () => changeIndex(),
            process.env.SLIDER_TIMER || 5000
        );
        return () => {
            clearInterval(timerID);
        };
    });
    return (
        <div className="RightPanel">
            <div className="Pannel__Wrapper">
                <div className="layer1">
                </div>
                <div className="layer2 animate__animated animate__bounce">
                    <img src={process.env.PUBLIC_URL+"/images/"+images[index]}  alt="Slider"/>
                </div>
            </div>
        </div>
    )
}

export default RightPanel
