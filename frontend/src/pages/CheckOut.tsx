import {
  alpha,
  Box,
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/image/logo.png";
import iconTitle from "../assets/svg/icon-checkout-left01.svg";
import iconTitle1b from "../assets/svg/icon-checkout-left01b.svg";
import iconTitle2 from "../assets/svg/icon-checkout-left02.svg";
import iconTitle3 from "../assets/svg/icon-checkout-left03.svg";
import iconTitle4 from "../assets/svg/icon-checkout-left04.svg";

import checkout from "../assets/image/image-checkout.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import Money from "../assets/svg/img-radiocheckout.svg";
import VnPay from "../assets/svg/img-vnpay.svg";
import Shopeepay from "../assets/svg/shopeepay.svg";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useEffect, useRef, useState } from "react";
import OderItem from "../components/thanhtoan/oderItem";

import oderitemimage from "../assets/image/8ts24s009-se068-thumb.webp";
import oderitemcolor from "../assets/image/se068.png";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import React from "react";
import ButtonAccount from "../components/my-account/ui/ButtonAccount";

const steps = ["Giỏ hàng", "Thanh toán", "Hoàn tất"];

const radios = [
  {
    image: Money,
    value: "Money",
    title: "Thanh toán khi nhận hàng (COD)",
  },
  {
    image: VnPay,
    value: "VnPay",
    title: "Thẻ ATM/Visa/Master/JCB/QR pay qua cổng VNPAY",
  },
  {
    image: Shopeepay,
    value: "Shopeepay",
    title: "Thanh toán bằng ShopeePay",
  },
];

const OderItems = [
  {
    image: oderitemimage,
    color: oderitemcolor,
    name: "Áo phông nam cotton USA phối khoang màu",
    size: "XML",
    nameColor: "se068",
    number: 1,
    TotalPrice: 224.584,
    price: 781.924,
    percent: "70%",
  },
  {
    image: oderitemimage,
    color: oderitemcolor,
    name: "Áo phông nam cotton USA phối khoang màu",
    size: "XML",
    nameColor: "se068",
    number: 1,
    TotalPrice: 224.584,
    price: 781.924,
    percent: "70%",
  },
  {
    image: oderitemimage,
    color: oderitemcolor,
    name: "Áo phông nam cotton USA phối khoang màu",
    size: "XML",
    nameColor: "se068",
    number: 1,
    TotalPrice: 224.584,
    price: 781.924,
    percent: "70%",
  },
];

const CheckOutBox = styled(Stack)(() => ({
  display: "flex",
  backgroundColor: "#fff",
  width: "100%",
  borderRadius: "2px",
  padding: "28px 24px",
  margin: "0px 0px 20px",
  boxShadow: "#74869b14 0px 2px 4px 0px",
}));

const Title = styled(Typography)(() => ({
  display: "flex",
  fontSize: "16px",
  alignItems: "center",
  gap: "10px",
  fontWeight: 700,
  lineHeight: "22px",
}));

const OptionBox = styled(Box)(() => ({
  display: "flex",
  border: "1px #333f48 solid",
  borderRadius: "1px",
  width: "100%",
}));

const RowBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

