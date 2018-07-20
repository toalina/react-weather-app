import React from 'react'
import DayOfWeek from './DayOfWeek'
import WeatherImage from './WeatherImage'
import Temperatures from './Temperatures'
import Description from './Description'

const WeatherCard = props => (
  <div className='weather-card'>
    <DayOfWeek
      day={props.day}
    />
    <WeatherImage
      icon={props.icon}
    />
    <Temperatures
      highTemp={props.highTemp}
      lowTemp={props.lowTemp}
    />
    <Description
      description={props.description}
    />
  </div>
)

export default WeatherCard
