import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Grid from "@material-ui/core/Grid"
import DrawerMenu from "./menu/DrawerMenu"
import TopPanel from "./appbar/TopPanel"
import BottomPanel from "./BottomPanel"
import clsx from "clsx"
import useIsIOS from "../hooks/useIsIOS"

const drawerWidth = 290
const useStyles = makeStyles((theme) => ({
    list: {width: drawerWidth},
    top: {zIndex: 444},
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    container: {
        height: "100%",
        overflow: "hidden"
    },
    content: {
        flexGrow: 1,
        overflowY: "auto",
        overflowX: "hidden"
    },
    portal: {
        position: "relative",
        zIndex: 444
    },
}))

export default ({children, openDrawer, navigate}) => {
    const iOS = useIsIOS()
    const [open, setOpen] = useState(!!openDrawer)
    const classes = useStyles()
    return <>
        <SwipeableDrawer
            open={open}
            disableDiscovery={iOS}
            disableBackdropTransition={!iOS}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <div className={classes.list}
                 role="presentation"
                 onClick={() => setOpen(false)}
                 onKeyDown={() => setOpen(false)}>
                <DrawerMenu/>
            </div>
        </SwipeableDrawer>
        <Grid container direction={"column"}
              className={clsx([classes.container, open ? classes.appBarShift : classes.appBar])}
              justify={"space-between"}
              wrap={"nowrap"}
        >
            <Grid item>
                <TopPanel setOpen={setOpen}/>
                {navigate}
            </Grid>
            <Grid item id={"content"} className={classes.content}>
                {children}
            </Grid>
            <Grid item id={"bottom-portal"} className={classes.portal}/>
            <Grid item className={classes.top}>
                <BottomPanel/>
            </Grid>
        </Grid>
    </>
}