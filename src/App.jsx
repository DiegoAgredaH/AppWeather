import React from 'react'
//BrowserRouter es un metodo que nos permite react router para el manejo de la url
// con as le colocamos un alias ara poder cmbiar la forma de ruteo facilmente
//Switch nos permite que ante una cantidad de ruteos el se decida por una, por la mas proxima
//Route corresponde a una determinada url
//Link es un ancla en el cual si damos click nos lleva al link que tiene asignado
//link no puede ir fuera de Router ni dentro de un Switch, pero si dentro de Route.
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/city">
                    <CityPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
