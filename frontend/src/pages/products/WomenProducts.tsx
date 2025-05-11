import { Box } from "@mui/material";
import { HeaderComponent } from "../../components";

import NuBanner from "../../assets/image/Nu_cate_desktop-210425.webp";

const WomenProducts = () => {
  return (
    <>
      <HeaderComponent />
      <Box
        component={"img"}
        src={NuBanner}
        sx={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default WomenProducts;
