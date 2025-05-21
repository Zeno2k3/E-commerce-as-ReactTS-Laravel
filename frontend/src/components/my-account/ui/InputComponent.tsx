import {
  IconButton,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

interface InputProps {
  title?: string;
  isLabel?: boolean;
  value?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  placeholder?: string;
  sx?: SxProps<Theme>;
  width?: string;
  isIcon?: boolean;
  onClear?: () => void;
}

const InputComponent: React.FC<InputProps> = ({
  value,
  isLabel = true,
  onChange,
  onClear,
  placeholder,
  title,
  sx,
  width,
  isIcon = false,
}) => {
  return (
    <Stack sx={{ ...sx, display: "flex", width: width }}>
      {isLabel && (
        <Typography sx={{ fontWeight: 600, mb: "10px" }}>{title}</Typography>
      )}
      <TextField
        placeholder={placeholder}
        value={value}
        fullWidth
        onChange={onChange}
        sx={{
          backgroundColor: "#fff",
          "& .MuiInputBase-input": {
            fontWeight: 500,
            color: "#000",
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
        slotProps={{
          input: {
            endAdornment: isIcon && (
              <IconButton onClick={onClear} children={<CancelIcon />} />
            ),
          },
        }}
      />
    </Stack>
  );
};

export default InputComponent;
