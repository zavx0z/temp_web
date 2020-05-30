import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import grey from "@material-ui/core/colors/grey"
import blue from "@material-ui/core/colors/blue"

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: grey[600],
            contrastText: grey[100]
        },
        secondary: {
            main: blue[200]
        },
        // warning: {},
        // info: {},
        // success: {},
        // text: {},
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

export default createMuiTheme({
    ...theme,
    overrides: {
        MuiTypography: {
            button: {}
        },
    }
})