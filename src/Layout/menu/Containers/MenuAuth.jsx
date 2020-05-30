import React from 'react'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core"
import ButtonJoin from "../../../features/secure/components/ButtonJoin"
import ButtonLogIn from "../../../features/secure/components/ButtonLogIn"

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}))
export default (props) => {
    const classes = useStyles()
    return <>
        <Container>
            <Grid className={classes.buttonContainer} container direction={"column"} spacing={1}>
                <Grid item>
                    <ButtonLogIn color={"secondary"}/>
                </Grid>
                <Grid item>
                    <ButtonJoin color={"secondary"}/>
                </Grid>
            </Grid>
        </Container>
    </>
}