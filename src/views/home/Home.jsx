import React, {useMemo} from 'react'
import Typography from "@material-ui/core/Typography"
import Query from "../query/Query"
import {inject, observer} from "mobx-react"
import VncScreen from "./VncScreen"
import Grid from "@material-ui/core/Grid"

const Home = ({root}) => {
    const id = useMemo(() => {
        console.log('id', root.taskId)
        if (root.taskId && typeof root.taskId !== 'undefined')
            return root.taskId
        else return null
    }, [root.taskId])
    const handleUpdateState = (event) => {
        switch (event) {
            case "connecting":
                console.log("connecting")
                break
            case "connected":
                console.log("connected")
                break
            case "disconnected":
                console.log("disconnected")
                root.setTaskId(null)
                break
            default:
                break
        }
    }
    return <>
        {/*<Typography variant={"h1"} align={"center"} color={"primary"}>*/}
        {/*    {process.env.REACT_APP_WEBAPP_NAME}*/}
        {/*</Typography>*/}
        {/*<Typography variant={"subtitle1"} align={"center"}>*/}
        {/*    {process.env.REACT_APP_WEBAPP_DESCRIPTION}*/}
        {/*</Typography>*/}
        <Query/>
        {id && <VncScreen origin={true} session={id} onUpdateState={handleUpdateState}/>}
    </>
}
export default inject("root")(observer(Home))