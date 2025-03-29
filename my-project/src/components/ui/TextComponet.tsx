import React from 'react'
import { TextField, Typography } from '@mui/material';

interface Props {
  text: string;
  style: 'title' | 'link'
}

const TextComponet: React.FC<Props> = ({ text, style }) => {
  return (
    style == 'title' ?
      <Typography
        variant="button"
        sx={{
          fontWeight: "bold",
        }}>{text}</Typography> : <TextField>{text}</TextField>

  )
}

export default TextComponet