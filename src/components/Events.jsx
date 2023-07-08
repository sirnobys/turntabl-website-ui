import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';

import ContentCard from "./ContentCard";
import { EventForm } from "./forms";


const Events = () => {
    const [open, setOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [load, setLoad] = useState(true)

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchEvents = () => {
            fetch(`${baseUrl}/api/v1/events`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setEvents(data.result)
                })
        }
        fetchEvents();
    }, [load])

    const sendEventData = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('image', data.image);
        formData.append('link', JSON.stringify({ title: data.urlTitle, url: data.urlLink }));
        formData.append('status', data.status)

        fetch(`${baseUrl}/api/v1/events`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                setLoad(!load)
            })
            .catch(error => {
                // Handle any errors
            });

        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const deleteEvent = (id) => {
        fetch(`${baseUrl}/api/v1/events/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                setLoad(!load)
            })
            .catch(error => {
                // Handle any errors
            });
    }

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 2
                }}
            >
                <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Events</Typography>
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
                    New Event
                </Button>
            </Box>
            <EventForm open={open} sendEventData={sendEventData} handleClose={handleClose} />
            <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                {events.map((event, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <ContentCard
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            image={event.image}
                            description={event.description}
                            status={event.status}
                            link={event.link}
                            date={event.date_created}
                            deleteEvent={deleteEvent}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Events;