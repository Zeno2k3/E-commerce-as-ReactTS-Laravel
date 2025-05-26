import {
    Box,
    Divider,
    IconButton,
    Stack,
    SxProps,
    Theme,
    Typography,
} from "@mui/material";
import { OderType } from "../../utils/types/typeGlobal";
interface Props {
    OderObject: OderType;
    style?: SxProps<Theme>;
}

import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { useState } from "react";

const OderItemFrom: React.FC<Props> = ({ OderObject, style }) => {
    const [count, setCount] = useState<number>(OderObject.number || 1);
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                py: "16px",
                ...style,
                position: "relative",
            }}
        >
            <Box
                component="img"
                src={OderObject.image}
                sx={{ width: "74px", height: "98px" }}
            />
            <Box sx={{ ml: "24px" }}>
                <Typography sx={{ fontWeight: 500 }}> {OderObject.name} </Typography>
                <Box sx={{ display: "flex", mt: "9px", gap: 1 }}>
                    <Box
                        component={"img"}
                        src={OderObject.colorImg}
                        sx={{
                            border: "1px #cbd5e1 solid",
                            borderRadius: "100%",
                            p: "2px",
                            width: "20px",
                            height: "20px",
                        }}
                    />
                    <Typography sx={{ textTransform: "uppercase", display: "flex" }}>
                        {OderObject.colorName}{" "}
                        <Divider orientation="vertical" flexItem sx={{ mx: "10px" }} />{" "}
                        {OderObject.size}
                    </Typography>
                </Box>
                <Stack sx={{ display: "flex", alignItems: "flex-start", mt: "8px" }}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <Typography
                            sx={{
                                textDecorationLine: "line-through",
                                color: "#000",
                                display: "flex",
                                fontSize: "16px",
                                gap: 0.9,
                            }}
                        >
                            {OderObject.price}
                            <Typography sx={{ textDecoration: "underline" }}>đ</Typography>
                        </Typography>
                        <Typography sx={{ color: "red" }}>{OderObject.percent}</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 600, display: "flex", gap: 1 }}>
                        {OderObject.TotalPrice}{" "}
                        <Typography sx={{ fontWeight: 600, textDecoration: "underline" }}>
                            đ
                        </Typography>
                    </Typography>
                </Stack>
            </Box>
            <IconButton
                children={<MoreVertIcon />}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "12px",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    bottom: 16,
                    right: 16,
                    border: "1px solid #EDF1F5",
                }}
            >
                <IconButton
                    children={<AddIcon fontSize="small" />}
                    onClick={() => setCount(count + 1)}
                />
                <Divider variant="fullWidth" orientation="vertical" flexItem />
                <Typography sx={{ px: "12px" }}>{count}</Typography>
                <Divider variant="fullWidth" orientation="vertical" flexItem />
                <IconButton children={<HorizontalRuleIcon fontSize="small" />}
                    onClick={() => {
                        if (count > 1) {
                            setCount(count - 1);
                        }
                    }} />
            </Box>
        </Box>
    );
};

export default OderItemFrom;
