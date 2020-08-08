import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import SectionTitle from '../SectionTitle/SectionTitle'

function Hotel() {
    return (
        <div className={'Hotel'}>
            <SectionTitle title="Hotels with living room" />
            <div className="row">
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
            </div>
        </div>
    )
}

export default Hotel
