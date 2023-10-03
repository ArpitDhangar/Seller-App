import React from 'react'
import Rows from './Rows'

const Pages = ({ showMoreStatus }) => {
  return (
    <div className='rows'>
      <Rows/>
      <Rows/>
      {showMoreStatus && <Rows/>}
    </div>
  )
}

export default Pages
