import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import SectionTitle from '../SectionTitle/SectionTitle'
import './House.scss';
function House() {
    return (
        <div className={'House'}>
            <SectionTitle title="Houses with Beauty backyard" />
            <div className="row">
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
            </div>
        </div>
    )
}

export default House
