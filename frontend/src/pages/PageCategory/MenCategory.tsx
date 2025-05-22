import { Box, alpha } from "@mui/material";

import NamBanner from "../../assets/image/Nam_cate_desktop-210425.webp";
import BlockProduct from "../../components/layouts/Block-product";

import AoPolo from "../../assets/image/1.AoPolo_slide_desktop-min-170325.webp";

const MenCategory = () => {
  return (
    <Box
      sx={{
        backgroundColor: alpha("#d9d9d9", 0.1),
      }}
    >
      <Box
        component={"img"}
        src={NamBanner}
        sx={{
          width: "99vw",
        }}
      />
      <BlockProduct title="Áo Polo" banner={AoPolo} isRow />
    </Box>
  );
};

export default MenCategory;
