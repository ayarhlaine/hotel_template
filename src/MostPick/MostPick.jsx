import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import MostPickItem from './MostPickItem/MostPickItem'
import './MostPick.scss';
function MostPick() {
    return (
        <div className="MostPick">
            <SectionTitle title={'Most Picked'} />
            <div className="row MostPickItem__Row">
                <div className="col-md-3">
                    <MostPickItem mainItem={true} name={'Pure Light'} location={"Yangon"} price={50} image="mostpick1.jpg"/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <MostPickItem name={'Green Village'} location={"Yangon"} price={39.99} image="mostpick2.jpg"/>
                        </div>
                        <div className="col-md-6">
                            <MostPickItem name={'Blue Light Origin'} location={"Yangon"} price={28.99} image="mostpick3.jpg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <MostPickItem name={'Sunny Side'} location={"Yangon"} price={27.99} image="mostpick4.jpg"/>
                        </div>
                        <div className="col-md-6">
                            <MostPickItem name={'Jungle Land'} location={"Yangon"} price={47.79} image="mostpick5.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPick
