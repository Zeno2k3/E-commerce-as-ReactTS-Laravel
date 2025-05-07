import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const styles = {
    rowDisplay: {
        display: "flex",
        flexDirection: "row",
    },
    khoangcach: {
        gap: 1.5,
    },
    menuimg: {
        width: 207, 
        height: 290,
        borderRadius: 1
    }

} as Record<string, SxProps<Theme>>;