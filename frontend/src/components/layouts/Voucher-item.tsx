import {
  Box,
  Button,
  Dialog,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import voucher from "../../assets/image/voucher2.png";
import React, { useState } from "react";
import theme from "../../utils/constants/theme";
import { RxCopy } from "react-icons/rx";
import ClearIcon from "@mui/icons-material/Clear";

interface voucherProps {
  name: string;
  content: string;
  HSD: string;
  qrGiamGia: string;
}

const VoucherItem: React.FC<voucherProps> = ({
  name,
  content,
  HSD,
  qrGiamGia,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box
      className="voucher-item"
      sx={{
        backgroundImage: `url(${voucher})`,
        width: "519px",
        height: "116px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        p: "16px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 container width={"379px"}>
        <Stack>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              m: "0px 0px 4px",
            }}
          >
            Voucher {name}K
          </Typography>
          <Typography
            sx={{
              m: "0px 0px 5px",
            }}
          >
            {content}
          </Typography>
        </Stack>
        <Grid2
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            width: "90%",
            height: "24px",
          }}
        >
          <Typography
            sx={{
              color: "#74896b",
              fontSize: "13px",
            }}
          >
            HSD : {HSD}
          </Typography>
          <Button
            variant="text"
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              m: "0px 0px 2px",
            }}
            onClick={() => setOpen(true)}
          >
            Điều kiện
          </Button>
        </Grid2>
      </Grid2>
      <Button
        className="voucher-action"
        variant="contained"
        sx={{
          fontWeight: 600,
          display: "flex",
          p: "8px 10px",
          backgroundColor: "#63b1bc",
        }}
      >
        Lưu Mã
      </Button>
      <Dialog
        className="model-content"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            width: "532px",
            height: "652px",
            p: "32px 24px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            Chi tiết mã ưu đãi
          </Typography>

          <Stack
            sx={{
              w: "100%",
              justifyContent: "center",
              alignItems: "center",
              color: "#333f48",
              m: "32px 0px 12px",
              boxShadow: "#BBB8B7 0px 0px 1px 0px",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: "16px",
                mt: "24px",
                gap: 1,
              }}
            >
              Voucher {name}.000{" "}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                đ
              </Typography>
            </Typography>
            <Box
              component={"img"}
              src={qrGiamGia}
              sx={{
                width: "220px",
                margin: "12px 12px",
                padding: "3px 9px",
                borderColor: "#edf1f5",
                borderRadius: "2px",
                borderStyle: "solid",
                borderWidth: "1px",
              }}
            />
            <Typography
              component={"button"}
              sx={{
                textTransform: "uppercase",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                borderWidth: 0,
                cursor: "pointer",
                mb: "18px",
              }}
            >
              Giam {name} <RxCopy />
            </Typography>
          </Stack>
          <Box>
            <Typography color="#333f48" className="description">
              - Hạn sử dụng: 01/05 – 31/05/2025.
              <br /> - Địa điểm áp dụng: Web, App Canifa - Áp dụng cho toàn bộ
              sản phẩm.
              <br /> - Áp dụng giảm thêm 50k cho hóa đơn có giá trị thanh toán
              cuối cùng từ 999k.
              <br /> - Không áp dụng đồng thời cùng các voucher %, voucher giảm
              toàn đơn và các thẻ mệnh giá có điều kiện khác.
              <br /> - Áp dụng đồng thời cùng chương trình giảm giá thẻ VIP và
              các CTKM.
              <br /> Tính ưu đãi chiết khấu, các CTKM trước, sau đó xét đến điều
              kiện giảm 50k cho hóa đơn từ 999k.
              <br />
              - Áp dụng kèm cấp thẻ VIP, thẻ tích điểm và tích điểm cho các hạng
              thẻ dựa theo giá trị hóa đơn thanh toán cuối cùng.
              <br /> - Áp dụng 01 mã ưu đãi/ 01 hoá đơn thanh toán.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: "100%",
              height: "46px",
              borderRadius: "1px",
              my: "12px",
              fontWeight: 700,
            }}
            onClick={() => setOpen(false)}
          >
            Lưu mã
          </Button>
        </Box>
        <IconButton
          onClick={() => setOpen(false)}
          children={<ClearIcon />}
          sx={{ top: 32, right: 24, position: "absolute" }}
        />
      </Dialog>
    </Box>
  );
};

export default VoucherItem;
