import { Box, Typography } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import ContentCard from "./ContentCard";
import { Button, Grid } from '@mui/material';

import { images } from "../constants";

const Events = () => {
    let events = [
        { id: 1, name: 'event1', description: 'desc', image: images.citi, status: 'UPCOMING', links: [{ title: 'title1', link: 'url' }] },
        { id: 2, name: 'event2', description: 'desc', image: images.people, status: 'CURRENT', links: [{ title: 'title2', link: 'url' }] },
        { id: 3, name: 'event3', description: 'desc', image: images.IMG_9005, status: 'UPCOMING', links: [{ title: 'title3', link: 'url' }] },
        { id: 4, name: 'event3', description: 'desc', image: images.IMG_9005, status: 'UPCOMING', links: [{ title: 'title4', link: 'url' }] },
        { id: 5, name: 'event3', description: 'desc', image: images.IMG_9005, status: 'UPCOMING', links: [{ title: 'title5', link: 'url' }] },
    ]
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography sx={{ pb: 5, fontSize: { xs: '35px', sm: '40px' } }}>Events</Typography>
                <Button sx={{ fontSize: { xs: 8, sm: 12 }, backgroundColor: '#b0b0ff' }} variant="contained" endIcon={<AddIcon />}>New Event</Button>
            </Box>
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
                            links={event.links}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Events;