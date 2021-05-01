//para importar react escribimos imr y tab
import React from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'

export default {
    //se escribe el item y el componente asociado a quien le vamos a realizar la historia
    title: "CityInfo",
    component: CityInfo
}

// vamos a poner los subitems que serian las formas de las cuales nuestro item se podria visualizar

export const CityExample = () => (<CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>)