import { Box } from "@mui/material";

import BoyBanner from "../../assets/image/boy_cate_desktop-030425a.webp";

const BoyCategory = () => {
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

export default BoyCategory;
