import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import SectionTitle from '../SectionTitle/SectionTitle'

function Apartment() {
    return (
        <div className={'Apartment'}>
            <SectionTitle title="Apartments with kitchen set" />
            <div className="row">
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
            </div>
        </div>
    )
}

export default Apartment
