import React from 'react'

const WeatherImage = props => (
  <div className='weather-image'>
    <img src={props.icon} alt='' />
    <i className={`wi wi-forecast-io-${props.icon}`} />
  </div>
)

export default WeatherImage
