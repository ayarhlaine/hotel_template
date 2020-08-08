import React from 'react';
import './PageBody.scss';
import House from '../House/House';
import Hotel from '../Hotel/Hotel';
import Apartment from '../Apartment/Apartment';
import MostPick from '../MostPick/MostPick';
import PageIntro from '../PageIntro/PageIntro';

function PageBody() {
  return (
    <div className="PageBody container">
      <PageIntro />
      <MostPick />
      <House />
      <Hotel />
      <Apartment />
      {/* Happy Family */}
    </div>
  );
}

export default PageBody;
