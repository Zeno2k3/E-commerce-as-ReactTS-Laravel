import { Box, SxProps, Theme, Typography } from '@mui/material'

interface Props {
    type: 'size' | 'color',
    onClick: () => void,
    sx?: SxProps<Theme>,
    text?: string,
    image?: string,
}

const Item: React.FC<Props> = ({ type, text, image, onClick, sx }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: "pointer",
                margin: "0px 8px 8px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                height: "44px",
                minWidth: "44px",
                border: `1px solid #e6e7e8`,
                borderRadius: '4px',
                p: "4px",
                ...sx,
            }}
        >
            {type == 'size' ?
                <Typography
                    className="text"
                    sx={{
                        fontWeight: 500,
                        color: "#74869b",
                        textTransform: "uppercase",
                    }}
                >
                    {text}
                </Typography> :
                <img
                    src={image}
                    alt={`color`}
                    style={{
                        width: "100%",
                        borderRadius: "100%",
                        border: "1px solid #e6e7e8",
                        padding: "2px",
                    }}
                />
            }
        </Box >
    )
}

export default Item