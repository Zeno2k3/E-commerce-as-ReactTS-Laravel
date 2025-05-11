import { Box, Stack, Typography } from "@mui/material";

import Nam from "../../assets/image/Nam-spMoi-05Mar.webp";
import Nu from "../../assets/image/Nu-spMoi-05Mar.webp";
import BG from "../../assets/image/BG-07Mar.webp";
import BT from "../../assets/image/BT-07Mar.webp";

const DataCollections = [
  {
    image: Nu,
  },

  {
    image: Nam,
  },
  {
    image: BG,
  },
  {
    image: BT,
  },
];

const BlockCollection = () => {
  return (
    <Stack
      className={"block-collection"}
      sx={{
        display: "flex",
        p: "20px 7.5%",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 20,
          pb: 1,
        }}
      >
        {" "}
        Sản phẩm mới
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        {DataCollections.map((collection) => (
          <Box
            component={"img"}
            src={collection.image}
            sx={{
              width: "23%",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default BlockCollection;
