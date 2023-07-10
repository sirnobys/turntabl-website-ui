import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Tooltip } from "@mui/material";
import { motion } from "framer-motion"
import { PreviewTable } from "./table";
import SnackbarNotification from "./SnackbarNotification";
import LoadingProgress from "./LoadingProgress";
import IosShareIcon from '@mui/icons-material/IosShare';

const Newsletters = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [load, setLoad] = useState(true)
    const [notificationMessage, setNotificationMessage] = useState({ text: '', type: '' });

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchCareers = () => {
            fetch(`${baseUrl}/api/v1/newsletters/subscribers`)
                .then(response => response.json())
                .then(data => {
                    setNotificationMessage({ text: 'loaded successfully' })
                    setLoad(false)
                    setSubscribers(data.result)
                }).catch(e => setLoad(false))
        }
        fetchCareers();
    }, [])

    const headCells = [
        {
            id: 'id',
            numeric: false,
            disablePadding: true,
            label: 'Id',
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: true,
            label: 'Email',
        },
        {
            id: 'date_created',
            numeric: false,
            disablePadding: false,
            label: 'Date Created',
        }
    ];


    return (
        <div><motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
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
                <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Newsletters</Typography>
                <Tooltip title="Export Table To CSV">
                    <Button
                        sx={{
                            fontSize: { xs: 8, sm: 12 },
                            color: '#b0b0ff',
                            borderColor: '#b0b0ff',
                            ":hover": {
                                color: '#6d6e71',
                                borderColor: '#6d6e71',
                            },
                            mr: 2
                        }}
                        variant="outlined"
                        endIcon={<IosShareIcon />}>Export</Button>
                </Tooltip>
            </Box>
            {
                subscribers.length > 0 ?
                    <PreviewTable data={subscribers} headCells={headCells} tableName="Subscribers" />
                    : 'No Data'
            }
        </motion.div>
            {!load ? subscribers?.length !== 0 ? "" : "No data" : <LoadingProgress />}
            {notificationMessage?.text !== "" ? <SnackbarNotification message={notificationMessage} /> : ''}
        </div>
    )
}

export default Newsletters;