import { alpha, Box, Stack } from "@mui/material";
import RouterLink from "../../../components/layouts/RouterLink";

import { MenuItemType } from "../../../utils/types/typeGlobal";
import DropdownMenuSection from "../../../components/category/DropdownMenuSection";
import { ListColor } from "../../../utils/constants/ListColor";
import Container from "../../../components/category/Container";


const HangMoi: MenuItemType[] = [
  { name: "Hàng mới", url: "hang-moi" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
];

const HangNoiBat: MenuItemType[] = [
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
];

const DanhSachHangNoiBat: MenuItemType[] = [
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
  { name: "Hàng nổi bật", url: "hang-noi-bat" },
  { name: "Giảm giá", url: "giam-gia" },
  { name: "Bán chạy", url: "ban-chay" },
];

const colors = ListColor;

const sizes = ['S', 'M', 'L', 'XL', 'XXL',];

const link = [
  {
    name: "Trang chủ",
    url: "",
  },
  {
    name: "Nam",
    url: "men",
  },
];

const currentLink = "Hàng mới";

const MainCategory = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        backgroundColor: alpha("#d9d9d9", 0.1),
        p: "16px 7%",
      }}
    >
      <RouterLink ListLink={link} currentLink={currentLink} sx={{ mb: "36px" }} />
      <Box sx={{ width: "100%", display: "flex", justifyContent: 'center' }}>
        <Box sx={{
          width: "30%",
          height: "100vh",
          maxHeight: 'calc(100vh - 60px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha("#74869b", 0.5),
            borderRadius: '8px',
          },
        }}>
          <DropdownMenuSection title="Sản phẩm mới" items={HangMoi} />
          <DropdownMenuSection title="Hàng nổi bật" items={HangNoiBat} />
          <DropdownMenuSection title="Danh mục nổi bật" items={DanhSachHangNoiBat} />
          <DropdownMenuSection title="Kích thước" sizes={sizes} />
          <DropdownMenuSection title="Màu sắc" colors={colors} />
          <DropdownMenuSection title="Khoảng giá" prices={[200, 1000]} />
        </Box>
        <Box sx={{ width: "80%", display: "flex", mx: "30px", mt: '-10px' }}>
          <Container title="Hàng mới" />
        </Box>
      </Box>
    </Stack>
  );
};

export default MainCategory;
