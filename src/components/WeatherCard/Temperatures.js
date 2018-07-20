import React from 'react'

const Temperatures = props => (
  <div className='temperatures-wrapper'>
    <p className='high-temp'>
      {props.highTemp}
    </p>
    <p className='low-temp'>
      {props.lowTemp}
    </p>
  </div>
)

export default Temperatures
