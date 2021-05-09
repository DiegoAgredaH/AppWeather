import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    // Hay que poner un identificador único
    // en este caso la combinacion del dia y la hora `${weekDay}${hour}`
    //además vamos a poner una "marca" para encontrar cada item (ForecastItem)
    // para ello colocamos data-testid="nombre que le queramos dar"
    return (
        <Grid
            data-testid="forecast-item-container"
            item key={`${weekDay}${hour}`}>
            <ForecastItem
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}>
            </ForecastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="space-around"
            alignItems="center">
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )
}

//forecastItemList es un array de elementos los cuales deben tener una "forma" en particular
//las siguientes propiedades:
/*
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
*/
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
}

export default Forecast
