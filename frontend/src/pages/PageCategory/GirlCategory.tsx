import { Box } from "@mui/material";

import GirlBanner from "../../assets/image/girl_cate_desktop-030425a.webp";

const GirlCategory = () => {
  return (
    <div>
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

export default GirlCategory;
