import { Box, Typography } from "@mui/material"
import React from "react";

interface ContainerProps {
    title: string;
}

const Container: React.FC<ContainerProps> = ({ title }) => {
    return (
        <Box sx={{
            width: "100%",
        }}>
            <Typography sx={{ fontSize: '28px', fontWeight: 700 }}>{title}</Typography>
        </Box>
    )
}

export default Container