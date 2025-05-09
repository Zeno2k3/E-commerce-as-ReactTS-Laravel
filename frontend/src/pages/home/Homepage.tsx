import { Divider } from "@mui/material";
import {
  FooterComponent,
  HeaderComponent,
  BannerSlider,
  BlockProductComponent,
} from "../../components";

import image from "../../assets/image/chongnang_blockhomepage_desktop-140425.webp";
import ContainerBlock from "../../components/layouts/Container-block";
import BlockVoucher from "../../components/home/Block-voucher";

const Homepage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerSlider />
      <Divider variant="middle" />
      <ContainerBlock isdivider={false} />
      <Divider flexItem />
      <BlockVoucher />
      <BlockProductComponent title={"áo chống nắng"} banner={image} />
      <FooterComponent />
    </>
  );
};
export default Homepage;
