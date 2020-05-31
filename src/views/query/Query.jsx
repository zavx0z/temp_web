import React from 'react'
import {inject, observer} from 'mobx-react'
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {useSnackbar} from "notistack"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    }
}))
const Query = ({root}) => {
    const {query, changeQuery, runTask} = root
    const {enqueueSnackbar} = useSnackbar()
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault()
        runTask(e)
            .then(msg => enqueueSnackbar(msg, {variant: "success"}))
            .catch(e => enqueueSnackbar(e, {variant: "error"}))
    }
    return <>
        <Container maxWidth={'md'} className={classes.root}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    variant={"filled"}
                    value={query}
                    autoFocus
                    label={'поисковый запрос'}
                    onChange={changeQuery}
                />
                <Button
                    className={classes.root}
                    color={"secondary"}
                    fullWidth
                    variant={"contained"}
                    type={"submit"}
                >
                    ок
                </Button>
            </form>
        </Container>
    </>
}

export default inject("root")(observer(Query))