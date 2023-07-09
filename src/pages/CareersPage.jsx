import React, { useEffect, useState } from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Button, Chip, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from 'react-router';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WorkIcon from '@mui/icons-material/Work';
import CareerApplicationForm from '../components/forms/CareerApplicationForm';

export const CareersPage = () => {
    const currentUrlParams = new URLSearchParams(window.location.search);
    const dep = currentUrlParams.get("department") ?? ""
    const view = currentUrlParams.get("view") ?? ""
    const filter = currentUrlParams.get("filter") ?? ""
    const [careers_, setCareers_] = useState([]);
    const [careers, setCareers] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [search, setSearch] = useState(filter);
    const navigate = useNavigate(currentUrlParams)
    const departmentData = [
        { name: 'All' },
        { name: 'Engineering' },
        { name: 'IT Operations' },
        { name: 'Operations' },
        { name: 'Operations Admin' },
    ]
    let baseUrl = 'http://localhost:5000';
    const [department, setDepartment] = useState(dep ?? "All")

    const handleSearch = (careers = null) => {
        let filter = []
        if (careers) {
            filter = careers.filter(e => [e.name.toLocaleLowerCase()].toLocaleString().includes(search.toLocaleLowerCase()))
            setCareers(filter)
        }
        else {
            filter = careers_.filter(e => [e.name.toLocaleLowerCase()].toLocaleString().includes(search.toLocaleLowerCase()))
            setCareers(filter)
        }
        currentUrlParams.set('filter', search)
        navigate('?' + currentUrlParams.toString())
        // setSelectedCareer(filter[0])

    }

    const setSelectedFromUrl = (careers) => {
       const filter = careers.filter(e => [e.name.toLocaleLowerCase()].toLocaleString().includes(view?.toLocaleLowerCase()))
        setSelectedCareer(filter[0])
    }

    useEffect(() => {
        const fetchCareers = () => {
            fetch(`${baseUrl}/api/v1/careers/`)
                .then(response => response.json())
                .then(data => {
                    setCareers(data.result)
                    setCareers_(data.result)
                    handleSearch(data.result)
                    setSelectedFromUrl(data.result)
                })
        }
        fetchCareers();
    }, [department])

    const handleSelectedCareer = (career) => {
        currentUrlParams.set('view', career.name)
        setSelectedCareer(career)
        navigate('?' + currentUrlParams.toString())
    }
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
                    {careers?.map((career, idx) => (
                        <Button key={idx} className={selectedCareer?.id == career.id ? 'btn button-software-grey' : 'btn'} onClick={() => handleSelectedCareer(career)}>
                            <Box boxShadow={2} padding={1.2} py={2} >
                                <Grid item xs={12} lg={12}>
                                    <Typography className="mondwest text-pixel-black" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' } }}>{career.name}</Typography>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <Chip size='small' icon={<AccessTimeFilledIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={career.date_created.split(' ')[0]} />
                                    <Chip size='small' icon={<WorkIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'full time'} />
                                    <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={career.department} />
                                </Grid>
                            </Box>
                        </Button>
                    ))

                    }
                </Box>
            </Grid>)
    }

    const RoleDetails = () => {
        if (!selectedCareer) {
            return (
                <Grid item xs={7} lg={8}>
                    Select role to view details
                </Grid>
            )
        }
        return (
            <Grid item xs={7} textAlign={'center'} lg={8} height={'60vh'} px={4} sx={{ overflowY: 'scroll' }}>
                <Grid item xs={12} lg={12} py={1}>
                    <Typography className="mondwest" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '30px' } }}>{selectedCareer.name}</Typography>
                </Grid>
                <Grid item xs={12} lg={12} py={1}>
                    <Chip size='small' icon={<AccessTimeFilledIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={selectedCareer.date_created.split(' ')[0]} />
                    <Chip size='small' icon={<WorkIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'full time'} />
                    <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={selectedCareer.department} />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography className="mondwest" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        {selectedCareer.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography className="mondwest" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        {selectedCareer.description}
                    </Typography>
                    <Box pt={4}>
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', sm: '16px' },
                                display: 'flex', justifyContent: 'flex-start',
                            }}
                        >
                            Requirements
                        </Typography>
                        <Box
                            component='ul'
                        >
                            {selectedCareer?.requirements?.map((requirement, idx) => (
                                <Box
                                    component='li'
                                    sx={{
                                        marginLeft: 2
                                    }}
                                    key={idx}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '12px', sm: '16px',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }
                                        }}>{requirement}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box pt={2}>
                            <Typography
                                sx={{
                                    fontSize: { xs: '14px', sm: '16px' },
                                    display: 'flex', justifyContent: 'flex-start'
                                }}
                            >
                                Responsibilities
                            </Typography>
                            <Box
                                component='ul'
                            >
                                {selectedCareer?.responsibilities?.map((responsibility, idx) => (
                                    <Box
                                        component='li'
                                        sx={{
                                            marginLeft: 2
                                        }}
                                        key={idx}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '12px', sm: '16px',
                                                    display: 'flex',
                                                    justifyContent: 'flex-start'
                                                }
                                            }}>{responsibility}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box pt={2}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: '14px', sm: '16px' },
                                }}
                            >
                                Technologies:
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}
                            >
                                {selectedCareer?.technologies?.map((technology, idx) => (
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '12px', sm: '16px' }
                                        }}
                                        key={idx}
                                    >
                                        {technology}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                        <Box pt={2}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <Typography
                                sx={{
                                    display: 'flex', justifyContent: 'flex-start',
                                    fontSize: { xs: '14px', sm: '16px' },
                                }}
                                variant="h5"
                            >
                                Compensation:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '12px', sm: '16px' }
                                }}
                            >{selectedCareer?.salary}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <CareerApplicationForm />
                </Grid>
            </Grid>
        )
    }

    const Roles = () => {
        return (
            <div>

                <Divider sx={{ borderBottomWidth: 0.3, mb: 1, bgcolor: 'black' }} />
                <Grid container height={'100vh'} spacing={1} alignItems={'left'} textAlign={'center'}>
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
                <Box paddingY={{ xs: 5, sm: 5 }} paddingX={{ xs: 5, sm: 10 }}>
                    <Filters />
                    <Box display={'flex'} flexDirection={'row'} gap={1} py={2}>
                        <TextField defaultValue={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='enter role' size='small' label="search roles" />
                        <IconButton className='button-software-grey' onClick={() => { handleSearch() }} size="xs" variant="plain" color="neutral">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Roles title={''} description={''} resp={''} department={''} />
                </Box>

            </div>
            <Footer />
        </div>
    )

}