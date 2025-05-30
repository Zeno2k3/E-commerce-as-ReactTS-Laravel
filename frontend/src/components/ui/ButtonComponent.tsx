import { Box, Button, styled, SxProps } from "@mui/material";
import React from "react";
import { menulist } from "../../assets";
import { Theme } from "@emotion/react";

interface Props {
  text: string;
  icon?: React.ReactElement;
  type: "link" | "primary";
  sx?: SxProps<Theme>;
  isNoibat?: boolean;
  onclick?: () => void;
}

const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: 0,
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
  fontFamily: theme.typography.fontFamily,
  borderWidth: 0,
  fontSize: 14,
  fontWeight: theme.typography.fontWeightMedium,
  textAlign: "left",
  cursor: "pointer",
}));

const ButtonComponent: React.FC<Props> = ({
  isNoibat,
  text,
  icon,
  type,
  sx,
  onclick,
}) => {
  return (
    <>
      {type === "link" ? (
        isNoibat ? (
          <>
            <CustomButton
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ...sx,
              }}
            >
              <img src={menulist} />
              {text}
            </CustomButton>
          </>
        ) : (
          <>
            <Box sx={{ width: "28px" }} />
            <CustomButton onClick={onclick}>{text}</CustomButton>
          </>
        )
      ) : (
        <>
          {icon ?? icon}
          {<Button>{text}</Button>}
        </>
      )}
    </>
  );
};
export default ButtonComponent;
