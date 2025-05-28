import { Box, Button, IconButton, Typography } from "@mui/material";

import ProductItem from "./Product-item";

import sab405 from "../../assets/imgae-color/sa405.webp";
import sb128 from "../../assets/imgae-color/sb128.webp";

import image1 from "../../assets/image/6ot25s003-sb128-thumba.webp";
import image2 from "../../assets/image/6ot25s003-sm090-thumb.webp";
import React, { useRef, useState } from "react";
import theme from "../../utils/constants/theme";

import IconLeft from "@mui/icons-material/ChevronLeftOutlined";
import IconRight from "@mui/icons-material/ChevronRightOutlined";

interface BlockProductProps {
  title?: string;
  banner: string;
  isRow?: boolean;
}

const Products = [
  {
    id: 1,
    masp: "3OT25S001",
    name: "Áo khoác da beo",
    price: "299.000 đ",
    priceSale: "311.000 đ",
    percent: "14%",
    slg: 'ao-khoac-da-beo',
    colorVariants: [
      {
        image: image2,
        colorImage: sb128,
        Sizes: ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"],
      },
      {
        image: image1,
        colorImage: sab405,
        Sizes: ["S", "L", "XL", "XXL"],
      },
    ],
  },
  {
    id: 2,
    masp: "3OT25S001",
    name: "Áo khoác da mèo",
    price: "299.000 đ",
    slg: 'ao-khoac-da-meo',
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
    masp: "3OT25S001",
    name: "Áo khoác da thú",
    price: "299.000 đ",
    slg: 'ao-khoac-da-thu',
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
    masp: "3OT25S001",
    name: "Áo khoác da chim",
    slg: 'ao-khoac-da-chim',
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
    masp: "3OT25S001",
    name: "Áo khoác da trâu",
    price: "299.000 đ",
    slg: 'ao-khoac-da-trau',
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
    masp: "3OT25S001",
    name: "Áo khoác da người",
    slg: 'ao-khoac-da-nguoi',
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
    masp: "3OT25S001",
    name: "Áo khoác da chó",
    slg: 'ao-khoac-da-cho',
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
    masp: "3OT25S001",
    name: "Áo khoác da bò",
    slg: 'ao-khoac-da-bo',
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

const Buttons = [<IconLeft />, <IconRight />];

const BlockProduct: React.FC<BlockProductProps> = ({
  title,
  banner,
  isRow = false,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 412; // width của mỗi item

  const handleScroll = (newIndex: number) => {
    const total = Products.length;
    const wrappedIndex = (newIndex + total) % total;
    setCurrentIndex(wrappedIndex);
    scrollRef.current?.scrollTo({
      left: wrappedIndex * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <Box
      className={"block-products"}
      sx={{
        padding: isRow == true ? "20px 7%" : "20px 7.7%",
        position: "relative",
        w: "100%",
      }}
    >
      <Typography
        sx={{
          m: isRow == false ? "0px -8px" : "0px 8px",
          fontWeight: 700,
          fontSize: 20,
          pb: 1,
        }}
      >
        {title}
      </Typography>
      {isRow == false ? (
        <>
          <Box
            className={"column"}
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
              sx={{
                cursor: "pointer",
                objectFit: "fill",
                p: "0px 8px",
              }}
            />
            <Box
              className={"product-block-column-item"}
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
                  slg={product.slg}
                  ProductID={product.masp}
                  price={product.price}
                  priceSale={product.priceSale}
                  percent={product.percent}
                  swatchColor={product.colorVariants}
                />
              ))}
            </Box>
          </Box>
          <Button
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
        </>
      ) : (
        <Box className={"row"} sx={{ width: "100%", display: "flex", gap: 3 }}>
          <Box
            component={"img"}
            src={banner}
            width={"32%"}
            sx={{
              cursor: "pointer",
              objectFit: "fill",
              p: "0px 8px",
              mr: "20px",
            }}
          />
          <Box
            ref={scrollRef}
            className={"product-block-row-item"}
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "0px -4px",
              overflow: "hidden",
              gap: 1,
            }}
          >
            {Products.map((product, index) => (
              <ProductItem
                key={index}
                sxDiv={{ margin: "0px 0px 60px", padding: "0px 12px" }}
                sxImg={{ width: "379px" }}
                name={product.name}
                price={product.price}
                slg={product.slg}
                ProductID={product.masp}
                priceSale={product.priceSale}
                percent={product.percent}
                swatchColor={product.colorVariants}
              />
            ))}
          </Box>
          <Box
            sx={{
              textAlign: "center",
              width: "54%",
              borderRadius: 2,
              top: "35%",
              right: "8%",
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              zIndex: 50,
            }}
          >
            {/*các nút điều hướng bên trái và bên phải */}
            {Buttons.map((button, index) => (
              <IconButton
                key={index}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "black",
                  borderRadius: "100%",
                  width: 56,
                  height: 56,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                }}
                onClick={
                  index == 0
                    ? () => handleScroll(currentIndex - 1)
                    : () => handleScroll(currentIndex + 1)
                }
              >
                {button}
              </IconButton>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BlockProduct;
