import React from 'react';
import './header.scss'


function Header() {
  return (
    <div className="header">
      <div className='wrapper'>
        <h2><span className='active'>Marvel</span> information portal</h2>
        <h2><span><a href='#'>Characters</a></span> / <a className='active' href='#'>Comics</a></h2>
      </div>    
    </div>
  );
}
export default Header;

