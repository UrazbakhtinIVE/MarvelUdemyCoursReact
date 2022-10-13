import React from 'react';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import Catalog from '../catalog/Catalog';
import './app.scss';


function App() {
  return (
    <div className="App">
        <div className='wrapperApp'>
          <Header/>
          <Banner/>
          <Catalog/>
        </div>
    </div>
  );
}
export default App;
