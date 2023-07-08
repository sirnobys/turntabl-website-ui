import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Button } from '@mui/material';
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
import { validateImage } from '../../shared_logic/Validators';


const EventForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [urlTitle, setUrlTitle] = useState(null);
    const [urlLink, setUrlLink] = useState(null);
    const [status, setStatus] = useState('current');

    const { sendEventData, handleClose, open } = props;

    const handleEventSubmit = () => {
        let data = {
            name: name,
            description: description,
            image: selectedImage,
            urlTitle: urlTitle,
            urlLink: urlLink,
            status: status
        }
        sendEventData(data);
        setName('');
        setDescription('');
        setSelectedImage(null);
        setUrlTitle('');
        setUrlLink('');
        setStatus('');
    }

    const handleEventClose = () => {
        handleClose();
    }

    const handleImage = (e) => {
        // validate image first
        let {status, message} = validateImage(e.target.files[0]);
        console.log(status, message)
        setSelectedImage(e.target.files[0])
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div>
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
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="image"
                                // label="Add Image"
                                type="file"
                                onChange={handleImage}
                                fullWidth
                                variant="outlined"
                            />
                            <FormControl>
                                <FormLabel sx={{ color: 'black' }}>Status</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
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
                                <Typography>Link</Typography>
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
                                        label="Title"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        onChange={(e) => setUrlTitle(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="link-url"
                                        label="Url"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        onChange={(e) => setUrlLink(e.target.value)}
                                    />
                                </Box>
                            </Box>
                            <Textarea
                                sx={{
                                    mt: 1
                                }}
                                placeholder="Event Description..."
                                minRows={3}
                                variant="outlined"
                                size="md"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            sx={{
                                color: '#b0b0ff',
                                ":hover": {
                                    color: '#6d6e71',
                                }
                            }}
                            onClick={handleEventClose}>Cancel</Button>
                        <Button
                            sx={{
                                color: '#b0b0ff',
                                ":hover": {
                                    color: '#6d6e71',
                                }
                            }} onClick={handleEventSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Box>
    )
}

export default EventForm;