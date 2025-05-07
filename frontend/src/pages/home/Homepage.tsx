import { Divider } from "@mui/material";
import { FooterComponent, HeaderComponent } from "../../components";
import BannerSlider from "../../components/layouts/Bannerslider";

const Homepage = () => {
  return (
    <div>
      <HeaderComponent />
      <BannerSlider />
      <Divider variant="middle" />
      <FooterComponent />
    </div>
  );
};
export default Homepage;
