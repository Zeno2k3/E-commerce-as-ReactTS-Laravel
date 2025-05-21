import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import checkIcon from "../../assets/svg/icon-radiobuton.svg";
import icon from "../../assets/svg/icon-radiobutton.svg";
import { useEffect, useMemo, useState } from "react";
import Background from "../../components/layouts/Background";

const dataRadios = [
  {
    value: "female",
    name: "Nam",
  },
  {
    value: "male",
    name: "Nữ",
  },
  {
    value: "other",
    name: "Khác",
  },
];

const Account = () => {
  const [uerName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const Date = "2003-10-1";
  const Phone = "098765431";

  const labels = useMemo(
    () => [
      { label: "Họ tên", value: uerName },
      { label: "Số điện thoại", value: Phone },
      { label: "Email", value: email },
      { label: "Sinh nhật", value: Date },
    ],
    [email, uerName]
  );

  useEffect(() => {
    const userNameDefault =
      labels.find((label) => label.value === "uerName")?.value || "";
    const emailDefault =
      labels.find((label) => label.value === "email")?.value || "";

    if (uerName !== userNameDefault || email !== emailDefault) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [labels, uerName, email]);
  return (
    <Background title="Thông tin tài khoản">
      <Typography
        sx={{
          fontWeight: 600,
          mb: "10px",
        }}
      >
        Giới tính
      </Typography>

      <RadioGroup
        row
        sx={{
          "& .MuiFormControlLabel-label": {
            color: " #74869B",
          },
          "& .Mui-checked + .MuiFormControlLabel-label": {
            color: "#000", // Màu khi checked
          },
          mb: "20px",
        }}
      >
        {dataRadios.map((radio) => (
          <FormControlLabel
            value={radio.value}
            control={
              <Radio
                icon={<Box component={"img"} src={icon} />}
                checkedIcon={<Box component={"img"} src={checkIcon} />}
              />
            }
            label={radio.name}
          />
        ))}
      </RadioGroup>
      {labels.map((label, index) => (
        <Box
          key={index}
          sx={{
            m: "0px 0px 16px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              mb: "10px",
            }}
          >
            {label.label}
          </Typography>
          <TextField
            fullWidth
            id="fullWidth"
            disabled={index == 1 || index == 3}
            sx={{
              backgroundColor: index == 1 || index == 3 ? "#edf1f5" : "#fff",
              "& .MuiInputBase-input": {
                fontWeight: 500,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "2px",
                borderColor: "#CBD5E1",
              },
              "& .MuiOutlinedInput-input": {
                padding: "13px 16px",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderWidth: "1px",
                },
              },
            }}
            value={label.value}
            onChange={
              index == 0
                ? (e) => setUserName(e.target.value)
                : (e) => setEmail(e.target.value)
            }
          />
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{
          mt: "10px",
          padding: "13px 12px",
          borderRadius: "2px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: isChanged == true ? "none" : "#CBD5E1",
          cursor: isChanged == true ? "pointer" : "default",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
          color: isChanged == true ? "#fff" : "#a6b3c2",
          backgroundColor: isChanged == true ? "#da291c" : "#edf1f5",
          fontWeight: 700,
        }}
      >
        Lưu thay đổi
      </Button>
    </Background>
  );
};

export default Account;
