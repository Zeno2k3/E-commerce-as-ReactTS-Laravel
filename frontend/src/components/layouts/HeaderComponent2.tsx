import MenuContent from "../ui/MenuContent";

import {
  nam1Menulist,
  nam2Menulist,
  nu1Menulist,
  nu2Menulist,
  benam1Menulist,
  benam2Menulist,
  benu1Menulist,
  benu2Menulist,
} from "../../assets";
import { Box, Button, Divider } from "@mui/material";
import { useRef, useEffect, useState } from "react";

import logo from "../../assets/image/logo.png";

const ListMenu = [
  {
    name: "Nam",
    isMenu: true,
    hangmoi: ["Hàng mới về", "Áo phong cách", "disney"],
    noibat: ["Giá tốt"],
    dmsp: [
      "Áo phông/ Áo thun",
      "Áo polo ",
      "Áo sơ mi & Áo kiểu ",
      "Áo chống nắng",
      "Canifa Active/ Quần áo thể thao",
      "Quần soóc/ Quần short",
      "Quần dài & Quần Jean",
      "Quần áo nỉ",
      "Quần áo nỉ",
      "Quần áo mặc nhà/ Đồ ngủ",
      "Áo khoác & Giữ nhiệt",
      "Áo len",
      "Bộ quần áo",
      "Đồ lót",
      "Tất/Vớ",
    ],
    phukien: ["Hàng mới về", "Áo phong cách", "disney"],
    image1: nam1Menulist,
    image2: nam2Menulist,
  },
  {
    name: "Nữ",
    isMenu: true,
    hangmoi: ["Hàng mới về", "Áo phong cách", "disney"],
    noibat: ["Giá tốt"],
    dmsp: [
      "Áo phông/ Áo thun",
      "Áo polo ",
      "Áo sơ mi & Áo kiểu ",
      "Áo chống nắng",
      "Canifa Active/ Quần áo thể thao",
      "Quần soóc/ Quần short",
      "Quần dài & Quần Jean",
      "Quần áo nỉ",
      "Quần áo nỉ",
      "Quần áo mặc nhà/ Đồ ngủ",
      "Áo khoác & Giữ nhiệt",
      "Áo len",
      "Bộ quần áo",
      "Đồ lót",
      "Tất/Vớ",
    ],
    phukien: ["Hàng mới về", "Áo phong cách", "disney"],
    image1: nu1Menulist,
    image2: nu2Menulist,
  },
  {
    name: "Bé Gái",
    isMenu: true,
    hangmoi: ["Hàng mới về", "Áo phong cách", "disney"],
    noibat: ["Giá tốt"],
    dmsp: [
      "Áo phông/ Áo thun",
      "Áo polo ",
      "Áo sơ mi & Áo kiểu ",
      "Áo chống nắng",
      "Canifa Active/ Quần áo thể thao",
      "Quần soóc/ Quần short",
      "Quần dài & Quần Jean",
      "Quần áo nỉ",
      "Quần áo nỉ",
      "Quần áo mặc nhà/ Đồ ngủ",
      "Áo khoác & Giữ nhiệt",
      "Áo len",
      "Bộ quần áo",
      "Đồ lót",
      "Tất/Vớ",
    ],
    phukien: ["Hàng mới về", "Áo phong cách", "disney"],
    image1: benu1Menulist,
    image2: benu2Menulist,
  },
  {
    name: "Bé Trai",
    isMenu: true,
    hangmoi: ["Hàng mới về", "Áo phong cách", "disney"],
    noibat: ["Giá tốt"],
    dmsp: [
      "Áo phông/ Áo thun",
      "Áo polo ",
      "Áo sơ mi & Áo kiểu ",
      "Áo chống nắng",
      "Canifa Active/ Quần áo thể thao",
      "Quần soóc/ Quần short",
      "Quần dài & Quần Jean",
      "Quần áo nỉ",
      "Quần áo nỉ",
      "Quần áo mặc nhà/ Đồ ngủ",
      "Áo khoác & Giữ nhiệt",
      "Áo len",
      "Bộ quần áo",
      "Đồ lót",
      "Tất/Vớ",
    ],
    phukien: ["Hàng mới về", "Áo phong cách", "disney"],
    image1: benam1Menulist,
    image2: benam2Menulist,
  },
  {
    name: "Sản Phẩm Mới",
    isMenu: false,
    hangmoi: ["Hàng mới về", "Áo phong cách", "disney"],
    noibat: ["Giá tốt"],
    dmsp: [
      "Áo phông/ Áo thun",
      "Áo polo ",
      "Áo sơ mi & Áo kiểu ",
      "Áo chống nắng",
      "Canifa Active/ Quần áo thể thao",
      "Quần soóc/ Quần short",
      "Quần dài & Quần Jean",
      "Quần áo nỉ",
      "Quần áo nỉ",
      "Quần áo mặc nhà/ Đồ ngủ",
      "Áo khoác & Giữ nhiệt",
      "Áo len",
      "Bộ quần áo",
      "Đồ lót",
      "Tất/Vớ",
    ],
    phukien: ["Hàng mới về", "Áo phong cách", "disney"],
    image1: benam1Menulist,
    image2: benam2Menulist,
  },
  {
    name: "Canifas",
    isMenu: false,
    hangmoi: ["Hàng mới về", "Áo phong cách", "disney"],
    noibat: ["Giá tốt"],
    dmsp: [
      "Áo phông/ Áo thun",
      "Áo polo ",
      "Áo sơ mi & Áo kiểu ",
      "Áo chống nắng",
      "Canifa Active/ Quần áo thể thao",
      "Quần soóc/ Quần short",
      "Quần dài & Quần Jean",
      "Quần áo nỉ",
      "Quần áo nỉ",
      "Quần áo mặc nhà/ Đồ ngủ",
      "Áo khoác & Giữ nhiệt",
      "Áo len",
      "Bộ quần áo",
      "Đồ lót",
      "Tất/Vớ",
    ],
    phukien: ["Hàng mới về", "Áo phong cách", "disney"],
    image1: benam1Menulist,
    image2: benam2Menulist,
  },
];

const HeaderComponent2 = () => {
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
      {openIndex != null && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 40,
          }}
        />
      )}
      <Box
        ref={headerRef}
        className={"header-container"}
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: " 24px 7.5%",
          }}
        >
          <Box component={"img"} src={logo} width={"70px"} mr={"24px"} />
          {ListMenu.map((menu, index) => (
            <Box key={index}>
              <Button
                className="menu-link"
                variant="text"
                onMouseEnter={() => toggleMenu(index)}
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  p: "0px 16px",
                  mx: "8px",
                }}
              >
                {menu.name}
              </Button>
              {openIndex == index && menu.isMenu == true && (
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
        </Box>
        <Divider variant={"fullWidth"} />
      </Box>
      <Box sx={{ height: `${headerHeight}px` }} />
    </>
  );
};

export default HeaderComponent2;
