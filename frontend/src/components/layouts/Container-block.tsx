import { Box, Grid2, Typography, Stack, Divider } from "@mui/material";
import service1 from "../../assets/image/service1.png";
import service2 from "../../assets/image/service2.png";
import service3 from "../../assets/image/service3.png";
import React from "react";

interface props {
  isdivider: boolean;
}

const Containers = [
  {
    icon: service1,
    width: "44px",
    title: "Thanh toán khi nhận hàng (COD)",
    content: "Giao hàng toàn quốc",
  },
  {
    icon: service2,
    width: "44px",
    title: "Miễn phí giao hàng",
    content: "Với đơn hàng trên 599.000đ",
  },
  {
    icon: service3,
    width: "44px",
    title: "Đổi trả hàng miễn phí",
    content: "Trong 30 ngày kể từ ngày mua",
  },
];

const ContainerBlock: React.FC<props> = ({ isdivider }) => {
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: "0px 7.3%",
        margin: "24px 0px",
      }}
    >
      {Containers.map((container, index: number) => (
        <div key={index}>
          <Grid2 container display={"flex"} sx={{ alignItems: "flex-start" }}>
            <Grid2 size={2}>
              <Box
                component={"img"}
                src={container.icon}
                width={container.width}
              />
            </Grid2>
            <Grid2 size={8}>
              <Stack sx={{ width: "300px" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "17px" }}>
                  {container.title}
                </Typography>
                <Typography sx={{ fontWeight: 500, color: "#73727d" }}>
                  {container.content}
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          {isdivider && index != 2 && (
            <Divider orientation="vertical" flexItem />
          )}
        </div>
      ))}
    </Box>
  );
};

export default ContainerBlock;
