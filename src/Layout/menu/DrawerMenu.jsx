import React from 'react'
import {inject, observer} from "mobx-react"
import LinearProgress from "@material-ui/core/LinearProgress"
import Auth from "./Containers/MenuAuth"
import MenuLogOut from "./Containers/MenuLogOut"


const DrawerMenu = ({user}) => {
    const {isAuthenticated, loading} = user
    return <>
        {isAuthenticated ?
            <MenuLogOut handleLogOut={() => user.logOut()}/> :
            loading ? <LinearProgress color={"secondary"}/> : <Auth/>}
    </>
}

export default inject("user")(observer(DrawerMenu))