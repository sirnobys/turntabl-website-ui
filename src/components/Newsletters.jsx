import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion"
import { PreviewTable } from "./table";

const Newsletters = () => {
    const [subscribers, setSubscribers] = useState([]);

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchCareers = () => {
            fetch(`${baseUrl}/api/v1/newsletters/subscribers`)
                .then(response => response.json())
                .then(data => {
                    setSubscribers(data.result)
                })
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
            <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Newsletters</Typography>
            {
                subscribers.length > 0 ?
                    <PreviewTable data={subscribers} headCells={headCells} tableName="Subscribers"/>
                    : ''
            }
        </motion.div>
    )
}

export default Newsletters;