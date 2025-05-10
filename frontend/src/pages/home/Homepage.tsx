import { Divider } from "@mui/material";
import {
  FooterComponent,
  BannerSlider,
  BlockProductComponent,
} from "../../components";

import image from "../../assets/image/chongnang_blockhomepage_desktop-140425.webp";
import ContainerBlock from "../../components/layouts/Container-block";
import BlockVoucher from "../../components/home/Block-voucher";
import HeaderComponent2 from "../../components/layouts/HeaderComponent2";

const Homepage = () => {
  return (
    <>
      <HeaderComponent2 />
      <BannerSlider />
      <ContainerBlock isdivider={false} />
      <Divider flexItem />
      <BlockVoucher />
      <BlockProductComponent title={"áo chống nắng"} banner={image} />
      <FooterComponent />
    </>
  );
};
export default Homepage;
