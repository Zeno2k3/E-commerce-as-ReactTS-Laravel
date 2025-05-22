import { Box, Divider } from "@mui/material";
import { BannerSlider, BlockProductComponent } from "../../components";

import image from "../../assets/image/chongnang_blockhomepage_desktop-140425.webp";
import ContainerBlock from "../../components/layouts/Block-container";
import BlockVoucher from "../../components/home/Block-voucher";
import BlockCollection from "../../components/home/Block-collection";
import FromLogin from "../auth/FromLogin";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <BannerSlider />
      <ContainerBlock isdivider={false} />
      <Divider flexItem />
      <BlockVoucher />
      <BlockCollection />
      <BlockProductComponent title={"Áo chống nắng"} banner={image} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FromLogin />
        <Link to="/checkout">Thanh Toán</Link>

        <Link to="/men/gia-moi">Men</Link>
      </Box>
    </>
  );
};
export default Homepage;
