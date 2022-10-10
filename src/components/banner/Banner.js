import React from 'react';
import './banner.scss';
import avengers from '../../resources/img/Avengers.png'
import logo from '../../resources/img/Avengers logo.png'



function Banner() {
  return (
    <div className='banner'>
        <div className='item_banner'>
            <img src={avengers} alt='Avengers'></img>
                <h2>New comics every week! Stay tuned!</h2>
            <img className='logo' src={logo} alt='logo' ></img>
        </div>
    </div>
  );
}
export default Banner;

