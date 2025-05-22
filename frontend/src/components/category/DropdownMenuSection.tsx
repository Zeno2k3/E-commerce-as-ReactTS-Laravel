import { alpha, Box, Divider, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import icon_down from "../../assets/svg/icon-category.svg";
import { MenuItemType } from "../../utils/types/typeGlobal";

interface DropdownMenuSectionProps {
  title: string;
  items?: MenuItemType[];
  sizes?: string[];
  colors?: string[];
  prices?: number[];
}

const DropdownMenuSection: React.FC<DropdownMenuSectionProps> = ({
  title,
  items = [],
  sizes = [],
  colors = [],
  prices = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);


  const [value, setValue] = useState<[number, number]>([prices[0], prices[1]]);

  const handleChange = (
    event: Event,
    newValue: number | number[]

  ): void => {
    if (Array.isArray(newValue)) {
      setValue([newValue[0], newValue[1]]);
    }
  };


  const handleToggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleToggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };


  const renderItems = () =>
    items.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          padding: "8px 0px",
          ":hover": {
            backgroundColor: alpha("#d9d9d9", 0.1),
          },
          ":hover .text": {
            transform: "translateX(10px)",
            color: "#000",
          },
        }}
      >
        <Typography
          className="text"
          sx={{
            fontWeight: 500,
            color: "#74869b",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
        >
          {item.name}
        </Typography>
      </Box>
    ));

  const renderSizeOptions = () => (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {sizes.map((size, index) => {
        const isSelected = selectedSizes.includes(size);
        return (
          <Box
            key={index}
            onClick={() => handleToggleSize(size)}
            sx={{
              cursor: "pointer",
              margin: "0px 8px 8px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              height: "44px",
              minWidth: "44px",
              border: `1px solid ${isSelected ? "#000" : "#e6e7e8"}`,
              borderRadius: "4px",
              p: "4px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                color: "#74869b",
                textTransform: "uppercase",
              }}
            >
              {size}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );

  const renderColorOptions = () => (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {colors.map((color, index) => {
        const isSelected = selectedColors.includes(color);
        return (
          <Box
            key={index}
            onClick={() => handleToggleColor(color)}
            sx={{
              cursor: "pointer",
              margin: "0px 8px 8px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              height: "44px",
              minWidth: "44px",
              border: `1px solid ${isSelected ? "#000" : "#e6e7e8"}`,
              borderRadius: '4px',
              p: "4px",
            }}
          >
            <img
              src={color}
              alt={`color-${index}`}
              style={{
                width: "100%",
                borderRadius: "100%",
                border: "1px solid #e6e7e8",
                padding: "2px",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );

  const renderPriceOptions = () => (
    <Stack sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography sx={{ fontWeight: 500, ml: "-10px" }}> {value[0]}.000 đ</Typography>
        <Typography sx={{ fontWeight: 500, mr: "-10px" }}> {value[1]}.000 đ</Typography>
      </Box>
      <Slider
        sx={{ width: "80%" }}
        getAriaLabel={() => 'Price range'}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        defaultValue={[0, prices[1]]}
        value={value}
        onChange={handleChange}
        min={prices[0]}
        max={prices[1]}
      />
    </Stack>
  );

  return (
    <Box>
      <Typography
        onClick={() => setIsOpen((prev) => !prev)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 700,
          fontSize: "16px",
          pb: "20px",
          cursor: "pointer",
        }}
      >
        {title}
        <img
          src={icon_down}
          alt="down"
          style={{
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Typography>

      {isOpen && (
        <>
          {items.length > 0
            ? renderItems()
            : sizes.length > 0
              ? renderSizeOptions()
              : colors.length > 0
                ? renderColorOptions()
                : prices.length > 0 ? renderPriceOptions() : null}
        </>
      )}

      <Divider
        sx={{
          mt: isOpen ? "16px" : "0px",
          mb: "16px",
          backgroundColor: alpha("#d9d9d9", 0.1),
        }}
      />
    </Box>
  );
};

export default DropdownMenuSection;
