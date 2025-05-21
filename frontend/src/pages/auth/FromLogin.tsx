import { Box, Dialog, IconButton, Stack, Typography } from "@mui/material";

import bannerLogin from "../../assets/image/Slide55-web_desktop.png";
import InputComponent from "../../components/my-account/ui/InputComponent";
import ButtonAccount from "../../components/my-account/ui/ButtonAccount";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const FromLogin = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isChange, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(phone != "");
  }, [phone]);

  return (
    <>
      <Typography
        component={"button"}
        onClick={() => setOpen(true)}
        sx={{
          fontWeight: 500,
          textDecoration: "underline",
          color: "#63b1bc",
          cursor: "pointer",
          background: "none",
          border: "none",
          p: "0px",
        }}
      >
        Sửa
      </Typography>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "#333f4840",
            },
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            width: "100%",
            backgroundColor: "#fff",
            p: "24px 24px 32px",
            borderRadius: "4px",
          }}
        >
          <Box
            component={"img"}
            src={bannerLogin}
            sx={{
              borderRadius: "8px 8px 0px 0px",
              position: "relative",
            }}
          />
          <IconButton
            onClick={() => setOpen(false)}
            children={<ClearIcon sx={{ color: "#fff" }} />}
            sx={{ top: 24, right: 24, position: "absolute" }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "24px",
              m: "30px 0px 8px",
            }}
          >
            Đăng nhập
          </Typography>

          <Typography
            sx={{
              m: "0px 0px 20px",
              wordWrap: "break-word",
            }}
          >
            Đăng nhập miễn phí để trở thành Khách hàng thân thiết và nhận ưu đãi
            độc quyền từ CANIFA.
          </Typography>

          <InputComponent
            isIcon={phone != ""}
            isLabel={false}
            placeholder="Vui lòng nhập số điện thoại"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            onClear={() => {
              setPhone("");
            }}
          />
          <ButtonAccount
            text={"Tiếp tục"}
            sx={{
              borderColor: isChange == true ? "none" : "#CBD5E1",
              cursor: isChange == true ? "pointer" : "default",
              boxShadow: "none",
              ":hover": {
                boxShadow: "none",
              },
              color: isChange == true ? "#fff" : "#a6b3c2",
              backgroundColor: isChange == true ? "#da291c" : "#edf1f5",
            }}
          />
          <Typography sx={{ mt: "24px" }}>
            * Khi ấn tiếp tục, bạn xác nhận đã đọc và đồng ý với{" "}
            <Typography
              sx={{
                fontWeight: 600,
                color: "#2e90fa",
                display: "inline-block",
              }}
            >
              {" "}
              Điều khoản dịch vụ{" "}
            </Typography>{" "}
            cùng{" "}
            <Typography
              sx={{
                fontWeight: 600,
                color: "#2e90fa",
                display: "inline-block",
              }}
            >
              Chính sách bảo mật
            </Typography>{" "}
            của Canifa.
          </Typography>
        </Stack>
      </Dialog>
    </>
  );
};

export default FromLogin;
