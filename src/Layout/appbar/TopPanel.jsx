import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/icons/Menu"
import {inject, observer} from "mobx-react"
import AppBarAccount from "./components/AppBarAccount"
import ButtonSignIn from "../../features/secure/components/ButtonLogIn"
import ButtonSignUp from "../../features/secure/components/ButtonJoin"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

const TopPanel = ({setOpen, user}) => {
    const {isAuthenticated, phone, loading} = user
    return <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setOpen(true)}
                >
                    <Menu/>
                </IconButton>
                <div style={{flexGrow: 1}}/>
                {isAuthenticated ?
                    <AppBarAccount phone={phone}/>
                    :
                    loading ?
                        <CircularProgress color={"secondary"}/> :
                        <Grid container justify={"flex-end"} spacing={1}>
                            <Grid item>
                                <ButtonSignIn color={"secondary"}/>
                            </Grid>
                            <Grid item>
                                <ButtonSignUp color={"secondary"}/>
                            </Grid>
                        </Grid>
                }
            </Toolbar>
        </AppBar>
    </>
}
export default inject("user")(observer(TopPanel))
