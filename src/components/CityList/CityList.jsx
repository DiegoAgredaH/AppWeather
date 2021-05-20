import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'


// li: es un tag de html que sirve para poner un item de una lista
// si tubieramos cuatro items lo que esta dentro de li se renderizaria cuatro veces
// y eso es lo que verificamos en CityList.test.jsx 
// el role que tiene li es listitem por ende en el test en findAllByRole colocamos eso como parametro.

//renderCityAndCountry se va a combertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    //const { temperature, state } = weather

    return (
        //ponemos como key city porque sabemos que es algo que no se va a repetir
        <ListItem
            key={city}
            onClick={eventOnClickCity}
            button>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={9}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    {
                        // si weather es undefined vamos a colocar "No hay datos"
                        weather ?
                            (<Weather
                                temperature={weather.temperature}
                                state={weather.state} />)
                            :
                            ("No hay datos")
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
// ul: tag html para listas no ordenadas
export const CityList = ({ cities, onClickCity }) => {
    /* representacion de los datos que llegarian a allWeather
    allWeather al ser iterado deberia quedar asi:
    {
        [Buenos Aires-argentina] : { datos del clima },
        [Bogota-Colombie] : { datos del clima }
        las variables que representan lo anterior serán las siguientes
        [propName] : propValue se las puede ver en el useEfect
        ...
        ...
        ...
    },
    */
    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const appid = "7543a0a52f28b5ccf87dc01dd3fc36c8"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
            // utilizamos axios y response de axios la cual tiene su propio esquema
            // el cual lo podemos consultar, de ese esquema vamos a utilizar la variable data y status
            // lo que trae data es la estructura de la respuesta que arroja openweathermap o la podemos ver en postman
            axios
                .get(url)
                .then(response => {
                    const { data } = response
                    // Para acceder a la temperatura vemos la estructura que nos arroja la consulta en postman
                    // y nos damos cuenta que primero se accede a main y despues a temp por ende debemos introducir data.main.temp
                    // Para el estado observamos que primero se debe accder a weather en la pocicion inicial y despues al atributo main
                    const temperature = data.main.temp
                    const state = data.weather[0].main.toLowerCase()
                    const propName = `${city}-${country}` // ej: [Bogota-Colombia]
                    const propValue = { temperature, state } // ej: { datos del clima }
                    console.log("propName", propName)
                    console.log("propValue", propValue)
                    // ...allWeather los tres puntos se llaman operadores de propagacion o Spread operator
                    // esto permite a atributos o elementos iterados ser expandidos, en este caso ...allWeather
                    // va ser expandido puesto que cada ves que se itere sera agregada una nueva ciudad y los datos de la ciudad
                    // setLoQueEstoyModificando(LoQueEstoyModificando => LoQueEstoyModificando + loQueAumenta)
                    setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
                })
        }

        // En el array de cities llega cityAndCountry entonces aplicamos destructuring  { city, country }
        // Itera el array cities y para cada ciudad que se encuentra va a realizar una peticion con la funcion setWeather
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        });

    }, [cities])
    // lo que va en el corchete son la dependencias, [cities] quiere decir que:
    // cuando cities se modifique de alguna manera se debe volver a ejecutar lo que esta en el hook useEffect

    //const weather = {temperature: 10, state: "sunny"}
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
