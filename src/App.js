import React from 'react'
import './App.scss'
import Pages from './components/Pages'

const App = () => {
  return (
    <div className='main'>
      <div className='head'>
          <h1>Featured Listed Property</h1>
          <p>Real estate can be bought, sell, leased, or rented and can be <br/> valuable Investment opportunity. The value of real estate can be... </p>
      </div>

      <div className='nav'>
        <button>Paris</button>
        <button>London</button>
        <button>Mumbai</button>
        <button>Delhi</button>
        <button className='viewBtn'>View All</button>
      </div>

      <div className='page'>
        <Pages/>
      </div>

      <div className='showMoreBtn'>
        <button >Show More</button>
      </div>
      
    </div>
  )
}

export default App
