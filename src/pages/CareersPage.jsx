import React, { useState } from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Button, Chip, Divider, Grid, TextField, Typography } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';

export const CareersPage = () => {
    const departmentData = [
        { name: 'All' },
        { name: 'Engineering' },
        { name: 'IT Operations' },
        { name: 'Operations' },
        { name: 'Operations & Admin' },
    ]
    const [department, setDepartment] = useState('All')
    const Filters = () => {
        return (
            <Grid container spacing={0} textAlign={'left'}>
                {departmentData.map((dep, idx) => (<Grid item xs={4} sm={2}>
                    <Chip key={idx} icon={<BusinessIcon />} variant={dep.name === department ? 'filled' : 'outlined'} label={dep.name} onClick={() => { setDepartment(dep.name) }} />
                </Grid>))}
            </Grid>
        )
    }
    const Roles = ({ title, description, department, resp }) => {
        return (
            <div>
                <Box display={'flex'} flexDirection={'row'} justifyContent={''} gap={1} py={2} sx={{

                }}>
                    <TextField placeholder='enter role' size='small' label="search roles" />
                    <Button className='btn button-inspriation' variant='contained' endIcon={<SearchIcon />}>Search Roles</Button>
                </Box>
                <Divider sx={{ borderBottomWidth: 0.3, mb: 1, bgcolor: 'black' }} />
                <Grid container spacing={1} alignItems={'left'} textAlign={'left'}>
                    <Grid item xs={6} lg={6}>
                        <Typography className="mondwest" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '30px' } }}>title</Typography>
                    </Grid>
                    <Grid item xs={6} lg={6} textAlign={'right'}>
                        <Button className='btn text-inspiration ' endIcon={<ArrowOutwardIcon />}>Apply</Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        Description:
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        resp:
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Chip icon={<BusinessIcon />} variant="outlined" label="Engineering" />
                    </Grid>
                </Grid>
            </div>
        )
    }
    const coreValues = [
        { value: 'Teaching & Learning', icon: <LocalLibraryIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Technical Excellence', icon: <LightbulbIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Delivery for Client', icon: <CheckCircleOutlineIcon sx={{ color: '#bdff00' }} /> },
        { value: 'Accountability', icon: <HandshakeIcon sx={{ color: '#bdff00' }} /> }
    ]

    const intro = () => <span>  Be part of our Mission! <br />We are looking for passionate people to join us on our mission</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.IMG_9005} image={images.pc} page={'Careers'} intro={intro()} />
                <Box paddingY={{ xs: 5, sm: 10 }} paddingX={{ xs: 5, sm: 10 }}>
                    <Filters />
                    <Roles title={''} description={''} resp={''} department={''} />
                </Box>

            </div>
            <Footer />
        </div>
    )

}