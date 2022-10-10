import React from 'react';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import './app.scss'


function App() {
  return (
    <div className="App">
        <div className='wrapperApp'>
          <Header/>
          <Banner/>
        </div>
    </div>
  );
}
export default App;
