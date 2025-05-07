import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { useState } from "react";
import ButtonComponent from "../../components/ui/ButtonComponent";
import theme from "../../utils/constants/theme";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { bannerLogin } from "../../assets";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { RegiterScreen } from "./RegiterScreen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          flexDirection: "column",
        }}
      >
        <AccountCircleOutlinedIcon />
        Tài Khoản
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={bannerLogin}
              alt="Banner"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                display: "block",
              }}
            />

            <IconButton
              sx={{
                position: "absolute",
                top: 2,
                right: 2,
                color: "#fff",
              }}
              onClick={handleClose}
            >
              <ClearIcon />
            </IconButton>
          </Box>
        </DialogContent>
        <DialogTitle
          sx={{ fontSize: 36, fontWeight: theme.typography.fontWeightBold }}
        >
          APOLO CLUB
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <DialogContentText>
            Đăng nhập miễn phí để trở thành Khách hàng thân thiết và nhận ưu đãi
            độc quyền từ Apolo.
          </DialogContentText>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              paddingInline: 1,
            }}
          >
            <DialogContentText>Đăng nhập bằng: </DialogContentText>
            <IconButton
              children={<FaFacebookF color={theme.palette.primary.main} />}
            />
            <IconButton
              children={<BsInstagram color={theme.palette.primary.main} />}
            />
          </Stack>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email" required>
              Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type={"email"}
              label="Email"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%", p: 0 }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              required
              color="warning"
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  ></IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" sx={{ m: 1, width: "100%" }}>
            Đăng Nhập
          </Button>
          <DialogContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <RegiterScreen />
            <ButtonComponent text={"Quên Mật Khẩu"} type="link" />
          </DialogContent>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginScreen;
