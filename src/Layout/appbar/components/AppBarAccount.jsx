import React from 'react'
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import AccountCircle from "@material-ui/icons/AccountCircle"

export default ({phone}) => <>
    <Typography variant={"button"}>
        <strong>{phone}</strong>
    </Typography>
    <IconButton
        edge="end"
        color="inherit"
        aria-label="account"
        style={{paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0}}
    >
        <AccountCircle fontSize={"large"}/>
    </IconButton>
</>
