import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import SectionTitle from '../SectionTitle/SectionTitle'
import "./Hotel.scss";
const hotels = [
    {
        popular: true,
        name: 'Lotte Hotel',
        location: 'Yangon',
        image: 'hotel1.jpg',
    },
    {
        popular: false,
        name: 'Chatrium Hotel Royal Lake',
        location: 'Yangon',
        image: 'hotel2.jpg',
    },
    {
        popular: false,
        name: 'Novotel Yangon Max',
        location: 'Yangon',
        image: 'hotel3.jpg',
    },
    {
        popular: false,
        name: 'Sule Shangri-La',
        location: 'Yangon',
        image: 'hotel4.jpg',
    }
];
function Hotel() {
    return (
        <div className={'Hotel'}>
            <SectionTitle title="Hotels with living room" />
            <div className="row">
                {
                    hotels.map((hotel,index) =>  <SingleItem key={index} name={hotel.name} location={hotel.location} image={hotel.image} popular={hotel.popular}/>)
                }
            </div>
        </div>
    )
}

export default Hotel
