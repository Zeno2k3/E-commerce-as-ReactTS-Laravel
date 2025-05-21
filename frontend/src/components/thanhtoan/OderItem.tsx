import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  image: string;
  name: string;
  color: string;
  colorName: string;
  size: string;
  number: number;
  percent: string;
  price: number;
  TotalPrice: number;
}

const OderItem: React.FC<Props> = ({
  image,
  name,
  color,
  colorName,
  size,
  number,
  percent,
  price,
  TotalPrice,
}) => {
  return (
    <Box sx={{ width: "100%", display: "flex", p: "24px 40px 24px 0px" }}>
      <Box sx={{ width: "70%", display: "flex" }}>
        <Box
          component="img"
          src={image}
          sx={{ width: "74px", height: "98px" }}
        />
        <Box sx={{ fontWeight: 500, ml: "24px" }}>
          <Typography> {name} </Typography>
          <Box sx={{ display: "flex", mt: "9px", gap: 2 }}>
            <Box
              component={"img"}
              src={color}
              sx={{
                border: "1px #cbd5e1 solid",
                borderRadius: "100%",
                p: "3px",
                width: "20px",
                height: "20px",
              }}
            />
            <Typography sx={{ textTransform: "uppercase", display: "flex" }}>
              {colorName}{" "}
              <Divider orientation="vertical" flexItem sx={{ mx: "20px" }} />{" "}
              {size}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "10%", fontWeight: 700 }}> X {number} </Box>
      <Stack sx={{ width: "20%", display: "flex", alignItems: "flex-end" }}>
        <Typography sx={{ fontWeight: 700, display: "flex", gap: 1 }}>
          {TotalPrice}{" "}
          <Typography sx={{ fontWeight: 700, textDecoration: "underline" }}>
            đ
          </Typography>
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography sx={{ fontWeight: 700, color: "red", fontSize: "13px" }}>
            {percent}
          </Typography>
          <Typography
            sx={{ textDecorationLine: "line-through", color: "#74869b" }}
          >
            {price}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OderItem;
