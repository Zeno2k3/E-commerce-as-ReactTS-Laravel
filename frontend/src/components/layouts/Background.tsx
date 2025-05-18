import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface BackgroundProps {
  title?: string;
  children?: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ title, children }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        p: "24px 20px",
        mt: "20px",
        borderRadius: "8px",
        width: "85%",
        boxShadow: "#74869b14 0px 2px 4px 0px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          mb: "24px",
        }}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default Background;
