import React, { useState } from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Button, Chip, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from 'react-router';

export const CareersPage = () => {
    const currentUrlParams = new URLSearchParams(window.location.search);
    const page = currentUrlParams.get("department")
    const navigate = useNavigate()
    const departmentData = [
        { name: 'All' },
        { name: 'Engineering' },
        { name: 'IT Operations' },
        { name: 'Operations' },
        { name: 'Operations Admin' },
    ]
    const [department, setDepartment] = useState(page ?? "All")
    const Filters = () => {
        return (
            <Grid container spacing={0} textAlign={'center'}>
                {departmentData.map((dep, idx) => (<Grid key={idx} item xs={4} sm={2}>
                    <Chip icon={<BusinessIcon />} variant={dep.name.toLocaleLowerCase() === department.toLocaleLowerCase() ? 'filled' : 'outlined'} label={dep.name} onClick={() => { setDepartment(dep.name.toLocaleLowerCase()); navigate('?department=' + dep.name.toLocaleLowerCase()) }} />
                </Grid>))}
            </Grid>
        )
    }

    const RolePreview = () => {
        return (
            <Grid item xs={5} lg={4}>
                <Box sx={{
                    height: 400,
                    overflowY: 'scroll',
                    paddingX: 0,
                    py: 1
                }}>
                    <Box boxShadow={2} padding={1.2} py={2}>
                        <Grid item xs={12} lg={12}>
                            <Typography className="mondwest" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' } }}>title of job goes here</Typography>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'8 days ago'} />
                            <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'full time'} />
                            <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'Department'} />
                        </Grid>
                    </Box>
                </Box>
            </Grid>)
    }

    const RoleDetails = () => {
        console.log('here');
        return (
            <Grid item xs={7} lg={6}>
                <Grid item xs={12} lg={12} py={1}>
                    <Typography className="mondwest" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '30px' } }}>title of job goes here</Typography>
                </Grid>
                <Grid item xs={12} lg={12} py={1}>
                    <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'8 days ago'} />
                    <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'full time'} />
                    <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'Department'} />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography className="mondwest" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Enim, consectetur dicta? Molestiae asperiores,
                        odio voluptate minus obcaecati maiores accusantium ipsa
                        inventore tempore autem accusamus repellat perferendis
                        quidem iure praesentium eos.
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    const Roles = ({ title, description, department, resp }) => {
        return (
            <div>
                <Box display={'flex'} flexDirection={'row'} gap={1} py={2}>
                    <TextField placeholder='enter role' size='small' label="search roles" />
                    <IconButton className='button-software-grey' onClick={() => { }} size="xs" variant="plain" color="neutral">
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ borderBottomWidth: 0.3, mb: 1, bgcolor: 'black' }} />
                <Grid container height={'100vh'} spacing={1} alignItems={'left'} textAlign={'left'}>
                    <RolePreview />
                    <RoleDetails />
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