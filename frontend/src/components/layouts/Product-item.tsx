import { Box, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";
import theme from "../../utils/constants/theme";

interface ProductItemProps {
  name?: string;
  price?: string;
  priceSale?: string;
  percent?: string;
  description?: string;
  swatchColor: Array<{
    image: string;
    colorImage: string;
    Sizes?: Array<string>;
    ma?: string;
  }>;
  sxDiv?: SxProps<Theme>;
  sxImg?: SxProps<Theme>;
}

const ProductItem: React.FC<ProductItemProps> = ({
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
  const [isHover, setIsHover] = useState<boolean>(false);
  const [addItem, setAddItem] = useState<boolean>(false);
  return (
    <>
      <Box
        component={"div"}
        sx={{
          ...sxDiv,
          position: "relative",
          zIndex: 1,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          setAddItem(false);
        }}
      >
        <Box
          component={"img"}
          src={image}
          sx={{
            ...sxImg,
            borderRadius: "2px",
            cursor: "pointer",
          }}
        />
        {isHover && (
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "#fafafad9",
              top:
                swatchColor[indexBorder].Sizes && addItem
                  ? swatchColor[indexBorder].Sizes.length > 8
                    ? "54%"
                    : "63.5%"
                  : "74%",
              right: "5%",
              width: "90%",
              height:
                swatchColor[indexBorder].Sizes && addItem
                  ? swatchColor[indexBorder].Sizes.length > 8
                    ? "135px"
                    : "100px"
                  : "36px",
              borderRadius: "2px",
              zIndex: 10,
              color: "#333f48",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              cursor: addItem ? "auto" : "pointer",
            }}
            onClick={() => {
              setAddItem(true);
              setIsHover(false);
            }}
          >
            <Typography fontWeight={600} fontSize={13}>
              Thêm vào giỏ hàng
            </Typography>
            {addItem && swatchColor[indexBorder].Sizes && (
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {addItem == true
                  ? swatchColor[indexBorder].Sizes?.map((size: string) => (
                    <Box
                      className={"block-size"}
                      sx={{
                        background: "#fff",
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        borderRadius: "2px",
                        m: "4px",
                      }}
                    >
                      <Typography fontWeight={500}>{size}</Typography>
                    </Box>
                  ))
                  : null}
              </Box>
            )}
          </Box>
        )}
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
              key={index}
              component={"img"}
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
