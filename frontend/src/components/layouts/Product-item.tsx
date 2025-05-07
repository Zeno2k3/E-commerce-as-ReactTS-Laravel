import { Box, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";
import theme from "../../utils/constants/theme";

interface ProductItemProps {
  id: number;
  name?: string;
  price?: string;
  priceSale?: string;
  percent?: string;
  description?: string;
  swatchColor: Array<{
    image: string;
    colorImage: string;
    ma?: string;
  }>;
  sxDiv?: SxProps<Theme>;
  sxImg?: SxProps<Theme>;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  name,
  price,
  priceSale,
  percent,
  swatchColor,
  sxDiv,
  sxImg,
}) => {
  const [image, setImage] = useState<string>(swatchColor[0].image);
  const [indexBorder, setIndexBorder] = useState<number>(0);
  return (
    <>
      <Box
        component={"div"}
        sx={{
          width: "409px",
          height: "647px",
          ...sxDiv,
        }}
      >
        <Box
          component={"img"}
          src={image}
          sx={{ ...sxImg, borderRadius: "4px" }}
        />
        {/*dot image*/}
        <Box
          sx={{
            m: "0px 0px 2px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {swatchColor.map((variant, index: number) => (
            <Box
              component={"img"}
              key={id}
              sx={{
                width: "24px",
                height: "24px",
                borderColor: indexBorder === index ? "#333f48" : "#e6e7e8",
                borderRadius: "100%",
                borderStyle: "solid",
                borderWidth: "1px",
                margin: "8px 8px 8px 0px",
                padding: "2px",
                backgroundSize: "cover",
                cursor: "pointer",
              }}
              src={variant.colorImage}
              onClick={() => {
                setImage(variant.image);
                setIndexBorder(index);
              }}
            />
          ))}
        </Box>
        <Typography
          component={"a"}
          sx={{
            ":hover": {
              color: theme.palette.secondary.main,
              cursor: "pointer",
            },
          }}
        >
          {name}
        </Typography>
        <Box sx={{ pt: "6px" }}>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            {price}
          </Typography>
          <Box display={"flex"} gap={1}>
            <Typography sx={{ textDecorationLine: "line-through" }}>
              {priceSale}
            </Typography>
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.secondary.main }}
            >
              {percent}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductItem;
