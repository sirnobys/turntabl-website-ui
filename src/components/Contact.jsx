import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Typography, Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const Contact = () => {
    const [contactList, setContactList] = useState([]);
    const [load,setLoad] = useState(true)
    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchCareers = () => {
            fetch(`${baseUrl}/api/v1/contact`)
                .then(response => response.json())
                .then(data => {
                    let rowData = []
                    data.result.map((item) => {
                        rowData.push({
                            id: item.id,
                            name: item.name,
                            email: item.email,
                            company: item.company,
                            description: item.description,
                            date_created: item.date_created
                        })
                    })
                    setLoad(false)
                    setContactList(rowData)
                }).catch(e=>setLoad(false))
        }
        fetchCareers();
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'company', headerName: 'Company', width: 130 },
        { field: 'description', headerName: 'Company', width: 130 },
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
            <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Contact</Typography>
            <Box>
                <DataGrid
                    rows={contactList}
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
        </motion.div>
    )
}
export default Contact