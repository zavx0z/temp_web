import React, {useEffect} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline"
import {Routes, Route, useNavigate} from "react-router-dom"
import routes from "./routes/routes"
import LeftSwipeable from "./Layout/LeftSwipeable"

import Auth from "./features/secure/Auth"
import HomeNavBar from "./views/home/HomeNavBar"
import Home from "./views/home/Home"

const Redirect = ({path}) => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(path)
    })
    return <></>
}

export default () => {
    return <><CssBaseline/>
        <LeftSwipeable
            openDrawer={false}
            navigate={
                <Routes>
                    <Route path={routes.home} element={<HomeNavBar/>}/>
                </Routes>
            }
        >
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.auth + "*"} element={<Auth redirect={routes.home}/>}/>
                <Route path={"*"} element={<Redirect path={routes.home}/>}/>
            </Routes>
        </LeftSwipeable>
    </>
}