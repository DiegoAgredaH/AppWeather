import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' //SUT

const cities = [
    { city: "Buenos aires", country: "Argentina"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de México", country: "México"},
]

test("CityList renders", async() => {
    // regla de las 3 AAA

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {} } />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CutyList click on item", async () => {
    // Debemos simular una accion de usuario: click sobre un item
    // Para eso vamos a utilizar una funcion "mock" la cual es una funcion que imita a una funcion real
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render (<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    //Ahora para simular la accion, vamos a utilizar la funcion fireEvent
    // fireEvent es parte de la liberia testing library

    fireEvent.click(items[0])

    //ahora lo que deberia suceder es llamar a la funcion fnClickOnItem
        
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

    //con lo anterior decimos que la funcion fnClickOnItem se debio haber llamado una unica vez
})