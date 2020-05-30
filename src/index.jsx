import React from 'react'
import ReactDOM from 'react-dom'
import './theme/index.css'
import App from './App'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import theme from "./theme/theme"
import {BrowserRouter as Router} from "react-router-dom"
import {SnackbarProvider} from "notistack"
import 'mobx-react-lite/batchingForReactDom'
import {Provider} from "mobx-react"
import userStore from "./features/secure/stores/userStore"

ReactDOM.render(
    <React.Fragment>
        <MuiThemeProvider theme={theme}>
            <SnackbarProvider>
                <Router>
                    <Provider user={userStore}>
                        <App/>
                    </Provider>
                </Router>
            </SnackbarProvider>
        </MuiThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
)