import { alpha, Box, LinearProgress, Stack, Typography } from "@mui/material";
import RouterLink from "../../components/ui/RouterLink";
import { Link, Outlet } from "react-router-dom";

import profile from "../../assets/svg/profile.svg";
import car from "../../assets/image/card-green.png";

import oder from "../../assets/svg/icon-oder.svg";
import card from "../../assets/svg/icon-card.svg";
import promoCode from "../../assets/svg/icon-codepromo.svg";
import history from "../../assets/svg/icon-history.svg";
import address from "../../assets/svg/icon-address.svg";
import favorite from "../../assets/svg/icon-favious.svg";
import logout from "../../assets/svg/icon-logout.svg";

const Menus = [
  {
    url: "promo-code",
    icon: promoCode,
    name: "Mã ưu đãi",
  },
  {
    url: "oder",
    icon: oder,
    name: "Đơn hàng",
  },
  {
    url: "membership-card",
    icon: card,
    name: "Thẻ thành viên",
  },
  {
    url: "address",
    icon: address,
    name: "Địa chỉ",
  },
  {
    url: "favorite",
    icon: favorite,
    name: "Yêu thích",
  },
  {
    url: "history",
    icon: history,
    name: "Lịch sử",
  },
  {
    url: "/",
    icon: logout,
    name: "Đăng xuất",
  },
];

import { useEffect, useState } from "react";

const ListLink = [
  {
    name: "Trang Chủ",
    url: "",
  },
];

const MyAccount = () => {
  const data: number = 0;
  const [progress, setProgress] = useState(0);
  const [isIndex, setIndex] = useState(-1);

  useEffect(() => {
    return () => setProgress(data);
  }, [data]);

  return (
    <Stack
      sx={{
        width: "99vw",
        p: "20px 7.3%",
        backgroundColor: alpha("#d9d9d9", 0.1),
        display: "flex",
      }}
    >
      <RouterLink currentLink="Tài Khoản" ListLink={ListLink} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack
          className="profile"
          sx={{
            borderRadius: "8px",
            mt: "20px",
            p: "23px 20px 16px",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            boxShadow: "#28293d14 0px 0px 3px 0px",
          }}
        >
          <Box
            className="icon"
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              border: "2.7px solid #ffffff",
              boxShadow: "#333f481a 0px 2.72727px 13.6364px 0px",
              backgroundColor: "#55a67a",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "12px",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "28px",
                color: "#ffffff",
                lineHeight: "42px",
                fontWeight: 700,
              }}
            >
              Q
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "16px",
              lineHeight: "22px",
              gap: 1,
              mb: "12px",
            }}
          >
            Trần Minh Quân
            <Box
              component={"img"}
              src={profile}
              sx={{
                cursor: "pointer",
              }}
            />
          </Typography>
          <Box
            sx={{
              width: "337px",
              height: "105px",
              backgroundImage: `url(${car})`,
              backgroundSize: "cover",
              borderRadius: "8px",
              p: "10px 16px",
              mb: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography color="#ffffff">Hạng thẻ</Typography>
              <Typography color="#ffffff">KHTT</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                color="#ffffff"
                fontWeight={700}
                textTransform={"uppercase"}
              >
                Green
              </Typography>
              <Typography color="#ffffff" fontWeight={700}>
                {progress}
              </Typography>
            </Box>
            <LinearProgress
              sx={{
                backgroundColor: "#e6e7e84d",
                margin: "8px 0px 8px",
                borderRadius: "5px",
                lineHeight: "22px",
              }}
              variant="determinate"
              value={progress}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography color="#ffffff" fontWeight={700}>
                {progress} / 200
              </Typography>
              <Typography color="#ffffff">Gold</Typography>
            </Box>
          </Box>
          {Menus.map((menu, index) => (
            <Box
              key={index}
              sx={{
                width: "112%",
                borderRadius: "2px",
                ":hover": {
                  backgroundColor: "#edf1f5",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                },
                backgroundColor: index == isIndex ? "#edf1f5" : "#ffffff",
                p: "8px 20px",
                m: "0px 0px 1px",
              }}
            >
              <Link
                to={menu.url}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                onClick={() => setIndex(index)}
              >
                <Box
                  component={"img"}
                  src={menu.icon}
                  sx={{
                    backgroundColor: "#fafafa",
                    m: "0px 10px 0px 0px",
                    p: "6px",
                    borderRadius: "4px",
                  }}
                />
                <Typography>{menu.name}</Typography>
              </Link>
            </Box>
          ))}
        </Stack>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MyAccount;
