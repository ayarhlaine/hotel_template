import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'
import './PageIntro.scss';
function PageIntro() {
    return (
        <div className="PageIntro">
            <div className="row">
                <div className="col-md-6">
                    <LeftPanel />
                </div>
                <div className="col-md-6">
                    <RightPanel />
                </div>
            </div>
        </div>
    )
}

export default PageIntro
