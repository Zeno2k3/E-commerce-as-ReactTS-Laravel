import { Box, Checkbox, Divider, IconButton, Stack, Typography, alpha } from "@mui/material";
import RouterLink from "../layouts/RouterLink";

import image1 from '../../assets/image-product/6ot25s003-sb128-2a.webp';
import image2 from "../../assets/image-product/6ot25s003-sb128-m-1-u.webp";
import image3 from "../../assets/image-product/6ot25s003-sb128-thumba.webp";
import image4 from "../../assets/image-product/6ot25s003-sm090-6 (1).webp";
import image5 from "../../assets/image-product/6ot25s003-sm090-6.webp";
import image6 from "../../assets/image-product/6ot25s003-sm090-thumb.webp";

import { useState } from "react";

import thurm_nail from "../../assets/image-product/freeship_tagdetail_desktop-02oct_1.webp"


import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import sab405 from "../../assets/imgae-color/sa405.webp";
import sb128 from "../../assets/imgae-color/sb128.webp";
import Item from "./Item";
import ButtonAccount from "../my-account/ui/ButtonAccount";
import MenuDropProduct from "./MenuDropProduct";


const MoTa = "Áo polo nam basic dáng regular với bảng màu đa dạng, dễ dàng lựa chọn cho nhiều đối tượng khách hàng"
const hds = "Giặt máy ở chế độ nhẹ, nhiệt độ thường.Không sử dụng hóa chất tẩy có chứa Clo.Phơi trong bóng mát.Sấy khô ở nhiệt độ thấp.Là ở nhiệt độ thấp 110 độ C.Giặt với sản phẩm cùng màu.Không là lên chi tiết trang trí."
const chatlieu = "aksldaddddđ;;l"

const ListLink = [
  {
    name: "Trang chủ",
    url: "",
  },
  {
    name: "Nam",
    url: "men",
  }
  ,
  {
    name: "Áo khoác & áo giữ nhiệt",
    url: ""
  },
  {
    name: "Áo khoác gió",
    url: ""
  }
]

const ListImage = [
  {
    color: "Xanh Dương SB128",
    color_image: sb128,
    images: [image1, image2, image3, image4, image5, image6, image1, image2, image3],
  }
  ,
  {
    color: "Hồng SM090",
    color_image: sab405,
    images: [image4, image5, image6],
  }
]

const Size = [
  'L', 'M', 'XL', 'XXL'
]

const ProductDetails = () => {

  const [color, setColor] = useState<string>(ListImage[0].color);
  const [size, setSize] = useState<string>(Size[0]);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentColorData = ListImage[selectedColorIndex]
  const totalImages = currentColorData.images.length

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  return (
    <Box
      sx={{
        backgroundColor: alpha("#d9d9d9", 0.1),
      }}
    >
      <Box sx={{ p: "20px 7%" }}>
        <RouterLink ListLink={ListLink} currentLink="Áo khoác chống nắng nam" />
        <Box sx={{ display: "flex", mt: "20px", width: "100%" }}>
          <Box width={"45%"} sx={{ position: "relative" }}>
            <Box
              className="main-image"
              component={'img'}
              src={currentColorData.images[currentImageIndex]}
              width={"100%"}
              sx={{
                ml: "5px",
                transition: "all 0.3s ease-in-out",
              }}

            />
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
          <Stack className="image-list" sx={{
            width: "10%",
            ml: "40px",
            height: "545px",
            mt: "-6px",
            overflow: 'hidden'
          }}>
            {currentColorData.images.map((image, index) => (
              <Box
                key={index}
                component={'img'}
                src={image}
                width={"85px"}
                sx={{
                  cursor: "pointer",
                  p: '5px',
                  border: currentImageIndex === index ? "1px solid" : "none",
                  borderRadius: "2px",
                  transition: "border 0.3s ease",
                }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </Stack>
          <Box className='content'
            sx={{
              width: "40%",
              mt: "-6px"
            }}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>Áo khoác chống nắng nữ</Typography>
              <Checkbox sx={{ backgroundColor: "#fff" }} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              mt: "-10px"
            }}>
              <Typography sx={{ color: "#000" }}>Mã sp:</Typography>
              <Typography sx={{ fontWeight: 500 }}> 6OT25S003-SB128</Typography>
            </Box>
            <Box className="typography-price-title" sx={{ mt: "20px", display: "flex", alignItems: "center", gap: 1, mb: "10px" }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>549.000</Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, textDecoration: 'underline' }}>đ</Typography>
            </Box>
            <img src={thurm_nail} alt="thumer-nail" width={"100%"} style={{ marginBottom: "20px" }} />
            <Box sx={{ display: "flex", alignItems: 'center', my: "5px", gap: 1 }}>
              <Typography >Kích thước: </Typography>
              <Typography sx={{ color: '#000', fontWeight: 500 }}>{color}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {ListImage.map((item, index) =>
              (<Item
                type='color'
                key={index}
                image={item.color_image}
                onClick={() => {
                  setColor(item.color)
                  setSelectedColorIndex(index)
                }}
                sx={{
                  borderColor: item.color == color ? "#000" : "#e6e7e8",
                  borderRadius: '1px'
                }}
              />))}
            </Box>
            <Box sx={{ display: "flex", alignItems: 'center', my: "5px", gap: 1 }}>
              <Typography >Kích thước: </Typography>
              <Typography sx={{ color: '#000', fontWeight: 500 }}>{size}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {Size.map((item, index) =>
              (<Item
                type='size'
                key={index}
                text={item}
                onClick={() => setSize(item)}
                sx={{
                  borderColor: item == size ? "#000" : "#e6e7e8",
                  borderRadius: '1px'
                }}
              />))}
            </Box>
            <Box sx={{ display: "flex", alignItems: 'center', my: "5px", gap: 1 }}>
              <ButtonAccount text={"Thêm vào giỏ"} width="60%" />
              <ButtonAccount
                text={"Tìm tại cửa hàng"}
                width="40%"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #CBD5E1"
                }} />
            </Box>
            <Divider
              sx={{
                mt: "30px",
                mb: "20px",
                backgroundColor: alpha("#d9d9d9", 0.1),
              }}
            />
            <MenuDropProduct title={"Mô tả"} deprision={MoTa} />
            <MenuDropProduct title={"Chất liệu"} deprision={chatlieu} />
            <MenuDropProduct title={"Hướng dẫn sử dụng"} deprision={hds} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
