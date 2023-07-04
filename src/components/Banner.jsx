import React from 'react'
import { Box, Divider, Grid, Typography } from "@mui/material"

export const Banner = ({ bgImage, image, page, intro }) => {

    return (
        <Box className="banner" sx={{
            background: `url(${bgImage})`,
            backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            boxShadow: "inset 0 0 0 2000px rgba(255,255,255, 0.1)"
        }}>
            <Grid container spacing={2} alignItems={'center'}  sx={{paddingY:10}}>
                <Grid item xs={12} lg={6} bgcolor={'rgba(255,255,255, 0.9)'}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom:18 }}>
                        <Typography className='mondwest' sx={{ fontSize: { xs: '70px', sm: '100px', } }}>{page}</Typography>
                        <Divider sx={{ width: '80%', backgroundColor: 'black', p: 1 }} />
                        <Typography className='mondwest' sx={{ px: 5, pt: 3, fontSize: { xs: '20px', sm: '30px', } }}>{intro}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} >
                    {/* <img style={{ borderRadius: '50%' }} width={400}  src={image} /> */}
                </Grid>
            </Grid>
        </Box>
    )
}