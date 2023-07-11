import React, { useEffect, useState } from 'react';
import { Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Button, Chip, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from 'react-router';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WorkIcon from '@mui/icons-material/Work';
import CareerApplicationForm from '../components/forms/CareerApplicationForm';
import { motion } from "framer-motion"
import LoadingProgress from '../components/LoadingProgress';

export const CareersPage = () => {
    const currentUrlParams = new URLSearchParams(window.location.search);
    const dep = currentUrlParams.get("department") ?? ""
    const view = currentUrlParams.get("view") ?? ""
    const filter = currentUrlParams.get("filter") ?? ""
    const [careers_, setCareers_] = useState([]);
    const [careers, setCareers] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [search, setSearch] = useState(filter);
    const [load, setLoad] = useState(false)
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
            filter = careers.filter(e =>
                [e.name.toLocaleLowerCase()].toLocaleString().includes(search.toLocaleLowerCase()) &&
                [e.department.toLocaleLowerCase()].toLocaleString().includes(department.toLocaleLowerCase().replace('all', ''))
            )
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
        window.scrollTo(0, 0)
        const fetchCareers = () => {
            setLoad(true)
            fetch(`${baseUrl}/api/v1/careers/`)
                .then(response => response.json())
                .then(data => {
                    setCareers(data.result)
                    setCareers_(data.result)
                    handleSearch(data.result)
                    setSelectedFromUrl(data.result)
                    setLoad(false)
                })
        }
        fetchCareers();
    }, [])

    const handleSelectedCareer = (career) => {
        currentUrlParams.set('view', career.name)
        setSelectedCareer(career)
        navigate('?' + currentUrlParams.toString())
    }

    const handleDepartmentSelection = (dep) => {
        const filter = careers_.filter(e =>
            [e.name.toLocaleLowerCase()].toLocaleString().includes(search.toLocaleLowerCase()) &&
            [e.department.toLocaleLowerCase()].toLocaleString().includes(dep.toLocaleLowerCase().replace('all', ''))
        )
        currentUrlParams.set('department', dep.toLocaleLowerCase());
        navigate('?' + currentUrlParams.toString())
        setDepartment(dep.toLocaleLowerCase());
        setCareers(filter)
    }
    const Filters = () => {
        return (
            <Grid container spacing={0} textAlign={'center'}>
                {departmentData.map((dep, idx) => (
                    <Grid key={idx} item xs={4} sm={2}>
                        <motion.div
                            onClick={() => { handleDepartmentSelection(dep.name); }}
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.7 }}
                        >
                            <Chip icon={<BusinessIcon className='text-pixel-black' />}
                                sx={{
                                    backgroundColor: dep.name.toLocaleLowerCase() === department.toLocaleLowerCase() ? "#b0b0ff" : '#fff',
                                    color: "black",
                                    border: dep.name.toLocaleLowerCase() === department.toLocaleLowerCase() ? "1px solid #b0b0ff" : "1px solid #b0b0ff"
                                }}
                                label={dep.name}
                                onClick={() => { handleDepartmentSelection(dep.name); }} />
                        </motion.div>
                    </Grid>))}
            </Grid>
        )
    }

    const RolePreview = () => {
        return (
            <Grid item xs={5} lg={4}>
                <Box sx={{
                    height: 600,
                    overflowY: 'scroll',
                    paddingX: 0,
                    py: 1
                }}>
                    {careers?.length !== 0 ? careers?.map((career, idx) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                        >
                            <Button key={idx}
                                sx={{
                                    border: selectedCareer?.id == career.id ? '2px solid #b0b0ff' : ''
                                }}
                                onClick={() => handleSelectedCareer(career)}>
                                <Box boxShadow={0} padding={1.2} py={2} >
                                    <Grid item xs={12} lg={12}>
                                        <Typography className="body-font text-pixel-black" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' } }}>{career.name}</Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        lg={12}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <Chip className='body-font' size='small' icon={<AccessTimeFilledIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={career.date_created.split(' ')[0]} />
                                        <Chip className='body-font' size='small' icon={<WorkIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'full time'} />
                                        <Chip className='body-font' size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={career.department} />
                                    </Grid>
                                </Box>
                            </Button>
                        </motion.div>
                    )) : 'No data to display'

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
            <Grid item xs={7} borderLeft={'solid 2px #b0b0ff'} textAlign={'center'} lg={8} height={600} px={4} sx={{ overflowY: 'scroll' }}>
                <Grid item xs={12} lg={12} py={1}>
                    <Typography className="alt-header-font text-inspiration" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', sm: '30px' } }}>{selectedCareer.name}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={12}
                    py={1}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Chip size='small' icon={<AccessTimeFilledIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={selectedCareer.date_created.split(' ')[0]} />
                    <Chip size='small' icon={<WorkIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={'full time'} />
                    <Chip size='small' icon={<BusinessIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={selectedCareer.department} />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography className="body-font" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        {selectedCareer.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Typography className="body-font" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        {selectedCareer.description}
                    </Typography>
                    <Box pt={4}>
                        <Typography
                            className='body-font'
                            sx={{
                                fontSize: { xs: '14px', sm: '16px' },
                                display: 'flex', justifyContent: 'flex-start',
                                fontWeight: 'bold'
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
                                        className='body-font'
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
                                className='body-font'
                                sx={{
                                    fontSize: { xs: '14px', sm: '16px' },
                                    display: 'flex', justifyContent: 'flex-start',
                                    fontWeight: 'bold'

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
                                            className='body-font'
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
                                className='body-font'
                                sx={{
                                    fontSize: { xs: '14px', sm: '16px' },
                                    fontWeight: 'bold'

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
                                        className='body-font'
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
                                className='body-font'
                                sx={{
                                    display: 'flex', justifyContent: 'flex-start',
                                    fontSize: { xs: '14px', sm: '16px' },
                                    fontWeight: 'bold'

                                }}
                                variant="h5"
                            >
                                Compensation:
                            </Typography>
                            <Typography
                                className='body-font'
                                sx={{
                                    fontSize: { xs: '12px', sm: '16px' }
                                }}
                            >{selectedCareer?.salary}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <CareerApplicationForm careerId={selectedCareer.id} />
                </Grid>
            </Grid>
        )
    }

    const Roles = () => {
        return (
            <div>

                <Divider sx={{ borderBottomWidth: 0.3, mb: 1, bgcolor: 'black' }} />

                {!load ? careers_?.length !== 0 ?
                    <Grid container spacing={1} alignItems={'left'} textAlign={'center'}>
                        <RolePreview />
                        <RoleDetails />
                    </Grid> : 'No data' : <LoadingProgress />}
            </div>
        )
    }

    const intro = () => <span>  Be part of our Mission! <br />We are looking for passionate people to join us on our mission</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.IMG_9005} image={images.pc} page={'Careers'} intro={intro()} />
                <Box paddingY={{ xs: 5, sm: 5 }} paddingX={{ xs: 5, sm: 10 }}>
                    <Filters />
                    <Box display={'flex'} flexDirection={'row'} gap={1} py={2}>
                        <TextField defaultValue={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='enter role' size='small' label="search roles" />
                        <IconButton className='text-inspiration' onClick={() => { handleSearch() }} size="xs" variant="plain" color="neutral">
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