const CheckOut = () => {
  const [isOnClick, setIsOnClick] = useState<number>(-1);
  const [isTriger, setTriger] = useState<boolean>(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerHeight]);

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: alpha("#d9d9d9", 0.2),
      }}
    >
      <Stack
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 999,
          display: "flex",
          width: "100vw",
        }}
      >
        <Box
          className="checkout-header"
          ref={headerRef}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "30px 7.3%",
            backgroundColor: "#fff",
          }}
        >
          <Link to={"/"}>
            <Box
              component={"img"}
              src={logo}
              width={"70px"}
              mr={"12px"}
              title="HomePage"
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              width: "600px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "33%",
                }}
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    m: "0px 8px 0px 8px",
                    background: index == 1 ? alpha("#2e90fa", 0.3) : "#edf1f5",
                    fontWeight: index == 1 ? 600 : 400,
                    color: index == 1 ? "#2e90fa" : "#000",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                  }}
                >
                  {index + 1}
                </Box>
                <Typography
                  sx={{
                    fontWeight: index == 1 ? 600 : 400,
                    color: index == 1 ? "#2e90fa" : "",
                  }}
                >
                  {step}
                </Typography>
                {index <= 1 && (
                  <Divider
                    sx={{
                      ml: index == 0 ? "25px" : "15px",
                      width: "25%",
                      backgroundColor: alpha("#2e90fa", 0.1),
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
          <Link to={"/"}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Tiếp tục mua sắm
            </Typography>
          </Link>
        </Box>
        <Divider variant={"fullWidth"} />
      </Stack>
      <Box sx={{ height: `${headerHeight}px` }} />
      <Box
        className="checkout-content"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "30px 7.3%",
        }}
      >
        <Stack
          className="checkout-left"
          sx={{
            display: "flex",
            width: "69%",
          }}
        >
          <CheckOutBox>
            <Title>
              <img src={iconTitle} /> Tùy chọn giao hàng
            </Title>
            <OptionBox sx={{ p: "24px", width: "50%", my: "24px" }}>
              <RadioButtonCheckedIcon />
              <Stack sx={{ display: "flex", ml: "10px", gap: "5px" }}>
                <Title>Giao đến địa chỉ</Title>
                <Typography sx={{ fontSize: "12px" }}>
                  Cập nhật thông tin giao hàng để xem chi phí và thời gian giao
                  hàng. Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị
                  vận chuyển. Dự kiến giao hàng 2 - 5 ngày.
                </Typography>
              </Stack>
            </OptionBox>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Title>Minh Quân</Title>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ backgroundColor: "#000", mx: "24px" }}
                />
                <Typography>03455555555</Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                {" "}
                <img src={iconTitle1b}></img>Thay đổi
              </Typography>
            </Box>
            <Typography sx={{ my: "12px" }}>
              351, Quận 11, Hồ Chí Minh
            </Typography>
            <Box
              sx={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                padding: "4px 8px",
                fontWeight: 500,
                backgroundColor: "#edf1f5",
                borderRadius: "32px",
                textTransform: "uppercase",
              }}
            >
              Công ty
            </Box>
          </CheckOutBox>

          <CheckOutBox>
            <Title>
              <img src={iconTitle2} /> Phương thức vận chuyển
            </Title>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#74aa50",
                display: "flex",
                alignItems: "center",
                mt: "12px",
              }}
            >
              <CheckCircleRoundedIcon
                sx={{ width: "16px", mr: "10px", color: alpha("#74aa50", 0.4) }}
              />
              Đơn hàng được miễn phí vận chuyển
            </Typography>
            <OptionBox sx={{ p: "24px", width: "100%", my: "10px" }}>
              <RadioButtonCheckedIcon />
              <Stack
                sx={{ display: "flex", ml: "10px", gap: "5px", width: "100%" }}
              >
                <Title>Giao tiêu chuẩn 2-5 ngày</Title>
                <Typography sx={{ fontSize: "12px" }}>
                  Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận
                  chuyển. Dự kiến giao hàng: 2-5 ngày
                </Typography>
                <Box>
                  <img src={checkout} alt="Đơn vị di chuyển" height={"36px"} />
                </Box>
              </Stack>
              <Typography sx={{ fontWeight: 700, mr: "5px" }}>0</Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  fontWeight: 700,
                }}
              >
                đ
              </Typography>
            </OptionBox>
          </CheckOutBox>
          <CheckOutBox>
            <Title sx={{ mb: "13px" }}>
              <img src={iconTitle3} /> Phương thức thanh toán
            </Title>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {radios.map((radio, index) => (
                <>
                  <FormControlLabel
                    key={radio.value}
                    onClick={() => setIsOnClick(index)}
                    sx={{
                      width: "100%",
                      border: "1px solid",
                      borderRadius: "4px",
                      borderColor: isOnClick == index ? "#000" : "#edf1f5",
                      cursor: "pointer",
                      my: "10px",
                      p: "5px",
                      display: "flex",
                    }}
                    value={radio.value}
                    control={<Radio />}
                    label={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <img src={radio.image} alt={radio.value} />
                        <Typography>{radio.title}</Typography>
                      </Box>
                    }
                  />
                </>
              ))}
            </RadioGroup>
          </CheckOutBox>
          <CheckOutBox>
            <Title>
              <img src={iconTitle4} /> Sản phẩm
            </Title>
            <Stack sx={{ position: "relative", mb: "30px" }}>
              {(isTriger ? OderItems : [OderItems[0]]).map((item, index) => (
                <React.Fragment key={index}>
                  <OderItem
                    name={item.name}
                    image={item.image}
                    color={item.color}
                    colorName={item.nameColor}
                    size={item.size}
                    number={item.number}
                    percent={item.percent}
                    price={item.price}
                    TotalPrice={item.TotalPrice}
                  />
                  <Divider />
                </React.Fragment>
              ))}

              <Button
                onClick={() => setTriger((prev) => !prev)}
                sx={{
                  width: "10%",
                  position: "absolute",
                  bottom: "-50px",
                  right: "50%",
                  color: "#2e90fa",
                  fontWeight: 700,
                }}
              >
                {isTriger ? "Thu gọn" : "Mở rộng"}
                {isTriger ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
              </Button>
            </Stack>
          </CheckOutBox>
        </Stack>
        <Stack
          className="checkout-right"
          sx={{
            display: "flex",
            width: "30%",
          }}
        >
          <CheckOutBox sx={{ gap: 1 }}>
            <Title sx={{ mb: "12px" }}>Chi tiết đơn hàng</Title>
            <RowBox>
              <Typography>Giá trị đơn hàng</Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "10%",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ mr: "3px" }}>99999.000</Typography>
                <Typography
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  đ
                </Typography>
              </Box>
            </RowBox>
            <RowBox>
              <Typography>Chiết khấu</Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "10%",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ mr: "3px", color: "red" }}>
                  99999.000
                </Typography>
                <Typography
                  sx={{
                    color: "red",
                    textDecoration: "underline",
                  }}
                >
                  đ
                </Typography>
              </Box>
            </RowBox>
            <RowBox>
              <Typography>Phí giao hàng</Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "10%",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ mr: "3px" }}>99999.000</Typography>
                <Typography
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  đ
                </Typography>
              </Box>
            </RowBox>
            <Divider sx={{ my: "12px" }} />
            <RowBox>
              <Title>Tổng tiền thanh toán</Title>
              <Box
                sx={{
                  display: "flex",
                  width: "10%",
                  justifyContent: "flex-end",
                }}
              >
                <Typography sx={{ fontWeight: 700, mr: "3px" }}>0</Typography>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    fontWeight: 700,
                  }}
                >
                  đ
                </Typography>
              </Box>
            </RowBox>
            <Typography sx={{ fontSize: "13px" }}>
              {" "}
              (Đã bao gồm thuế VAT)
            </Typography>
            <ButtonAccount text={"Thanh Toán"} />
          </CheckOutBox>
        </Stack>
      </Box>
    </Box>
  );
};

export default CheckOut;
