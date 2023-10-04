import React, { useState } from 'react'
import './App.scss'
// import Pages from './components/Pages'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {GiSandsOfTime} from 'react-icons/gi'
import {Route, Routes, NavLink} from 'react-router-dom';
import NewYork from './components/links/NewYork'
import London from './components/links/London'
import Mumbai from './components/links/Mumbai'
import Paris from './components/links/Paris'

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
        <div className='nav-link'>
        <NavLink to='/NewYork'>New York</NavLink>
        </div>
        <div className='nav-link'>
        <NavLink to='/Mumbai'>Mumbai</NavLink>
        </div>
        <div className='nav-link'>
        <NavLink to='/Paris'>Paris</NavLink>
        </div>
        <div className='nav-link'>
        <NavLink to='/London'>London</NavLink>
        </div>
        <button className='viewBtn'>View All  {<HiOutlineArrowNarrowRight/>}</button>
      </div>


      <div className='page'>
      <Routes>
        <Route path='/london' Component={London} showMoreStatus={showMore}/> 
      </Routes>
      <Routes>
        <Route path='/NewYork' Component={NewYork} showMoreStatus={showMore}/> 
      </Routes>
      <Routes>
        <Route path='/Mumbai' Component={Mumbai} showMoreStatus={showMore}/> 
      </Routes>
      <Routes>
        <Route path='/Paris' Component={Paris} showMoreStatus={showMore}/> 
      </Routes>
      </div>

      <div className='showMoreBtn'>
        <button onClick={toggleShowMore}><GiSandsOfTime className='showMoreBtnIcon'/>{showMore ? 'Show Less' : 'Show More'}</button>
      </div>




    </div>

  )
}

export default App
