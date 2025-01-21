import React, {useEffect, useState} from 'react';
import Search from '../Search/Search';
import './style.css'

const Weather = () => {
    const [search, setSearch]= useState('');
    const [loading,  setLoading] =  useState(false);
    const [WeatherData, setWeatherData] = useState()


    const fetchWeatherData = async (param) => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=499e45df07363bee264e8ffab27e7191`);
            const result = await response.json();
            console.log(result )

            if (result) {
                setWeatherData(result);
                setLoading(false)
            }

        } catch (e) {
            console.log (e)
            setLoading(false)
        }
    }

    const handleSearch =  () => {
        fetchWeatherData(search)  

        }
    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    useEffect(() => {
        fetchWeatherData('Nairobi')

    }, [])
    
  return (
    <div className='container'>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        Weather
        {
            loading ? <div className='loading'>Loading... Please wait!</div> 
            : <div>
                <div className='city-name'>
                    <h2>{WeatherData?.name}, <span>{WeatherData?.sys?.country}</span></h2>
                </div>
                <div className='date'>
                    <span>{getCurrentDate()}</span>
                </div>
                <div>{WeatherData?.main?.temp}</div>
                <p className='description'>
                    {WeatherData && WeatherData.weather && WeatherData.weather[0] ? WeatherData.weather[0].description : ''}
                </p>
                <div className='weather-info'>
                    <div>
                        <div>
                            <p className='wind'>{WeatherData?.wind?.speed}</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='humidity'>{WeatherData?.main?.humidity}</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>
            </div>
        }

    </div>
  )
}

export default Weather