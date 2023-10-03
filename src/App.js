import React, { useState } from 'react'
import './App.scss'
import Pages from './components/Pages'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {GiSandsOfTime} from 'react-icons/gi'

const App = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='main'>

      <div className='head'>
          <h1>Featured Listed Property</h1>
          <p>Real estate can be bought, sell, leased, or rented and can be <br/> valuable Investment opportunity. The value of real estate can be... </p>
      </div>


      <div className='nav'>
        <button >New York</button>
        <button>Mumbai</button>
        <button>Paris</button>
        <button>London</button>
        <button className='viewBtn'>View All  {<HiOutlineArrowNarrowRight/>}</button>
      </div>


      <div className='page'>
        <Pages showMoreStatus={showMore}/>
      </div>

      <div className='showMoreBtn'>
        <button onClick={toggleShowMore}><GiSandsOfTime className='showMoreBtnIcon'/>{showMore ? 'Show Less' : 'Show More'}</button>
      </div>

    </div>

  )
}

export default App
