import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textarea from '@mui/joy/Textarea';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { images } from "../constants";
import ContentCard from "./ContentCard";


const Events = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('current');
    const [linksCounter, setLinksCounter] = useState(['1']);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLinksCounter([1])
    };

    const handleStatusChange = (event) => {
        setStatus((event.target).value);
    };

    const handleLinksCounter = (event) => {
        setLinksCounter([...linksCounter, event.target.value])
    }

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
                <div>
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
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add New Event</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Fill in the details for new event
                            </DialogContentText>
                            <Box
                                component="form"
                                sx={{

                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Event Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="image"
                                    // label="Add Image"
                                    type="file"
                                    fullWidth
                                    variant="outlined"
                                />
                                <FormControl>
                                    <FormLabel sx={{ color: 'black' }}>Status</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={status}
                                        onChange={handleStatusChange}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <FormControlLabel value="current" control={<Radio />} label="Current" />
                                        <FormControlLabel value="upcoming" control={<Radio />} label="Upcoming" />
                                    </RadioGroup>
                                </FormControl>
                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: '10px'
                                        }}
                                    >
                                        <Typography>Links</Typography>
                                        <div>
                                            <Button
                                                sx={{
                                                    backgroundColor: '#b0b0ff',
                                                    ":hover": {
                                                        backgroundColor: '#6d6e71',
                                                    }
                                                }}
                                                variant="contained" onClick={handleLinksCounter}>Add</Button>
                                        </div>
                                    </Box>
                                    {linksCounter.map((item) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '5px'
                                            }}
                                        >
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="link-name"
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                            />
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="link-url"
                                                label="Url"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                    ))}
                                </Box>
                                <Textarea
                                    sx={{
                                        mt: 1
                                    }}
                                    placeholder="Event Description..."
                                    minRows={3}
                                    variant="outlined"
                                    size="md"
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Submit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
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