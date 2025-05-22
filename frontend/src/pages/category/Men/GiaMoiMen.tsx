import { alpha, Box, Stack } from "@mui/material";
import RouterLink from "../../../components/layouts/RouterLink";

const link = [
  {
    name: "Trang chủ",
    url: "",
  },
  {
    name: "Nam",
    url: "men",
  },
];

const currentLink = "Hàng mới";

const MainCategory = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        backgroundColor: alpha("#d9d9d9", 0.1),
        p: "16px 7%",
      }}
    >
      <RouterLink ListLink={link} currentLink={currentLink} />
      <Box sx={{ width: "100%", display: "flex" }}>
       
      </Box>
    </Stack>
  );
};

export default MainCategory;
