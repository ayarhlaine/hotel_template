import React from 'react';
import './App.scss';
import House from './House/House';
import Hotel from './Hotel/Hotel';
import Apartment from './Apartment/Apartment';
import MostPick from './MostPick/MostPick';

function App() {
  return (
    <div className="App container">
      {/* Page Intro */}
      <MostPick />
      <House />
      <Hotel />
      <Apartment />
      {/* Happy Family */}
      {/* Footer */}
    </div>
  );
}

export default App;
