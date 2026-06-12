const WEATHER_ICONS = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Thunderstorm: "⛈️",
  Snow: "❄️"
}

export default function WeatherCard({ weather, children }) {
  return (
    <div className='card p-5 text-center text-secondary' style={{ background: "#0f0f1a" }}>
      <h3 className='mb-1'>{weather.name}</h3>
      <small className='text-muted'>{weather.sys.country}</small>

      <div style={{ fontSize: '80px', margin: '20px 0' }}>
        {WEATHER_ICONS[weather.weather[0].main] || "🌤️"}
      </div>

      <h1 style={{ color: '#667eea', fontSize: '60px', margin: '10px 0' }}>
        {Math.round(weather.main.temp)}°C
      </h1>

      <p className='text-capitalize mb-4'>{weather.weather[0].description}</p>

      {children}
    </div>
  )
}
