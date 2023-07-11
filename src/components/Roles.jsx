import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Typography, Box, Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { AdminForm } from "./forms";
import AddIcon from '@mui/icons-material/Add';
import SnackbarNotification from "./SnackbarNotification";
import LoadingProgress from "./LoadingProgress";


const Roles = () => {
    const [admin, setAdmin] = useState([]);
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState({ text: '', type: '' });

    let baseUrl = 'http://localhost:5000';

    const fetchAdmin = () => {
        fetch(`${baseUrl}/api/v1/authenticate`)
            .then(response => response.json())
            .then(data => {
                let rowData = []
                data.result.map((item) => {
                    rowData.push({
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        date_created: item.date_created
                    })
                })
                setAdmin(rowData)
                setLoad(false)
            }).catch(e => setLoad(false))
    }
    useEffect(() => {
        fetchAdmin();
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

    const createAdmin = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        fetch(`${baseUrl}/api/v1/authenticate`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setNotificationMessage({ text: 'submitted successfully', type: 'success' })
                // Handle the response from the backend
                fetchAdmin()
                setLoad(false)
            })
            .catch(error => {
                setLoad(false)
                // Handle any errors
            });

        setOpen(false)
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'date_created', headerName: 'Date', width: 130 }
    ];

    return (
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
            {notificationMessage?.text !== "" ? <SnackbarNotification message={notificationMessage} /> : ''}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 2
                }}
            >
                <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Admin Members</Typography>
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
                    onClick={() => setOpen(true)}
                    endIcon={<AddIcon />}>
                    New Admin
                </Button>
            </Box>
            <AdminForm open={open} handleClose={handleClose} sendData={createAdmin} />
            <Box>
                <DataGrid
                    rows={admin}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </Box>
            {!load ? admin?.length !== 0 ? "" : "No data" : <LoadingProgress />}
        </motion.div>
    )
}
export default Roles;