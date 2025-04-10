import { Box, Button, Grid2, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MenuDropdown from "../ui/MenuDropdown";
import {
  benam1Menulist,
  benam2Menulist,
  benu1Menulist,
  benu2Menulist,
  nam1Menulist,
  nam2Menulist,
  nu1Menulist,
  nu2Menulist,
} from "../../assets";
import { styles } from "../../utils/constants/styleGlobal";
import React from "react";
import LoginScreen from "../../pages/auth/LoginScreen";
const HeaderComponent = () => {
  const [anChorEl, setAnChorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnChorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnChorEl(null);
  };
  const open = Boolean(anChorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Grid2
        container
        justifyContent={"space-around"}
        sx={{ paddingBlock: 2.5 , position: "sticky", top: 0, zIndex: 100 , backgroundColor: "white"}}
      >
        <Grid2 container alignItems={"center"} spacing={1}>
          <Button variant="contained" color="secondary">
            APOLLO
          </Button>
          <MenuDropdown
            text={"Nam"}
            rel1={
              <Box
                component={"img"}
                src={nam1Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            rel2={
              <Box
                component={"img"}
                src={nam2Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            open={open}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            anChorEl={anChorEl}
          />
          {/* <MenuDropdown
            text={"Nữ"}
            rel1={
              <Box
                component={"img"}
                src={nu1Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            rel2={
              <Box
                component={"img"}
                src={nu2Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            open={open}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          
            
          />
          <MenuDropdown
            text={"Bé Trai"}
            rel1={
              <Box
                component={"img"}
                src={benam1Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            rel2={
              <Box
                component={"img"}
                src={benam2Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            open={open}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
          />
          <MenuDropdown
            text={"Bé Gái"}
            rel1={
              <Box
                component={"img"}
                src={benu1Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            rel2={
              <Box
                component={"img"}
                src={benu2Menulist}
                sx={{ ...styles.menuimg }}
              />
            }
            open={open}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />  */}
          <Button variant="text">Apollos</Button>
        </Grid2>
        <Grid2 container spacing={4} alignItems={"center"}>
          <Paper
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              width: 280,
              height: 40,
            }}
          >
            <SearchIcon color="action" sx={{ flex: 1 }} />
            <InputBase sx={{ flex: 3 }} placeholder="Tìm Kiếm" />
          </Paper>
          <LoginScreen/>
          <Button
            sx={{
              flexDirection: "column",
            }}
          >
            <StorefrontOutlinedIcon />
            Giỏ Hàng
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default HeaderComponent;
