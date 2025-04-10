import { Button, styled } from "@mui/material";
import React from "react";
import { menulist } from "../../assets";

interface Props {
  text: String;
  icon?: React.ReactElement;
  type: "link" | "primary";
  isNoibat?: boolean;
  onclick?: () => void;
}

const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: '#fff',
  padding: 0,
  color: theme.palette.primary.main,
  '&:hover' : {
     color: theme.palette.secondary.main,
  },
  fontFamily: theme.typography.fontFamily,
  borderWidth: 0,
  fontSize: 14,
  fontWeight: theme.typography.fontWeightMedium,
  textAlign:'left',
  cursor: 'pointer',
}));


const ButtonComponent: React.FC<Props> = ({isNoibat, text, icon, type, onclick }) => {
  return (
    <>
      {type === "link" ? (
        isNoibat ? ( 
          <>
          <CustomButton sx={{
              display: 'flex',
              alignItems: "center",
              gap: 1
          }}>
          <img src={menulist}/>
            {text}
            </CustomButton>
        </> ) : 
        <CustomButton onClick={onclick}>{text}</CustomButton>
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
