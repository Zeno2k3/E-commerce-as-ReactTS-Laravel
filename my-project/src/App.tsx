import { Divider } from "@mui/material";
import { FooterComponent, HeaderComponent } from "./components";
import BannerSlider from "./components/layouts/Bannerslider";



function App() {
  return (
    <>
      <HeaderComponent/>
      <BannerSlider/>
      <Divider variant='middle'/>
      <FooterComponent/>
    </>
  );
}
export default App;
