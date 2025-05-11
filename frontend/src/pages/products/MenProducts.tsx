import { Box } from "@mui/material";
import { HeaderComponent } from "../../components";

import NamBanner from "../../assets/image/Nam_cate_desktop-210425.webp";

const MenProducts = () => {
  return (
    <>
      <HeaderComponent />
      <Box
        component={"img"}
        src={NamBanner}
        sx={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default MenProducts;
