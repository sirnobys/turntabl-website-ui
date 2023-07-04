import React from 'react'
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import { useNavigate } from 'react-router'

export const Banner = ({ bgImage, image, page, intro }) => {
const navigate= useNavigate()
    return (
        <Box className="banner" sx={{
            background: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: "inset 0 0 0 2000px rgba(0,0,0, 0.65)"
        }}>
            <Grid container spacing={0} alignItems={'center'} sx={{ paddingY: 12 }}>
                <Grid item xs={12} lg={12} align="center">
                    <div className='text-clear-white' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: 2 }}>
                        <Typography className='mondwest' sx={{ fontSize: { xs: '40px', sm: '70px', } }}>{page}</Typography>
                        <Typography className='mondwest' sx={{ px: 0, pt: 0, fontSize: { xs: '16px', sm: '16px', } }}>
                            We Provide Innovative Software Engineering Solutions <br />To Businesses All Over The World.
                        </Typography>
                        <br />
                        <Button onClick={()=>{navigate('/contact')}} className='btn button-disruption button-full-rounded' variant="contained">Let's Chat</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} >
                    {/* <img style={{ borderRadius: '50%' }} width={400}  src={image} /> */}
                </Grid>
            </Grid>
        </Box>
    )
}