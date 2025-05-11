import { Box, Button, Typography } from "@mui/material";

import ProductItem from "../../components/ui/Product-item";

import sab405 from "../../assets/imgae-color/sa405.webp";
import sb128 from "../../assets/imgae-color/sb128.webp";

import image1 from "../../assets/image/6ot25s003-sb128-thumba.webp";
import image2 from "../../assets/image/6ot25s003-sm090-thumb.webp";
import React from "react";
import theme from "../../utils/constants/theme";

interface BlockProductProps {
  title?: string;
  banner: string;
  onClick?: () => void;
  onClickTab?: () => void;
}

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
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"],
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
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
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
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
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
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
      },
    ],
  },
  {
    id: 4,
    masp: "3OT25S001-SA407",
    name: "Áo khoác da bò",
    price: "299.000 đ",
    priceSale: "311.000 đ",
    percent: "14%",
    colorVariants: [
      {
        image: image1,
        colorImage: sab405,
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
      },
    ],
  },
  {
    id: 5,
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
  {
    id: 6,
    masp: "3OT25S001-SA407",
    name: "Áo khoác da bò",
    price: "299.000 đ",
    priceSale: "311.000 đ",
    percent: "14%",
    colorVariants: [
      {
        image: image1,
        colorImage: sab405,
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
      },
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["S", "L", "XL", "XXL"],
      },
    ],
  },
  {
    id: 7,
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

const BlockProduct: React.FC<BlockProductProps> = ({
  title,
  banner,
  onClick,
  onClickTab,
}) => {
  return (
    <Box
      className={"block-product"}
      sx={{ padding: "20px 7.7%", position: "relative" }}
    >
      <Typography
        sx={{
          m: "0px -8px",
          fontWeight: 700,
          fontSize: 20,
          pb: 1,
        }}
      >
        {title}
      </Typography>
      <Box
        className={"row"}
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          margin: "0px -16px",
        }}
      >
        <Box
          component={"img"}
          src={banner}
          width={"100%"}
          onClick={onClick}
          sx={{
            cursor: "pointer",
            objectFit: "fill",
            p: "0px 8px",
          }}
        />
        <Box
          className={"product-block"}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            pt: "30px",
            margin: "0px -4px",
          }}
        >
          {Products.map((product, index) => (
            <ProductItem
              key={index}
              sxDiv={{ margin: "0px 0px 60px", padding: "0px 12px" }}
              sxImg={{ width: "379px" }}
              name={product.name}
              price={product.price}
              priceSale={product.priceSale}
              percent={product.percent}
              swatchColor={product.colorVariants}
            />
          ))}
        </Box>
      </Box>
      <Button
        onClick={onClickTab}
        variant={"outlined"}
        sx={{
          position: "absolute",
          left: "46%",
          bottom: "20px",
          borderWidth: 1,
          p: "8px 16px",
          fontWeight: 700,
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        }}
      >
        Xem tất cả
      </Button>
    </Box>
  );
};

export default BlockProduct;
