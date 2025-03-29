import {Button, Popover } from "@mui/material";
import { Box, Divider, Stack } from "@mui/material";
import TextComponet from "./TextComponet";
import ButtonComponent from "./ButtonComponent";
import { styles } from "../../utils/constants/styleGlobal";

import React, { ReactElement } from "react";

interface Props {
  text: string;
  rel1: ReactElement;
  rel2: ReactElement;
  open: boolean;
  anChorEl: HTMLButtonElement | null;
  onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
}

const MenuDropdown: React.FC<Props> = ({
  text,
  rel1,
  rel2,
  open,
  anChorEl,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      <Button
        variant="outlined"
        aria-describedby={"hover-popover"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </Button>
      <Popover
        id={"hover-popover"}
        open={open}
        disableAutoFocus
        anchorEl={anChorEl}
        sx={{
          pointerEvents: "none",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "100vw",
              maxWidth: "100vw",
              marginTop: "30px",
              pointerEvents: "auto",
            },
            onMouseLeave: onMouseLeave
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <>
          <Divider />
          <Stack
            sx={{
              ...styles.rowDisplay,
              width: "100%",
              height: 380,
              marginInline: 16,
            }}
            divider={<Divider orientation="vertical" />}
          >
            <Stack
              sx={{
                gap: 5,
                padding: 4.5,
              }}
            >
              <Stack flexWrap={"wrap"} sx={{ ...styles.khoangcach }}>
                <TextComponet text="Hàng mới" style="title" />
                <ButtonComponent text={"Hàng mới về"} type="link" isNoibat />
                <ButtonComponent text={"Hyper Prep"} type="link" />
                <ButtonComponent text={"Knit wear"} type="link" />
                <ButtonComponent text={"City Nomad"} type="link" />
              </Stack>
              <Stack sx={{ ...styles.khoangcach }}>
                <TextComponet text="Nổi Bật" style="title" />
                <ButtonComponent text={"Giá tốt"} type="link" />
              </Stack>
            </Stack>
            <Stack
              sx={{
                padding: 4.5,
                width: "30%",
                ...styles.khoangcach,
              }}
            >
              <TextComponet text="Danh mục Sản phẩm" style="title" />
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Stack sx={styles.khoangcach}>
                  <ButtonComponent
                    text={"Áo phông/ Áo thun"}
                    type="link"
                    isNoibat
                  />
                  <ButtonComponent text={"Áo polo"} type="link" isNoibat />
                  <ButtonComponent text={"Áo sơ mi"} type="link" />
                  <ButtonComponent text={"Áo chống nắng"} type="link" />
                  <ButtonComponent text={"Áo sơ mi"} type="link" />
                  <ButtonComponent text={"Áo chống nắng"} type="link" />
                  <ButtonComponent
                    text={"Apollo Active/Quần thể thao"}
                    type="link"
                  />
                  <ButtonComponent text={"Quần short"} type="link" />
                  <ButtonComponent text={"Quần dài & Quần Jean"} type="link" />
                </Stack>
                <Stack sx={styles.khoangcach}>
                  <ButtonComponent text={"Quần áo nỉ"} type="link" />
                  <ButtonComponent
                    text={"Quần áo mặc nhà/Đồ ngủ"}
                    type="link"
                    isNoibat
                  />
                  <ButtonComponent text={"Áo khoác"} type="link" />
                  <ButtonComponent text={"Áo len"} type="link" />
                  <ButtonComponent text={"Bộ nỉ/Bộ quần áo"} type="link" />
                  <ButtonComponent text={"Đồ lót"} type="link" />
                  <ButtonComponent text={"Tất/Vớ"} type="link" />
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                padding: 4.5,
                gap: 2,
              }}
            >
              <Stack sx={{ ...styles.khoangcach, marginInlineEnd: 10 }}>
                <TextComponet text="Phụ Kiện" style="title" />
                <ButtonComponent text={"Chăn "} type="link" />
                <ButtonComponent text={"Khăn Mặt"} type="link" />
                <ButtonComponent text={"Khăn Tắm"} type="link" />
                <ButtonComponent text={"Khăn quàng cổ"} type="link" />
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                {rel1 ?? rel1}
                {rel2 ?? rel2}
              </Box>
            </Stack>
          </Stack>
          <Divider />
        </>
      </Popover>
    </>
  );
};

export default MenuDropdown;
