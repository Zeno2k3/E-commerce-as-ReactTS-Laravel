import { alpha, Divider, SxProps, Typography } from '@mui/material'
import { useState } from 'react'
import icon_down from "../../assets/svg/icon-category.svg";
import { Theme } from '@emotion/react';

interface Props {
    title: string;
    deprision: string;
    sx?: SxProps<Theme>
}

const MenuDropProduct: React.FC<Props> = ({ title, deprision, sx }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Typography
                onClick={() => setIsOpen((prev) => !prev)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 700,
                    py: '10px',
                    cursor: "pointer",
                    ...sx,
                }}
            >
                {title}
                <img
                    src={icon_down}
                    alt="down"
                    style={{
                        transition: "transform 0.3s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </Typography>

            {isOpen && (
                <Typography sx={{ fontWeight: 500, textAlign: 'justify' }}>
                    {deprision}
                </Typography>
            )}
            <Divider
                sx={{
                    my: '8px',
                    backgroundColor: alpha("#d9d9d9", 0.1),
                }}
            />

        </>
    )
}

export default MenuDropProduct