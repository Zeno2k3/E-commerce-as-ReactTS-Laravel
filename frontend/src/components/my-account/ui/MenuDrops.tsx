import {
  Autocomplete,
  Popper,
  PopperProps,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

interface Props {
  options: Array<string>;
  title: string;
  width: string;
  sx?: SxProps<Theme>;
}

// Vị trí Popper
const CustomPopper = (props: PopperProps) => (
  <Popper
    {...props}
    placement="bottom-start"
    modifiers={[
      {
        name: "offset",
        options: {
          offset: [0, 8], // Điều chỉnh khoảng cách giữa input và dropdown
        },
      },
      {
        name: "flip",
        enabled: false, // Ngăn Popper tự động thay đổi vị trí khi không đủ không gian
      },
    ]}
  />
);

const MenuDrops: React.FC<Props> = ({ options, title, width, sx }) => {
  return (
    <Stack sx={{ ...sx, display: "flex", width: width }}>
      <Typography sx={{ fontWeight: 600, mb: "10px" }}>{title}</Typography>
      <Autocomplete
        options={options}
        slots={{ popper: CustomPopper }}
        sx={{
          ".MuiAutocomplete-inputRoot.MuiOutlinedInput-root": {
            padding: "6px",
          },
        }}
        renderInput={(param) => (
          <TextField
            {...param}
            fullWidth
            sx={{
              backgroundColor: "#fff",
              "& .MuiInputBase-input": {
                fontWeight: 500,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "2px",
                borderColor: "#CBD5E1",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderWidth: "1px",
                },
              },
            }}
          />
        )}
      />
    </Stack>
  );
};

export default MenuDrops;
