import { Box, Divider } from "@mui/material";
import { FooterComponent, HeaderComponent } from "../../components";

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
      <HeaderComponent />
      <Box
        component={"img"}
        src={NamBanner}
        sx={{
          width: "100vw",
        }}
      />
      <BlockProduct title="Áo Polo" banner={AoPolo} isRow />
      <Divider flexItem />
      <FooterComponent />
    </Box>
  );
};

export default MenProducts;
