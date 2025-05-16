import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import InputComponent from "../ui/InputComponent";
import MenuDrops from "../ui/MenuDrops";
import { useState } from "react";
import theme from "../../../utils/constants/theme";
import ButtonAccount from "../ui/ButtonAccount";

import icon from "../../../assets/svg/icon-checkbox.svg";
import iconchecked from "../../../assets/svg/icon-checkboxcheid.svg";

import ClearIcon from "@mui/icons-material/Clear";
import { User } from "../../../pages/accounts/Address";

interface Props {
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const data = [
  {
    title: "Tỉnh / Thành phố",
    array: [
      "An Giang",
      "Bà Rịa - Vũng Tàu",
      "Bạc Liêu",
      "Bắc Giang",
      "Bắc Kạn",
      "Bắc Ninh",
      "Bến Tre",
      "Bình Dương",
      "Bình Định",
      "Bình Phước",
      "Bình Thuận",
      "Cà Mau",
      "Cao Bằng",
      "Cần Thơ",
      "Đà Nẵng",
      "Đắk Lắk",
      "Đắk Nông",
      "Điện Biên",
      "Đồng Nai",
      "Đồng Tháp",
      "Gia Lai",
      "Hà Giang",
      "Hà Nam",
      "Hà Nội",
      "Hà Tĩnh",
      "Hải Dương",
      "Hải Phòng",
      "Hậu Giang",
      "Hòa Bình",
      "Hưng Yên",
      "Khánh Hòa",
      "Kiên Giang",
      "Kon Tum",
      "Lai Châu",
      "Lâm Đồng",
      "Lạng Sơn",
      "Lào Cai",
      "Long An",
      "Nam Định",
      "Nghệ An",
      "Ninh Bình",
      "Ninh Thuận",
      "Phú Thọ",
      "Phú Yên",
      "Quảng Bình",
      "Quảng Nam",
      "Quảng Ngãi",
      "Quảng Ninh",
      "Quảng Trị",
      "Sóc Trăng",
      "Sơn La",
      "Tây Ninh",
      "Thái Bình",
      "Thái Nguyên",
      "Thanh Hóa",
      "Thừa Thiên Huế",
      "Tiền Giang",
      "TP. Hồ Chí Minh",
      "Trà Vinh",
      "Tuyên Quang",
      "Vĩnh Long",
      "Vĩnh Phúc",
      "Yên Bái",
    ],
  },
  {
    title: "Quận / Huyện",
    array: [
      "Quận 1",
      "Quận 3",
      "Quận 4",
      "Quận 5",
      "Quận 6",
      "Quận 7",
      "Quận 8",
      "Quận 10",
      "Quận 11",
      "Quận 12",
      "Quận Bình Tân",
      "Quận Bình Thạnh",
      "Quận Gò Vấp",
      "Quận Phú Nhuận",
      "Quận Tân Bình",
      "Quận Tân Phú",
      "Huyện Bình Chánh",
      "Huyện Cần Giờ",
      "Huyện Củ Chi",
      "Huyện Hóc Môn",
      "Huyện Nhà Bè",
      "Thành phố Thủ Đức",
    ],
  },
];

const wardsDistrict5 = {
  title: "Xã / Phường",
  data: [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
    "Phường 11",
    "Phường 12",
    "Phường 13",
    "Phường 14",
    "Phường 15",
  ],
};

const dataAddress = [
  {
    title: "Họ tên",
    placeholder: "Nhập họ và tên",
  },
  {
    title: "Số điện thoại",
    placeholder: "Nhập số điện thoại",
  },
];

const buttons = [
  { id: "A", name: "Công ty" },
  { id: "B", name: "Nhà riêng" },
];

const DialogItemAddress: React.FC<Props> = ({ title, setOpen, setUser }) => {
  const [activeButton, setAcctiveButton] = useState("A");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const hangleChangeValue = () => {
    setUser({
      name: username,
      isDefault: isDefault,
      typeAddress:
        buttons.find((btn) => btn.id === activeButton)?.name || "Công ty",
      phone: phone,
    });
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "710px",
        padding: "24px 24px 16px 24px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "20px",
          mb: "28px",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", width: "100%", gap: 2, mb: "24px" }}>
        {dataAddress.map((input, index) => (
          <InputComponent
            width="50%"
            key={index}
            value={index == 0 ? username : phone}
            onChange={
              index == 0
                ? (e) => setUsername(e.target.value)
                : (e) => setPhone(e.target.value)
            }
            placeholder={input.placeholder}
            title={input.title}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", width: "100%", gap: 2, mb: "24px" }}>
        {data.map((value, index) => (
          <MenuDrops
            width="50%"
            key={index}
            options={value.array}
            title={value.title}
          />
        ))}
      </Box>
      <MenuDrops
        sx={{ mb: "24px" }}
        options={wardsDistrict5.data}
        title={wardsDistrict5.title}
        width="100%"
      />
      <InputComponent
        width="100%"
        sx={{ mb: "24px" }}
        placeholder={"Tòa nhà, số nhà, tên đường"}
        title={"Địa chỉ chi tiết"}
      />
      <Stack sx={{ display: "flex", width: "100%" }}>
        <Typography sx={{ fontWeight: 600, mb: "10px" }}>
          Loại địa chỉ
        </Typography>
        <Box sx={{ display: "flex", width: "100%", gap: 2, mb: "12px" }}>
          {buttons.map((button) => (
            <Button
              key={button.id}
              variant="contained"
              onClick={() => setAcctiveButton(button.id)}
              sx={{
                width: "50%",
                boxShadow: "none",
                ":hover": {
                  boxShadow: "none",
                },
                padding: "13px 16px",
                color:
                  activeButton == button.id
                    ? "#fff"
                    : theme.palette.primary.main,
                border:
                  activeButton == button.id ? "none" : "1px solid #CBD5E1",
                backgroundColor:
                  activeButton == button.id
                    ? theme.palette.primary.main
                    : "#fff",
              }}
            >
              {button.name}
            </Button>
          ))}
        </Box>
      </Stack>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            onChange={(e) => setIsDefault(e.target.checked)}
            icon={<Box component={"img"} src={icon} />}
            checkedIcon={<Box component={"img"} src={iconchecked} />}
          />
        }
        label="Đặt làm địa chỉ mặc định"
      />
      <ButtonAccount
        text="Lưu địa chỉ"
        width="100%"
        onClick={hangleChangeValue}
      />

      <IconButton
        onClick={() => setOpen(false)}
        children={<ClearIcon />}
        sx={{ top: 20, right: 24, position: "absolute" }}
      />
    </Box>
  );
};

export default DialogItemAddress;
