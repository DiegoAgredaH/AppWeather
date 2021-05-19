import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
// el componente THREE nos permite hacer animaciones al estilo #D
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    // myRefDiv lo asigno al div para poder acceder al dom
    const myRefDiv = useRef(null) // valor inicial
    const[vanta, setVanta] = useState(0)// vanta va a ser inicializado en cero

    useEffect(() => {
       
        // Solo pasa una vez dentro del if
        // vanta === 0, is igual a vanta === false o !vanta
        if (!vanta){
            setVanta( Clouds({
                THREE,
                // myRefDiv.current se asocia al div
                el: myRefDiv.current
            }))
            
           
        }
        // Al salir de la pantalla debemos detener el efecto
        // y des-asociar todos los recursos (div + el efecto de vanta)
        return () => {
            // Dentro de esta funcion se va a realizar la tarea
            // de destrir los recursos tomados por "vanta"
            if (vanta) {
                vanta.destroy()
            }
        }
    }, [vanta]) // con esto me aseguro que siga funcionando bien
    // si tuviera más variables "use"

    return (
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
