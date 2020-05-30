import React, {useEffect, useState} from 'react'
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import routes from "../routes/routes"
import {useLocation, useNavigate} from "react-router-dom"
import Home from "@material-ui/icons/Home"

export default () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(routes.sport)
    const handleChangeValue = (event, newValue) => navigate(newValue)
    useEffect(() => {
        if (pathname.includes('live'))
            setValue(routes.live)
        else if (pathname.includes('sports'))
            setValue(routes.sport)
        else
            setValue(pathname)
    }, [pathname])
    return <>
        <BottomNavigation
            value={value}
            onChange={handleChangeValue}
            showLabels
        >
            <BottomNavigationAction value={routes.home} label="Главная" icon={<Home/>}/>
        </BottomNavigation>
    </>
}