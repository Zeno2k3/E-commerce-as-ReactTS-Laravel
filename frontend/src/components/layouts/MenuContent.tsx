import { Box, Divider, Stack, SxProps, Typography } from "@mui/material";
import ButtonComponent from "../ui/ButtonComponent";
import { Theme } from "@emotion/react";

interface MenuProps {
  MenuList: {
    HangMoi: Array<string>;
    NoiBat: Array<string>;
    DanhMucSanPham: Array<string>;
    PhuKien: Array<string>;
    imageMenu1: string;
    imageMenu2: string;
  };
  sxMenu?: SxProps<Theme>;
}

const MenuContent: React.FC<MenuProps> = ({ MenuList, sxMenu }) => {
  return (
    <Box
      className={"submenu-content"}
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        backgroundColor: "white",
        pl: "105px",
        ...sxMenu,
      }}
    >
      <Stack
        className="submenu-content-left"
        sx={{
          display: "flex",
          p: "36px 30px 46px 0px",
          mr: "60px",
          gap: 5,
        }}
      >
        <Stack sx={{ gap: 1.5 }}>
          <Typography
            sx={{
              fontWeight: 700,
              ml: "28px",
            }}
          >
            Hàng Mới
          </Typography>
          {MenuList.HangMoi.map((hangmoi: string, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <ButtonComponent text={hangmoi} type={"link"} />
            </Box>
          ))}
        </Stack>
        <Stack sx={{ gap: 1.5 }}>
          <Typography
            sx={{
              fontWeight: 700,
              ml: "28px",
            }}
          >
            Nổi bật
          </Typography>
          {MenuList.NoiBat.map((noibat: string, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <ButtonComponent text={noibat} type={"link"} />
            </Box>
          ))}
        </Stack>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Box
        className="submenu-content-mid"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: "36px 30px 46px",
          width: "576px",
          height: "372px",
          gap: 1.5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            ml: "28px",
          }}
        >
          Danh Mục Sản Phẩm
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {MenuList.DanhMucSanPham.map((danhmuc: string, index) => (
            <Box
              className="menu-item"
              key={index}
              sx={{
                m: "0px 0px 12px",
                width: "50%",
                display: "flex",
              }}
            >
              <ButtonComponent
                isNoibat={index == 5 || index == 6}
                text={danhmuc}
                type={"link"}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        className={"submenu-content-right"}
        sx={{
          p: "36px 0px 46px",
          display: "flex",
          mx: "32px",
          gap: 2,
        }}
      >
        <Stack
          sx={{
            width: "200px",
            mr: "48px",
            gap: 1.5,
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              width: "50%",
              ml: "28px",
            }}
          >
            Phụ Kiện
          </Typography>
          {MenuList.PhuKien.map((phukien: string, index) => (
            <Box key={index} sx={{ width: "90%", display: "flex" }}>
              <ButtonComponent text={phukien} type={"link"} />
            </Box>
          ))}
        </Stack>
        <Box
          component={"img"}
          src={MenuList.imageMenu1}
          sx={{ width: "207px", height: "290px" }}
        />
        <Box
          component={"img"}
          src={MenuList.imageMenu2}
          sx={{ width: "207px", height: "290px" }}
        />
      </Box>
    </Box>
  );
};

export default MenuContent;
