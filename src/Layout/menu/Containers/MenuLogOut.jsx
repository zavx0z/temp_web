import React from 'react'
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}))
export default ({handleLogOut}) => {
    const classes = useStyles()
    return <>
        <Container className={classes.buttonContainer}>
            <Button
                fullWidth
                variant={"contained"}
                onClick={handleLogOut}>
                выход
            </Button>
        </Container>
    </>
}