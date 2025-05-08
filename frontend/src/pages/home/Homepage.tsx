import { Divider } from "@mui/material";
import { FooterComponent, HeaderComponent } from "../../components";
import BannerSlider from "../../components/layouts/Bannerslider";
import BlockProduct from "../../components/layouts/Block-product";

import image from "../../assets/image/chongnang_blockhomepage_desktop-140425.webp";

const Homepage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerSlider />
      <Divider variant="middle" />
      <FooterComponent />
      <BlockProduct title={"ÁO CHống nắng"} banner={image} />
    </>
  );
};
export default Homepage;
