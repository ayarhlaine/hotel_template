import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import SectionTitle from '../SectionTitle/SectionTitle'
const apartments = [
    {
        popular: true,
        name: 'Sunny Side',
        location: 'Yangon',
        image: 'kitchen1.jpg',
    },
    {
        popular: false,
        name: 'Sunny Side',
        location: 'Yangon',
        image: 'kitchen2.jpg',
    },
    {
        popular: false,
        name: 'Sunny Side',
        location: 'Yangon',
        image: 'kitchen3.jpg',
    },
    {
        popular: false,
        name: 'Sunny Side',
        location: 'Yangon',
        image: 'kitchen4.jpg',
    }
];
function Apartment() {
    return (
        <div className={'Apartment'}>
            <SectionTitle title="Apartments with kitchen set" />
            <div className="row">
            {
                    apartments.map((apartment,index) =>  <SingleItem key={index} name={apartment.name} location={apartment.location} image={apartment.image} popular={apartment.popular}/>)
            }
            </div>
        </div>
    )
}

export default Apartment
