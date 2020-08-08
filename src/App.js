import React from 'react';
import './App.scss';
import PageBody from './PageBody/PageBody';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageBody />
      <Footer />
    </div>
  );
}

export default App;
