import { alpha, Typography } from "@mui/material"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const TitleFreeShip = () => {
    return (
        <Typography
            sx={{
                fontSize: "13px",
                color: "#74aa50",
                display: "flex",
                alignItems: "center",
                mt: "12px",
            }}
        >
            <CheckCircleRoundedIcon
                sx={{ width: "16px", mr: "10px", color: alpha("#74aa50", 0.4) }}
            />
            Đơn hàng được miễn phí vận chuyển
        </Typography>
    )
}

export default TitleFreeShip