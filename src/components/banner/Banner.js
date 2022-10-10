import React from 'react';
import './banner.scss';
import avengers from '../../resources/img/Avengers.png'
import logo from '../../resources/img/Avengers logo.png'



function Banner() {
  return (
    <div className='banner'>
        <div className='item_banner'>
           <a href='#'><img src={avengers} alt='Avengers'></img></a> 
                <h2>New comics every week! Stay tuned!</h2>
                    <a href='#'><img className='logo' src={logo} alt='logo'></img></a>           </div>
    </div>
  );
}
export default Banner;

