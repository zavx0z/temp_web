import React from 'react'
import Typography from "@material-ui/core/Typography"
import Query from "../query/Query"

export default (props) => {
    return <>
        {/*<Typography variant={"h1"} align={"center"} color={"primary"}>*/}
        {/*    {process.env.REACT_APP_WEBAPP_NAME}*/}
        {/*</Typography>*/}
        {/*<Typography variant={"subtitle1"} align={"center"}>*/}
        {/*    {process.env.REACT_APP_WEBAPP_DESCRIPTION}*/}
        {/*</Typography>*/}
        <Query/>
    </>
}