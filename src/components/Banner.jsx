import React from 'react'
import { Box, Typography } from "@mui/material"

export const Banner = ({ image, page, intro }) => {

    return (
        <Box className="banner" sx={{
            background: `url(${image})`,
            backgroundSize: 'cover',
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)"
        }}>
            <div >
                <Typography color={'white'} sx={{ pb: 5, fontSize: { xs: '70px', sm: '100px', } }}>{page}</Typography>
                <Typography color={'white'} sx={{ pb: 5, fontSize: { xs: '20px', sm: '30px', } }}>{intro}</Typography>
            </div>
        </Box>
    )
}