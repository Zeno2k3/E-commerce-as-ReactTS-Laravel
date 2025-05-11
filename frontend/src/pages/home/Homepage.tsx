import { Divider } from "@mui/material";
import {
  FooterComponent,
  BannerSlider,
  BlockProductComponent,
} from "../../components";

import image from "../../assets/image/chongnang_blockhomepage_desktop-140425.webp";
import ContainerBlock from "../../components/layouts/Container-block";
import BlockVoucher from "../../components/home/Block-voucher";
import HeaderComponent from "../../components/layouts/HeaderComponent";
import BlockCollection from "../../components/home/Block-collection";

const Homepage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerSlider />
      <ContainerBlock isdivider={false} />
      <Divider flexItem />
      <BlockVoucher />
      <BlockCollection />
      <BlockProductComponent title={"Áo chống nắng"} banner={image} />
      <FooterComponent />
    </>
  );
};
export default Homepage;
