import { Stack, SxProps, TextField, Theme, Typography } from "@mui/material";

interface InputProps {
  title?: string;
  value?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  placeholder?: string;
  sx?: SxProps<Theme>;
  width?: string;
}

const InputComponent: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  title,
  sx,
  width,
}) => {
  return (
    <Stack sx={{ ...sx, display: "flex", width: width }}>
      <Typography sx={{ fontWeight: 600, mb: "10px" }}>{title}</Typography>
      <TextField
        placeholder={placeholder}
        value={value}
        fullWidth
        onChange={onChange}
        sx={{
          backgroundColor: "#fff",
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
      />
    </Stack>
  );
};

export default InputComponent;
