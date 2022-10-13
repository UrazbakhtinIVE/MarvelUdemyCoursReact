import React from 'react';
import './catalog.scss'
import catalog_1  from '../../resources/img/catalog/cat.png'
import catalog_2  from '../../resources/img/catalog/cat2.png'


function Catalog() {
  return (
    <div className='wrapperCatalog'>
        <div className='catalogItems'>
            <div className='catalogItem'>
                <img src={catalog_1} />
                <p>ultimate x-men vol. 5: ultimate war tpb</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_2} />
                <p className='loweCase'>X-Men: Days of Future Past</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_1} />
                <p>ultimate x-men vol. 5: ultimate war tpb</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_2} />
                <p className='loweCase'>X-Men: Days of Future Past</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_1} />
                <p>ultimate x-men vol. 5: ultimate war tpb</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_2} />
                <p className='loweCase'>X-Men: Days of Future Past</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_1} />
                <p>ultimate x-men vol. 5: ultimate war tpb</p>
                <p className='sale'>9.99$</p>
            </div>

            <div className='catalogItem'>
                <img src={catalog_2} />
                <p className='loweCase'>X-Men: Days of Future Past</p>
                <p className='sale'>9.99$</p>
            </div>


        </div>

           
    </div>    
  );
}
export default Catalog;

