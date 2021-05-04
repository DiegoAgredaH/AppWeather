import React from 'react'
import { render } from '@testing-library/react'
import Weatherdetails from './WeatherDetails'

//findByText: Permite encontrar un componente por el texto que muestra
test("WeatherDetails render", async () => {
    const { findByText } = render (<Weatherdetails wind={10} humidity={80} />)

    // Al utilizar las barras utilizamos un REGEXP, una expresión regular osea
    // que antes de 10 pueden haber otras letras y despues de 10 también
    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    //aqui decimos que en wind esperamos que tenga el texto Viento: 10 Km/h
    expect(wind).toHaveTextContent("Viento: 10 Km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%")
})