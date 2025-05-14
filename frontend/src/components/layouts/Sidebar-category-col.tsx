import { Stack, Typography } from "@mui/material";

const HMVs = [
    'Hàng mới về',
    'Áo phông gia đình',
    'Disney',
]

const NBs = [
    'Giá tốt'
]

const DMSPs = [
    'Áo phông/ Áo thun',
    'Áo polo',
    'Áo sơ mi',
    'Áo chống nắng',
    'Canifa Active/ Quần áo',
    'Quần soóc/ Quần short',
    'Quần dài & Quần Jean',
    'Quần áo nỉ',
    'Quần áo mặc nhà/Đồ ngủ',
    'Áo khoác & Giữ nhiệt',
    'Áo len',
    'Bộ quần áo',
    'Đồ lót',
    'Tất vớ',
]

const PKs = [
    'Chăn',
    'Khăn mặt',
    'Khăn quàng cổ',
]

const KTs = [
    '98', '100', '111', '122', '130',
    '98', '100', '111', '122', '130',
]

const SideBarCategory = () => {
  return (
    <Stack>
      <Stack>
        <Typography>Hàng mới về</Typography>
      </Stack>
      <Stack>
        <Typography>Nổi bật</Typography>
      </Stack>
      <Stack>
        <Typography>Danh mục sản phẩm</Typography>
      </Stack>
      <Stack>
        <Typography>Kích thước</Typography>
      </Stack>
    </Stack>
  );
};

export default SideBarCategory;
