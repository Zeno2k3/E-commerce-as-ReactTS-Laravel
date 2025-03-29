import { createTheme } from "@mui/material";
import red from "@mui/material/colors/red";


const theme = createTheme({
    palette:{
        primary: {
            main: "#333F48"
        },
        secondary: {
            main: red[500]
        },
        text: { 
           secondary: "#333F48"
        }
    },
    typography: {
        fontFamily: ['Montserrat','sans-serif'].join(','),
        allVariants:{
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
                padding: "0px", // ✅ Bỏ padding mặc định
                margin: "0px", // (Tùy chọn) Bỏ margin nếu có
              },
            },
          },
    }
})

export default theme