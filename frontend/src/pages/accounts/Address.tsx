import { Box, Dialog, Typography } from "@mui/material";
import Background from "../../components/layouts/Background";
import { useState } from "react";
import DialogItemAddress from "../../components/my-account/layout/DialogItemAddress";

import iconAccount from "../../assets/image/acount.png";
import ButtonAccount from "../../components/my-account/ui/ButtonAccount";

export interface User {
  name: string;
  typeAddress: string;
  isDefault: boolean;
  phone: string;
}

const Address = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User>({
    name: "Minh Quan",
    typeAddress: "Nhà riêng",
    isDefault: true,
    phone: "1111111111",
  });

  return (
    <Background title="Sổ địa chỉ">
      <Box
        sx={{
          width: "100%",
          p: "16px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#edf1f5",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 0px 11px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            351A Lạc Long Quân, Quận 11, Hồ Chí Minh
          </Typography>
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
        </Box>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={"md"}
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: "#333f4840",
              },
            },
          }}
        >
          <DialogItemAddress
            title="Chỉnh sửa địa chỉ"
            setOpen={setOpen}
            setUser={setUser}
          />
        </Dialog>
        <Typography
          sx={{
            color: "#000",
            transform: "scaleY(1.1)",
            margin: "0px 0px 11px",
          }}
        >
          {user.name + "        |        " + user.phone}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "30px",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              transform: "scaleY(1.1)",
            }}
          >
            {user.typeAddress}
          </Typography>
          {user.isDefault && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component={"img"}
                src={iconAccount}
                sx={{ width: "18px", height: "22px", mr: "6px" }}
              />
              <Typography
                sx={{
                  color: "#DA291C",
                  fontWeight: 500,
                }}
              >
                Địa chỉ mặc định
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <ButtonAccount text="Thêm địa chỉ" />
    </Background>
  );
};

export default Address;
