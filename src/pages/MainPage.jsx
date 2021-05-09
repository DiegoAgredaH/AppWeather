import React from 'react'
// utilizamos el hook usehistory
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

const cities = [
    { city: "Buenos aires", country: "Argentina"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de México", country: "México"},
]

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        // history.push permite tranajar con la url y cambiarla
        history.push("/city")
    }

    return (
        <div>
            <h2>Lita de ciudades</h2>
            <CityList cities={cities} onClickCity={onClickHandler}/>
        </div>
    )
}

export default MainPage
