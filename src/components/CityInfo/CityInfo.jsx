import React from 'react'
import PropTypes from 'prop-types'

// importamos un componente que nos brinda la libreia material-ui/core para mostrar tecto
import Typography from '@material-ui/core/Typography'

// city y country son los parametros que va a tener este componente

const CityInfo = ({city, country}) => {
    return (
        <>
            <Typography display= "inline" variant="h4">{ city }, </Typography>
            <Typography display= "inline" variant="h6">{ country }</Typography>
        </>
    )
}

//validamos el tipo de parametro que va a recibir
CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
