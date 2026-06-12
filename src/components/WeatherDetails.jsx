export default function WeatherDetails({ weather }) {
  return (
    <div className='row text-center'>
      <div className='col-md-4'>
        <small className='text-light d-block'>HİSSEDİLEN</small>
        <h5>{Math.round(weather.main.feels_like)}°C</h5>
      </div>
      <div className='col-md-4'>
        <small className='text-light d-block'>NEM</small>
        <h5>{weather.main.humidity}%</h5>
      </div>
      <div className='col-md-4'>
        <small className='text-light d-block'>RÜZGAR</small>
        <h5>{Math.round(weather.wind.speed)} km/h</h5>
      </div>
    </div>
  )
}
