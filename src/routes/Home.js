import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'
import '../styles/index.css'
import WeatherCard from '../components/WeatherCard'

var moment = require('moment')

const Home = (props) => {
  return (
    <div className='home'>
      <h1>Seattle Weather Forecast</h1>
      <ul className='weather-list'>
        {
          props.weatherForecast.map((weather, i) => {
            return (
              <Link to={{
                pathname: `/${weather.datePath}`,
                state: {
                  weather: weather
                }
              }}
                key={i}>
                <WeatherCard
                  day={weather.dateString}
                  url={weather.dateString}
                  icon={weather.icon}
                  highTemp={weather.highTemp}
                  lowTemp={weather.lowTemp}
                />
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home
