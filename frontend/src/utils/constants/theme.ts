import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#333f48"
        },
        secondary: {
            main: "#da291c"
        },
        text: {
            secondary: "#333f48"
        }
    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        allVariants: {
            color: "#333f48",
            fontSize: 14
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
        MuiGrid2: {
            styleOverrides: {
                root: {
                    padding: "0px",
                    margin: "0px",
                },
            },
        },
    }
})

export default theme