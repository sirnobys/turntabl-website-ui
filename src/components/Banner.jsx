import React from 'react'
import { Box, Button,Grid, Typography } from "@mui/material"
import { useNavigate } from 'react-router'

export const Banner = ({ bgImage, image, page, intro }) => {
    const navigate = useNavigate()
    return (
        <Box className="banner" sx={{
            background: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: "inset 0 0 0 2000px rgba(0,0,0, 0.5)",
            // height:'80vh'
        }}>
            <Grid container spacing={0} alignItems={'center'} sx={{ paddingY: { xs: 15, sm: 15, } }}>
                <Grid item xs={12} lg={12} align="center">
                    <div className='text-clear-white' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: 2,}}>
                        <Typography className='header-font' sx={{ fontSize: { xs: '40px', sm: '80px', }}}>{page}</Typography>
                        <Typography className='body-font' sx={{ borderRadius:10, px: 2, py: 1,background:"black"  }}>
                           {intro}
                        </Typography>
                        <br />
                        <Button onClick={() => { navigate('/contact') }} className='btn button-disruption button-full-rounded' variant="contained">Let's Chat</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} >
                    {/* <img style={{ borderRadius: '50%' }} width={400}  src={image} /> */}
                </Grid>
            </Grid>
        </Box>
    )
}