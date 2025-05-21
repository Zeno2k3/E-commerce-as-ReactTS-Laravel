import { Button, SxProps, Theme } from "@mui/material";

interface Props {
  text: string;
  width?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const ButtonAccount: React.FC<Props> = ({ text, width, onClick, sx }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={[
        {
          width: width,
          mt: "10px",
          padding: "13px 12px",
          borderRadius: "2px",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
          color: "#fff",
          backgroundColor: "#da291c",
          fontWeight: 700,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {text}
    </Button>
  );
};

export default ButtonAccount;
