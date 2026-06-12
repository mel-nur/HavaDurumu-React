import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import DateTimeDisplay from './components/DateTimeDisplay'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const [city, setCity] = useState("Istanbul")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date())

  const fetchWeather = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      if (!response.ok) throw new Error("Şehir bulunamadı")
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='m-0 p-0 text-secondary' style={{ background: "#0f0f1a", minHeight: "100vh" }}>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <h1 className='text-center mb-4'>Hava Durumu</h1>
          <DateTimeDisplay currentDate={currentDate} />
          <SearchBar city={city} onCityChange={setCity} onSearch={fetchWeather} loading={loading}/>
          {loading && (
            <div className="spinner-border m-5" role="status"></div>
          )}

          {error && <div className="alert alert-danger">{error}</div>}

          {weather && !error && (
            <WeatherCard weather={weather}>
              <WeatherDetails weather={weather} />
            </WeatherCard>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
