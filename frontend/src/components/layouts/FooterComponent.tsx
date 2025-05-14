import {
  Box,
  ButtonBase,
  Divider,
  IconButton,
  List,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import ButtonComponent from "../ui/ButtonComponent";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import theme from "../../utils/constants/theme";
import { TfiYoutube } from "react-icons/tfi";
import { SiTiktok } from "react-icons/si";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { logo, logo2 } from "../../assets";
import TextComponet from "../ui/TextComponet";

const FooterComponent = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <Divider variant="fullWidth" />
      <Box alignItems={"center"} display={"flex"} flexDirection={"column"}>
        <Grid2
          container
          sx={{
            display: "flex",
            gap: 16,
            p: "0px 7.3%",
            margin: 3,
            width: "100%",
          }}
        >
          <Stack
            sx={{
              flex: 2,
              gap: 1.9,
            }}
          >
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
              }}
            >
              CÔNG TY CỔ PHẦN APOLlO
            </Typography>
            <List>
              <Typography>
                Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch
                và đầu tư Hà Nội
              </Typography>
              <Typography>
                Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận
                Hà Đông, Thành phố Hà Nội.
              </Typography>
              <Typography>
                Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La
                Thành, Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội
              </Typography>
              <Typography>Điện thoại: +8424 - 7303.0222</Typography>
              <Typography>Fax: +8424 - 6277.6419</Typography>
              <Typography>Email: hello@canifa.com</Typography>
            </List>
            <Stack flexDirection={"row"}>
              <IconButton
                children={<FaFacebookF color={theme.palette.primary.main} />}
              />
              <IconButton
                children={<BsInstagram color={theme.palette.primary.main} />}
              />
              <IconButton
                children={<TfiYoutube color={theme.palette.primary.main} />}
              />
              <IconButton
                children={<SiTiktok color={theme.palette.primary.main} />}
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              flex: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
              }}
            >
              Thương Hiệu
            </Typography>
            <ButtonComponent text={"Giới thiệu"} type="link" />
            <ButtonComponent text={"Tin tức"} type="link" />
            <ButtonComponent text={"Tuyển dụng"} type="link" />
            <ButtonComponent text={"Với cộng đồng"} type="link" />
            <ButtonComponent text={"Hệ thống cửa hàng"} type="link" />
            <ButtonComponent text={"Liên hệ"} type="link" />
          </Stack>
          <Stack
            sx={{
              flex: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
              }}
            >
              Hỗ Trợ
            </Typography>
            <ButtonComponent text={"Hỏi Đáp"} type="link" />
            <ButtonComponent text={"Chính sách KHTT"} type="link" />
            <ButtonComponent
              text={"Điều Kiện - Điều Khoản Chính Sách KHTT"}
              type="link"
            />
            <ButtonComponent text={"Với cộng đồng"} type="link" />
            <ButtonComponent text={"Chính Sách Vận Chuyển"} type="link" />
            <ButtonComponent text={"Gợi ý tìm size"} type="link" />
            <ButtonComponent text={"Kiểm tra đơn hàng"} type="link" />
            <ButtonComponent text={"Tra cứu điểm thẻ"} type="link" />
            <ButtonComponent text={"Chính Sách bảo mật"} type="link" />
          </Stack>
          <Stack
            sx={{
              flex: 2,
            }}
          >
            <TextComponet text={"Tải ứng dụng"} style="title" />
            <TextComponet text={"Phương thức thanh toán"} style="title" />
          </Stack>
        </Grid2>
        <Divider sx={{ width: "88%" }} />
        <Stack
          sx={{
            width: "88%",
            marginY: 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CopyrightIcon fontSize="inherit" />
            <Typography fontWeight={theme.typography.fontWeightBold}>
              {Year} APOLLO
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ButtonBase>
              <img src={logo2} alt="Logo" width={100} height={"auto"} />
            </ButtonBase>
            <ButtonBase>
              <img src={logo} alt="Logo" width={100} height={"auto"} />
            </ButtonBase>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default FooterComponent;
