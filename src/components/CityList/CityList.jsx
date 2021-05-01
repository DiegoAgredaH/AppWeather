import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

// li: es un tag de html que sirve para poner un item de una lista
// si tubieramos cuatro items lo que esta dentro de li se renderizaria cuatro veces
// y eso es lo que verificamos en CityList.test.jsx 
// el role que tiene li es listitem por ende en el test en findAllByRole colocamos eso como parametro.

//renderCityAndCountry se va a combertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        //ponemos como key city porque sabemos que es algo que no se va a repetir
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={8}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
        </li>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
// ul: tag html para listas no ordenadas
export const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
