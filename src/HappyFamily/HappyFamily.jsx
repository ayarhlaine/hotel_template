import React from 'react';
import './HappyFamily.scss';
import Star from './Star/Star';

function HappyFamily() {
    return (
        <div className="HappyFamily">
            <div className="row">
                <div className="col-md-4">
                    <div className="Pannel__Wrapper">
                        <div className="layer1">
                            <img src={process.env.PUBLIC_URL+"/images/family.jpg"} alt=""/>
                        </div>
                        <div className="layer2">
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3>Happy Family</h3>
                    <div>
                    <Star color="yellow"/>
                    <Star color="yellow"/>
                    <Star color="yellow"/>
                    <Star color="yellow"/>
                    <Star color="yellow"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur omnis quam quis, laborum libero magni animi perspiciatis laboriosam repellendus voluptate impedit quas vitae? Expedita libero facere mollitia veritatis adipisci.</p>
                    <button className="btn btn-primary">Read the story</button>
                </div>
            </div>
        </div>
    )
}

export default HappyFamily
