import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import {
    WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain
} from 'react-icons/wi'
//importamos el proveedor de contexto
import { IconContext } from 'react-icons'

const validValues = [
    "cloud",
    "cloudy",
    "fog",
    "sunny",
    "rain"
]

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
}

const renderState = state => {
    // se puede realizar con if o cons switch   
    /* if (state === "cloud") { 
         return <WiCloud />
     } else if (state === "cloudy") {
         return <WiDayCloudy />
     } else if (state === "fog") {
         return <WiDayFog />
     } else if (state === "sunny") {
         return <WiDaySunny />
     } else if (state === "rain") {
         return <WiRain />
     }*/
    /*switch (state) {
        case "cloud":
            return <WiCloud />
        case "cloudy":
            return <WiDayCloudy />
        case "fog":
            return <WiDayFog />
        case "sunny":
            return <WiDaySunny />
        case "rain":
            return <WiRain />
        default:
            return <WiDaySunny />
    }*/
    //debido a que siempre se va a utilizar como parametro el state en todas las opciones 
    // se lo puede resumir como se muestra a continuación
    // cuando una constante empieza con mayuscula quiere decir que el contenido es dinamico
    // la tecnica se llama nombres de componentes dinamicos por eso se puede utilizar asi <Icon /> 
    const Icon = stateByName[state]
    // lo que hace es que se va a stateByName y busca lo que tiene state
    return <Icon />
}

const Weather = ({ temperature, state }) => {
    return (
        <div>
            <IconContext.Provider value={{ size: '5em' }}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display="inline" variant="h3">{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather
