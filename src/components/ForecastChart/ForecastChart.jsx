import React from 'react'
import PropTypes from 'prop-types'
//LineChart nos sirve para poder crear la grafica
//CartesianGrid para agregar un plano cartesiano
//Xaxis para agregar el eje "X" y YAxis para el eje "Y"
//Tooltip para que cuando pasemos el mouse por cada uno de los puntos de la grafica nos muestre informacion más detallada
//Legen nos indica con que color se representa cada linea
import { LineChart, 
        Line, 
        CartesianGrid, 
        XAxis, 
        YAxis,
        Tooltip, 
        Legend,
        ResponsiveContainer } from 'recharts'

const ForecastChart = ({ data }) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}>
            <LineChart
                margin={{top: 20, bottom: 20, left: 5, right: 5}}
                data={data} >
                    <XAxis dataKey="dayHour"></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid></CartesianGrid>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type="monotone" dataKey="max" stroke="#FF0000"></Line>
                    <Line type="monotone" dataKey="min" stroke="#0000FF"></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf( 
        PropTypes.shape({
        dayHour: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }),
    ).isRequired,
}

export default ForecastChart
