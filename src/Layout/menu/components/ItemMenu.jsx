import React from 'react'
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import {useLocation, useNavigate} from "react-router-dom"
import makeStyles from "@material-ui/core/styles/makeStyles"
import grey from "@material-ui/core/colors/grey"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main.light,
        "&:hover": {
            backgroundColor: grey[600]
        },
        "&$selected": {
            backgroundColor: theme.palette.primary.main
        },

    }
}))

export default ({text, children, path, onClick}) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const classes = useStyles()
    console.log(pathname, path)
    return <>
        <ListItem divider button
                  style={{}}
                  selected={pathname.includes(path)}
                  className={classes.root}
                  onClick={typeof onClick !== "undefined" ? onClick : () => navigate(path)}
        >
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    </>
}