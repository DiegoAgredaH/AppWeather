import React from 'react'
import { Component } from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

// lo que esta dentro de <AppFrame> es el parametro "children" que recibe
export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Mi app
        </AppFrame>
    </Router>
)