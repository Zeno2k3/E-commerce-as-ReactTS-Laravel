import { Box, Divider, Typography } from "@mui/material"
import { OderType } from "../../utils/types/typeGlobal"

interface Props {
    OderObject: OderType
}

const OderItemFrom: React.FC<Props> = ({ OderObject }) => {
    return (
        <Box sx={{ width: "100%", display: "flex", p: "24px 0px 24px 0px" }}>
            <Box
                component="img"
                src={OderObject.image}
                sx={{ width: "74px", height: "98px" }}
            />
            <Box sx={{ ml: "24px" }}>
                <Typography sx={{ fontWeight: 500 }}> {OderObject.name} </Typography>
                <Box sx={{ display: "flex", mt: "9px", gap: 2 }}>
                    <Box
                        component={"img"}
                        src={OderObject.colorImg}
                        sx={{
                            border: "1px #cbd5e1 solid",
                            borderRadius: "100%",
                            p: "3px",
                            width: "20px",
                            height: "20px",
                        }}
                    />
                    <Typography sx={{ textTransform: "uppercase", display: "flex" }}>
                        {OderObject.colorName}{" "}
                        <Divider orientation="vertical" flexItem sx={{ mx: "20px" }} />{" "}
                        {OderObject.size}
                    </Typography>

                </Box>
            </Box>
        </Box>
    )
}

export default OderItemFrom