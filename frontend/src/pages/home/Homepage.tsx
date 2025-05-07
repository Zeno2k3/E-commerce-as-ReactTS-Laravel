import { Divider } from "@mui/material";
import { FooterComponent, HeaderComponent } from "../../components";
import BannerSlider from "../../components/layouts/Bannerslider";
import ProductItem from "../../components/layouts/Product-item";

import sab405 from "../../assets/imgae-color/sa405.webp";
import sb128 from "../../assets/imgae-color/sb128.webp";

import image1 from "../../assets/image/6ot25s003-sb128-thumba.webp";
import image2 from "../../assets/image/6ot25s003-sm090-thumb.webp";

const Products = [
  {
    id: 1,
    masp: "3OT25S001-SA405",
    name: "Áo khoác da beo",
    price: "299.000 đ",
    priceSale: "311.000 đ",
    percent: "14%",
    colorVariants: [
      {
        image: image1,
        colorImage: sab405,
      },
      {
        image: image2,
        colorImage: sb128,
      },
    ],
  },
  {
    id: 2,
    masp: "3OT25S001-SA406",
    name: "Áo khoác da mèo",
    price: "299.000 đ",
    priceSale: "311.000 đ",
    percent: "14%",
    colorVariants: [
      {
        image: image1,
        colorImage: sab405,
      },
      {
        image: image2,
        colorImage: sb128,
      },
    ],
  },
  {
    id: 3,
    masp: "3OT25S001-SA407",
    name: "Áo khoác da bò",
    price: "299.000 đ",
    priceSale: "311.000 đ",
    percent: "14%",
    colorVariants: [
      {
        image: image1,
        colorImage: sab405,
      },
      {
        image: image2,
        colorImage: sb128,
      },
      {
        image: image2,
        colorImage: sb128,
      },
    ],
  },
];

const Homepage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerSlider />
      <Divider variant="middle" />
      <FooterComponent />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {Products.map((product) => (
          <ProductItem
            sxDiv={{ m: "0px 0px 30px", p: "0px 16px" }}
            sxImg={{ width: "341px" }}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            priceSale={product.priceSale}
            percent={product.percent}
            swatchColor={product.colorVariants}
          />
        ))}
      </div>
    </>
  );
};
export default Homepage;
