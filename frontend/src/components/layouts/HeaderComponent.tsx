import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useEffect, useState } from "react";

import logo from "../../assets/image/logo.png";
import iconCuaHang from "../../assets/svg/icon-cuahang.svg";
import iconTaiKhoan from "../../assets/svg/icon-taikhoan.svg";
import iconGioHang from "../../assets/svg/icon-giohang.svg";
import iconSearch from "../../assets/svg/icon-search.svg";
import { Link } from "react-router-dom";
import theme from "../../utils/constants/theme";
import MenuContent from "./MenuContent";

import { initialListMenu } from "../../utils/constants/ListMenu";
import DialogOder from "../oder/DialogOder";

const Pages = [
  {
    name: "Cửu Hàng",
    image: iconCuaHang,
    url: "store",
  },
  {
    name: "Tài Khoản",
    image: iconTaiKhoan,
    url: "my-account",
  },
  {
    name: "Giỏ Hàng",
    image: iconGioHang,
    url: "",
  },
];

const ChuongTringDB = ["Sản Phẩm Mới", "Canifas"];

const HeaderComponent2 = () => {

  const [isOpenOrder, setIsOpenOder] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerHeight]);

  return (
    <>
      {(openIndex != null || isOpenOrder != false) && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: isOpenOrder ? 400 : 40,
          }}
        />
      )}
      <Box
        ref={headerRef}
        className={"header-container"}
        sx={{
          width: "100vw",
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 150,
          backgroundColor: "#fff",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "16px 7.3%",
          }}
        >
          <Box
            className="header-link-product"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to={"/"}>
              <Box
                component={"img"}
                src={logo}
                width={"70px"}
                mr={"12px"}
                title="HomePage"
              />
            </Link>
            {initialListMenu.map((menu, index) => (
              <Box key={index}>
                <Button
                  className="menu-link"
                  variant="text"
                  onMouseEnter={() => toggleMenu(index)}
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    ml: "8px",
                  }}
                >
                  <Link
                    to={menu.url}
                    style={{
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                    }}
                  >
                    {menu.name}
                  </Link>
                </Button>
                {openIndex == index && (
                  <Box onMouseLeave={() => toggleMenu(index)}>
                    <MenuContent
                      sxMenu={{
                        display: "flex",
                        zIndex: 90,
                        position: "fixed",
                        width: "100vw",
                        top: `${headerHeight}px`,
                        left: 0,
                        right: 0,
                      }}
                      MenuList={{
                        HangMoi: menu.hangmoi,
                        NoiBat: menu.noibat,
                        DanhMucSanPham: menu.dmsp,
                        PhuKien: menu.phukien,
                        imageMenu1: menu.image1,
                        imageMenu2: menu.image2,
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}
            {ChuongTringDB.map((chuongtring) => (
              <Button
                variant="text"
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  p: "0px 16px",
                  mx: "8px",
                }}
              >
                {chuongtring}
              </Button>
            ))}
          </Box>
          <Box
            className="header-link-page"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                borderColor: "#edf1f5",
                width: "280px",
                height: "40px",
                px: "24px",
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: "40px",
                fontSize: "13px",
              }}
            >
              <Box component={"img"} src={iconSearch} width={"24px"} />
              <InputBase
                placeholder="Tìm Kiếm"
                sx={{ pl: "12px", color: "#000" }}
              />
            </Box>
            {Pages.map((page, index) => {
              const content = (
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    mr: "5px",
                  }}
                >
                  <Link
                    to={`/${page.url}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      component={"img"}
                      src={page.image}
                      sx={{
                        width: "24px",
                        mt: "6px",
                      }}
                    />
                  </Link>

                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "13px",
                    }}
                  >
                    {page.name}
                  </Typography>
                </Stack>
              );
              return page.url != "" ? (
                <React.Fragment key={index}>
                  {content}
                </React.Fragment>
              ) : (
                <Typography key={index} onClick={() => { setIsOpenOder(true) }}>{
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      mr: "5px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={page.image}
                      sx={{
                        width: "24px",
                        mt: "6px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Stack>

                }</Typography>
              );
            })}
          </Box>
        </Box>
        <Divider variant={"fullWidth"} />
      </Box>
      {isOpenOrder && (
        <DialogOder onClick={() => { setIsOpenOder(false) }} />
      )}
      <Box sx={{ height: `${headerHeight}px` }} />
    </>
  );
};

export default HeaderComponent2;
