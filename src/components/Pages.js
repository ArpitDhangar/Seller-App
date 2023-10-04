import React from 'react'
import Rows from './Rows'

const Pages = ({ props }) => {
  return (
    <div className='rows'>
      <Rows/>
      <Rows/>
      {/* {props.showMore && <Rows/>} */}
    </div>
  )
}

export default Pages
