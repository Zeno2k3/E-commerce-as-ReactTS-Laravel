import { Box, Divider } from "@mui/material";

import NamBanner from "../../assets/image/Nam_cate_desktop-210425.webp";
import BlockProduct from "../../components/layouts/Block-product";

import AoPolo from "../../assets/image/1.AoPolo_slide_desktop-min-170325.webp";

const MenProducts = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Box
        component={"img"}
        src={NamBanner}
        sx={{
          width: "100vw",
        }}
      />
      <BlockProduct title="Áo Polo" banner={AoPolo} isRow />
      <Divider flexItem />
    </Box>
  );
};

export default MenProducts;
