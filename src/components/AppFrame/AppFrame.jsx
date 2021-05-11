import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
//AppBar me permite mostrar una barra en la parte superior
// donde podemos ver el estado de la plicacion o ver algun icono
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

// children es un nombre o propidad reservada para los elementos o componentes "hijos"
const AppFrame = ({ children }) => {
    return (
        <Grid container
            justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link 
                            component={LinkRouter}
                            to="/main" 
                            color="inherit" 
                            aria-label="menu">
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography varian="h6" color="inherit">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                    {children}
            </Grid>
        </Grid>
    )
}

// PropTypes.node hace referencia a cualquier tipo de elemento de React que sea valido
AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
