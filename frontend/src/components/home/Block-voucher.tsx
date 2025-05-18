import { Box, Typography } from "@mui/material";
import VoucherItem from "../layouts/Voucher-item";
import magiamgias from "../../assets/image/magiamgia.png";

const ListVouchers = [
  {
    name: "50",
    content: "Giảm 50k cho đơn từ 999k",
    hsd: "2025-05-31",
    qrGiamGia: magiamgias,
  },
  {
    name: "30",
    content: "Giảm 50k cho đơn từ 499k",
    hsd: "2025-05-31",
    qrGiamGia: magiamgias,
  },
];

const BlockVoucher = () => {
  return (
    <Box
      className={"Block-voucher"}
      sx={{
        padding: "17px 7%",
      }}
    >
      <Typography
        sx={{
          m: "0px 8px",
          fontWeight: 700,
          fontSize: 20,
          pb: 1,
        }}
      >
        Ưu đãi đặc biệt{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {ListVouchers.map((voucher, index) => (
          <VoucherItem
            key={index}
            name={voucher.name}
            content={voucher.content}
            HSD={voucher.hsd}
            qrGiamGia={magiamgias}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BlockVoucher;
