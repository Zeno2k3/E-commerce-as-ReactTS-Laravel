import { Box, Divider, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface PropsRouter {
  ListLink: Array<{
    name: string;
    url: string;
  }>;
  currentLink?: string;
  sx?: SxProps<Theme>;
}

const RouterLink: React.FC<PropsRouter> = ({ ListLink, currentLink, sx }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        ...sx,
      }}
    >
      {ListLink.map((router, index) => (
        <>
          <Link
            to={`/${router.url}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "13px",
                color: "#74869b",
                p: "5px",
              }}
            >
              {router.name}
            </Typography>
          </Link>

          {index < ListLink.length - 1 && (
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderRightWidth: 2,
                color: "#74869b",
              }}
            />
          )}
        </>
      ))}

      <Divider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ borderRightWidth: 2, color: "#74869b" }}
      />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "13px",
          color: "#000",
          p: "5px 0px",
        }}
      >
        {currentLink}
      </Typography>
    </Box>
  );
};

export default RouterLink;
