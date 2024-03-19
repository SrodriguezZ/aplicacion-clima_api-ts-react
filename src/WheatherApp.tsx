import React, { FormEvent, useState } from 'react'
import { Clima } from './IClimaInterface';

export const WheatherApp: React.FC = () => {
    const BASE_URL: string = "https://api.openweathermap.org/data/2.5/weather"
    const KEY: string = "38555a993000a896c1805cbecb48aa89";
    const [cuidad, setclima] = useState('')
    const [apiClima, setapiClima] = useState<Clima>()
    const difKelvin:number = 273.15
    const handleUseForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(cuidad)
        if (cuidad.length > 0) climaApi()
        console.log(apiClima)
    }
    const climaApi = async () => {
        try {
            const response = await fetch(`${BASE_URL}?q=${cuidad}&appid=${KEY}`)
            const data = await response.json();
            setapiClima(data)
        } catch (error) {
            return Promise.reject(error)
        }

    }

    return (
        <div className='container'>
            <h1>
                WheatherApp
            </h1>
            <form onSubmit={handleUseForm}>
                <input type="text"
                    value={cuidad}
                    onChange={(e) => { setclima(e.target.value) }}
                />
                <button type='submit'>
                    Buscar
                </button>
            </form>
            {
                apiClima && (
                    <>
                    <h2>{apiClima.name}</h2>
                    <p>Temperatura: {Math.floor(apiClima.main?.temp - difKelvin)}°C</p>
                    <img src={`https://openweathermap.org/img/wn/${apiClima.weather[0].icon}@2x.png`} alt="Weather Icon" />
                    </>
                )
            }
        </div>
    )
}
