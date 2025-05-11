import { Box } from "@mui/material";
import { HeaderComponent } from "../../components";

import GirlBanner from "../../assets/image/girl_cate_desktop-030425a.webp";

const GirlProducts = () => {
  return (
    <div>
      <HeaderComponent />
      <Box
        component={"img"}
        src={GirlBanner}
        sx={{
          width: "100vw",
        }}
      />
    </div>
  );
};

export default GirlProducts;
