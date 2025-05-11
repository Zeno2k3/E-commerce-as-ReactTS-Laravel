import { Box } from "@mui/material";
import { HeaderComponent } from "../../components";

import BoyBanner from "../../assets/image/boy_cate_desktop-030425a.webp";

const BoyProducts = () => {
  return (
    <div>
      <HeaderComponent />
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
