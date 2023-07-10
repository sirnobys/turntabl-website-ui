import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LabelIcon from '@mui/icons-material/Label';
import { motion } from "framer-motion"
import AddIcon from '@mui/icons-material/Add';

import { Preview } from ".";
import { CareerForm } from "./forms";
import SnackbarNotification from "./SnackbarNotification";
import LoadingProgress from "./LoadingProgress";


const Careers = () => {
    const [careers, setCareers] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState({});
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(true);
    const [updateData, setUpdateData] = useState({})
    const [notificationMessage, setNotificationMessage] = useState({ text: '', type: '' });

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchCareers = () => {
            fetch(`${baseUrl}/api/v1/careers`)
                .then(response => response.json())
                .then(data => {
                    setNotificationMessage({ text: 'loaded successfully' })
                    setCareers(data.result)
                    setLoad(false)
                    // setSelectedCareer(data.result[0])
                }).catch((e) => {
                    setLoad(false)
                })
        }
        fetchCareers();
    }, [load])

    const handleCareerSelection = (career) => {
        setSelectedCareer(career);
    }

    const sendCareerData = (data, id = null) => {
        if (id) {
            let careerUpdate = {
                id: data.id,
                name: data.name,
                department: data.department,
                description: data.description,
                requirements: data.requirements,
                responsibilities: data.responsibilities,
                technologies: data.technologies,
                salary: data.salary,
                hidden: data.hidden
            }

            fetch(`${baseUrl}/api/v1/careers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(careerUpdate),
            })
                .then(response => response.json())
                .then(data => {
                    setNotificationMessage({ text: 'details updated successfully', type: 'success' })
                    // Handle the response from the backend
                    setLoad(!load)
                })
                .catch(error => {
                    // Handle any errors
                });
        }
        else {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('department', data.department);
            formData.append('description', data.description);
            formData.append('requirements', JSON.stringify(data.requirements));
            formData.append('responsibilities', JSON.stringify(data.responsibilities));
            formData.append('technologies', JSON.stringify(data.technologies));
            formData.append('salary', data.salary);
            formData.append('hidden', data.hidden);

            fetch(`${baseUrl}/api/v1/careers`, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    setNotificationMessage({ text: 'details updated successfully', type: 'success' })

                    // Handle the response from the backend
                    setLoad(!load)
                })
                .catch(error => {
                    // Handle any errors
                });
        }

        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const updateCareer = () => {
        setUpdateData(selectedCareer)
        setOpen(true)
    }

    const deleteCareer = (career) => {
        fetch(`${baseUrl}/api/v1/careers/${career.id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                setNotificationMessage({ text: 'deleted successfully' })

                // Handle the response from the backend
                setLoad(!load)
            })
            .catch(error => {
                setLoad(false)
                // Handle any errors
            });
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px'
            }}
        >
            {notificationMessage?.text !== "" ? <SnackbarNotification message={notificationMessage} /> : ''}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    margin: 2
                }}
            >
                <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Careers</Typography>
                <Button
                    sx={{
                        fontSize: { xs: 8, sm: 12 },
                        color: '#b0b0ff',
                        borderColor: '#b0b0ff',
                        ":hover": {
                            color: '#6d6e71',
                            borderColor: '#6d6e71',
                        }
                    }}
                    variant="outlined"
                    onClick={handleClickOpen}
                    endIcon={<AddIcon />}>
                    New Career
                </Button>
            </Box>
            <CareerForm open={open} sendCareerData={sendCareerData} handleClose={handleClose} data={updateData} />
            {!load ? careers?.length !== 0 ? <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                <Grid item xs={12} sm={12} md={3}>
                    <Box sx={{
                        height: 400,
                        overflowY: 'scroll',
                        paddingX: 0,
                        py: 1
                    }}
                    >
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <List
                                sx={{
                                    height: { xs: '200px', sm: '350px', md: '600px' },
                                    overflow: 'auto'
                                }}
                            >
                                {careers.map((career, idx) => (
                                    <ListItem disablePadding key={idx}>
                                        <ListItemButton
                                            onClick={() => handleCareerSelection(career)}
                                        >
                                            <ListItemIcon>
                                                <LabelIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
                                            </ListItemIcon>
                                            <ListItemText primaryTypographyProps={{ fontSize: { xs: '12px', sm: '16px' } }} primary={career.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </motion.div>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Box sx={{
                        height: 400,
                        overflowY: 'scroll',
                        paddingX: 0,
                        py: 1
                    }}
                    >
                        <Preview career={selectedCareer} updateCareer={updateCareer} deleteCareer={deleteCareer} />
                    </Box>
                </Grid>
            </Grid> : 'No data' : <LoadingProgress />}
        </Box>
    )
}

export default Careers;