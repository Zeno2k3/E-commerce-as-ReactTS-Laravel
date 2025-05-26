import { Box, IconButton, Stack, Typography } from '@mui/material'

import ClearIcon from "@mui/icons-material/Clear";
import oderitemimage from "../../assets/image/8ts24s009-se068-thumb.webp";
import oderitemcolor from "../../assets/image/se068.png";
import OderItemFrom from './OderItemFrom';
import ButtonAccount from '../my-account/ui/ButtonAccount';
import { Link } from 'react-router-dom';

import promoCode from "../../assets/svg/icon-codepromo.svg";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import { useState } from 'react';
import TitleFreeShip from './TitleFreeShip';
interface DialogOderProps {
    onClick: () => void;
}

const OderItems = [
    {
        image: oderitemimage,
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
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
        colorImage: oderitemcolor,
        name: "Áo phông nam cotton USA phối khoang màu",
        size: "XML",
        nameColor: "se068",
        number: 1,
        TotalPrice: 224.584,
        price: 781.924,
        percent: "70%",
    },
];


const DialogOder: React.FC<DialogOderProps> = ({ onClick }) => {
    const [isTriger, setIsTriger] = useState<boolean>(false);
    return (
        <Stack sx={{
            width: "30%", height: "100vh",
            position: "fixed",
            zIndex: 1000,
            right: 0,
            top: 0,
            backgroundColor: "#fff",
        }}>
            <Box sx={{
                padding: "16px 24px",
                width: "100%",
                height: "10%",
                boxShadow: "0px 2px 16px -4px rgba(51, 63, 72, 0.1)",
            }}>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: '16px',
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>Giỏ hàng
                    <IconButton
                        onClick={onClick}
                        children={<ClearIcon />}
                    />
                </Typography>
                <TitleFreeShip />
            </Box>
            <Box sx={{
                width: "100%",
                height: "65%",
                padding: "16px 24px",
                overflowY: "auto",
            }}>
                {OderItems.map((item, index) => (
                    <OderItemFrom key={index} style={{
                        borderBottom: index != OderItems.length - 1 ? " 1px dashed #CBD5E1" : ""
                    }} OderObject={
                        {
                            image: item.image,
                            colorImg: item.colorImage,
                            name: item.name,
                            size: item.size,
                            colorName: item.nameColor,
                            number: item.number,
                            TotalPrice: item.TotalPrice,
                            price: item.price,
                            percent: item.percent,
                        }
                    } />
                ))}
            </Box>
            <Box sx={{
                padding: "16px 24px", width: "100%",
                height: "25%",
                boxShadow: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)"
            }}>
                <Box sx={{
                    borderBottom: " 1px dashed #CBD5E1",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pb: "16px",
                    cursor: "pointer",
                }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src={promoCode} alt="promo code" style={{ width: "20px", marginRight: "8px" }} />
                        <Typography sx={{ fontWeight: 700 }}>Mã ưu đãi</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ color: "#74869B", fontWeight: 500 }}>Chọn hoặc nhập mã</Typography>
                        <KeyboardArrowRightIcon />
                    </Box>
                </Box>
                {isTriger &&
                    <Stack display={"flex"} sx={{ mt: "8px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 500 }}>Giá trị đơn hàng</Typography>
                            <Typography >2.000.000 đ</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 500 }}>Chiết khấu</Typography>
                            <Typography sx={{ color: "red" }}>-488.888 đ</Typography>
                        </Box>
                    </Stack>}
                <Box onClick={() => setIsTriger(!isTriger)} sx={{ display: "flex", justifyContent: "space-between", my: "8px", cursor: "pointer" }}>
                    <Typography sx={{ fontWeight: 700 }}>Tạm tính</Typography>
                    <Stack display={"flex"} alignItems="flex-end" sx={{ cursor: "pointer", display: "flex", gap: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {isTriger ? (
                                <KeyboardArrowUpRoundedIcon />
                            ) : (
                                <KeyboardArrowDownRoundedIcon />
                            )}
                            <Typography sx={{ fontWeight: 700 }}>1.000.000 đ</Typography>
                        </Box>
                        <Typography sx={{ color: "red", fontSize: '12px' }}>(Tiết kiệm 245.000 đ)</Typography>
                    </Stack>
                </Box>
                <Link to={"/checkout"}>
                    <ButtonAccount text={'Thanh Toán'} sx={{ width: "100%" }} />
                </Link>
            </Box>
        </Stack>
    )
}

export default DialogOder