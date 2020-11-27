import React from 'react'
import { Link } from 'react-router-dom'

const WeatherDetails = (props) => {
  let day = props.location.state.weather.dateString
  let description = props.location.state.weather.description
  let highTempTime = props.location.state.weather.highTempTime
  let lowTempTime = props.location.state.weather.lowTempTime
  let highTemp = props.location.state.weather.highTemp
  let lowTemp = props.location.state.weather.lowTemp
  let precipProbability = props.location.state.weather.precipProbability
  let sunriseTime = props.location.state.weather.sunriseTime
  let sunsetTime = props.location.state.weather.sunsetTime
  let humidity = props.location.state.weather.humidity

  return (
    <div className='weather-details'>
      <h1>Weather Details for {day}</h1>
      <p>{description}</p>
      <p>High: {highTemp} @ {highTempTime}</p>
      <p>Low: {lowTemp} @ {lowTempTime}</p>
      <p>Precipitation: {precipProbability}%</p>
      <p>Sunrise Time: {sunriseTime}</p>
      <p>Sunset Time: {sunsetTime}</p>
      <p>Humidity: {humidity}%</p>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default WeatherDetails
