import { Box, IconButton, Stack, Typography } from '@mui/material'

import ClearIcon from "@mui/icons-material/Clear";
import oderitemimage from "../../assets/image/8ts24s009-se068-thumb.webp";
import oderitemcolor from "../../assets/image/se068.png";
import OderItemFrom from './OderItemFrom';
import ButtonAccount from '../my-account/ui/ButtonAccount';
import { Link } from 'react-router-dom';


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
];


const DialogOder: React.FC<DialogOderProps> = ({ onClick }) => {
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
            </Box>
            <Box sx={{
                width: "100%",
                height: "70%",
                padding: "16px 24px",
            }}>
                {OderItems.map((item, index) => (
                    <OderItemFrom key={index} OderObject={
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
                boxShadow: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)"
            }}>
                <Box sx={{ borderBottom: " 1px dashed #CBD5E1", display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px" }}>
                    <Box></Box>
                    <Box></Box>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 700 }}>Tạm tính</Typography>
                </Box>
                <Link to={"/checkout"}>
                    <ButtonAccount text={'Thanh Toán'} sx={{ width: "100%" }} />
                </Link>
            </Box>
        </Stack>
    )
}

export default DialogOder