const WeatherData = {
  forecast: [
    {
      id: 1,
      day: 'Mon',
      route: 'monday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 78,
      lowTemp: 67
    },
    {
      id: 2,
      day: 'Tues',
      route: 'tuesday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 83,
      lowTemp: 66
    },
    {
      id: 3,
      day: 'Wed',
      route: 'wednesday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 78,
      lowTemp: 67
    },
    {
      id: 4,
      day: 'Thurs',
      route: 'thursday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 83,
      lowTemp: 66
    },
    {
      id: 5,
      day: 'Fri',
      route: 'friday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 78,
      lowTemp: 67
    },
    {
      id: 6,
      day: 'Sat',
      route: 'saturday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 83,
      lowTemp: 66
    },
    {
      id: 7,
      day: 'Sun',
      route: 'sunday',
      url: 'http://www.google.com',
      imageUrl: 'https://picsum.photos/100/100',
      highTemp: 78,
      lowTemp: 67
    }
  ],
  get: function (id) {
    const isDay = weatherDay => weatherDay.id === id
    return this.forecast.find(isDay)
  }
}

export default WeatherData
