import { Box } from "@mui/material";

import NuBanner from "../../assets/image/Nu_cate_desktop-210425.webp";

const WomenCategory = () => {
  return (
    <>
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

export default WomenCategory;
