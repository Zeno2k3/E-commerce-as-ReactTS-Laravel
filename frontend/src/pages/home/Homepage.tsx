import { Divider } from "@mui/material";
import {
  BannerSlider,
  BlockProductComponent,
} from "../../components";

import image from "../../assets/image/chongnang_blockhomepage_desktop-140425.webp";
import ContainerBlock from "../../components/layouts/Block-container";
import BlockVoucher from "../../components/home/Block-voucher";
import BlockCollection from "../../components/home/Block-collection";

const Homepage = () => {
  return (
    <>
      <BannerSlider />
      <ContainerBlock isdivider={false} />
      <Divider flexItem />
      <BlockVoucher />
      <BlockCollection />
      <BlockProductComponent title={"Áo chống nắng"} banner={image} />
    </>
  );
};
export default Homepage;
