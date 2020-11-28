import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import WeatherDetails from './WeatherDetails'

var moment = require('moment')

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const URL = 'https://api.darksky.net/forecast/1c8050d02fc7e319e1f369468c3c2dc4/37.8267,-122.4233';

class Main extends Component {
  constructor (props) {
    super()
    this.state = {
      weatherForecast: []
    }
  }
  
  componentDidMount () {
    fetch(PROXY_URL + URL)
      .then(results => {
        return results.json()
      }).then(data => {
        console.log(data);
        const newWeatherForecast = data.daily.data.map((weather, i) => {
          return {
            id: i,
            date: weather.time,
            dateString: moment.unix(weather.time).format('MM/DD ddd'),
            datePath: moment.unix(weather.time).format('MMDD'),
            description: weather.summary,
            highTemp: Math.round(weather.temperatureHigh),
            lowTemp: Math.round(weather.temperatureLow),
            highTempTime: moment.unix(weather.temperatureHighTime).format('H:mm A'),
            lowTempTime: moment.unix(weather.temperatureLowTime).format('H:mm A'),
            precipProbability: weather.precipProbability * 100,
            sunriseTime: moment.unix(weather.sunriseTime).format('H:mm A'),
            sunsetTime: moment.unix(weather.sunsetTime).format('H:mm A'),
            humidity: weather.humidity * 100,
            icon: weather.icon
          }
        })

        const newState = Object.assign({}, this.state, {
          weatherForecast: newWeatherForecast
        })

        this.setState(newState)
      })
  }

  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <Home weatherForecast={this.state.weatherForecast} />} />
          <Route path='/:day' component={WeatherDetails} />
        </Switch>
      </main>
    )
  }
}

export default Main
