import React from 'react'
import WelcomeScreen from './WelcomeScreen'
import Grid from '@material-ui/core/Grid'

export default {
    title: "WelcomeScreen",
    component: WelcomeScreen
}

export const WelcomeScreenExample = () => (
    <WelcomeScreen>
        <Grid container
            direction="column"
            justify="center"
            className="full">
                <div className="highlight"></div>

        </Grid>
    </WelcomeScreen>
)