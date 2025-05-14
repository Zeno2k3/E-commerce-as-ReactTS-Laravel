import { Box } from "@mui/material";

import BoyBanner from "../../assets/image/boy_cate_desktop-030425a.webp";

const ListCategory = [
  [
    'Áo sơ mi & áo kiểu',
    'áo chống nắng',
    "Quần dài",
    "Bộ nỉ/ Quần áo",
    "ÁO KHOÁC & GIỮ nhiệt",
    "ao len",
    "quân áo nỉ",
    "đồ lót",
    "tất vớ",
    'áo phông',
    'áo polo',
    'áo sơ mi & áo kiểu',
  ]
];

const BoyProducts = () => {
  return (
    <div>
      <Box
        component={"img"}
        src={BoyBanner}
        sx={{
          width: "100vw",
        }}
      />
    </div>
  );
};

export default BoyProducts;
