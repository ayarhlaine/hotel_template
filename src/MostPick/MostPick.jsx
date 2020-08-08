import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import MostPickItem from './MostPickItem/MostPickItem'
import './MostPick.scss';
function MostPick() {
    return (
        <div className="MostPick">
            <SectionTitle title={'Most Pick'} />
            <div className="row MostPickItem__Row">
                <div className="col-md-3">
                    <MostPickItem mainItem={true}/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <MostPickItem />
                        </div>
                        <div className="col-md-6">
                            <MostPickItem />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <MostPickItem />
                        </div>
                        <div className="col-md-6">
                            <MostPickItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPick
