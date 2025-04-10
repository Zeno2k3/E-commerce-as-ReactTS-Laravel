import { Box, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { mungdaile, smarttopbanner, spmoi, tuanlemoi } from "../../assets";
import IconLeft from "@mui/icons-material/ChevronLeftOutlined";
import IconRight from "@mui/icons-material/ChevronRightOutlined";

const banners = [
  {
    image: mungdaile,
  },
  {
    image: smarttopbanner,
  },
  {
    image: spmoi,
  },
  {
    image: tuanlemoi
  }
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <Box
      sx={{
        width: "100%",
        height: 620,
        backgroundImage: `url(${currentBanner.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "80%",
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
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
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + banners.length) % banners.length
            )
          }
        >
          <IconLeft />
        </IconButton>
        <IconButton
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
          onClick={() =>
            setCurrentIndex(
              (currentIndex + 1) % banners.length
            )
          }
        >
          <IconRight />
        </IconButton>
      </Box>
      <Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {banners.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  index === currentIndex ? "red" : "rgba(255, 255, 255, 1)",
              }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default BannerSlider; 