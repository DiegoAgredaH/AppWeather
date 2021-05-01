import React from 'react'
// lo que esta entre llaves es un metodo de la libreria testing library
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

//ponemos el nombre del test en este caso "CityInfo render" porque vamos a ver como renderiza
test("CityInfo render", async () =>{
    //ArrangeActAssert -> AAA se utiliza porque:
    //Arrange - acomodar o preparar las cosas para que el test funcione
    //Act - actuar ejecutar el test
    const city = "Buenos Aires"
    const country = "Argentina"

    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //en este caso utilizamos "findAllByRole" para consultar a nuestro componente
    //Vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    //Assert - evaluamos que sucedio
    // "findAllByRole" nos va a buscar todos los componentes que sean
    // "heading" => h1, h2, h3
    // el resultado es un array de componentes (cityAndCountryComponents)
    const cityAndCountryComponent = await findAllByRole("heading")

        //cuando el test va a ser correcto?
        //Definicion:
        //cuando el primer elemento (heading) se encuentre en la ciudad "Buenos Aires"
        // y cuando en el segundo elemento se encuentre el pais argentina el test va a ser correcto

        expect(cityAndCountryComponent[0]).toHaveTextContent(city)
        expect(cityAndCountryComponent[1]).toHaveTextContent(country)

        // si estas condiciones se cumplen (expect), el test esta ok

} )