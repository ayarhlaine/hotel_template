import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import SectionTitle from '../SectionTitle/SectionTitle'
import './House.scss';
const houses = [
    {
        popular: true,
        name: 'Arggana',
        location: 'Yangon',
        image: 'house1.jpg',
    },
    {
        popular: false,
        name: 'Teddy Town',
        location: 'Yangon',
        image: 'house2.jpg',
    },
    {
        popular: false,
        name: 'Seattle Rain',
        location: 'Yangon',
        image: 'house3.jpg',
    },
    {
        popular: false,
        name: 'Wonderland',
        location: 'Yangon',
        image: 'house4.jpg',
    }
];
function House() {
    return (
        <div className={'House'}>
            <SectionTitle title="Houses with Beauty backyard" />
            <div className="row">
                {
                    houses.map((house,index) =>  <SingleItem key={index} name={house.name} location={house.location} image={house.image} popular={house.popular}/>)
                }
            </div>
        </div>
    )
}

export default House
