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


const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [urlTitle, setUrlTitle] = useState(null);
    const [urlLink, setUrlLink] = useState(null);

    const { sendBlogData, handleClose, open } = props;

    const handleBlogSubmit = () => {
        let data = {
            name: name,
            description: description,
            image: selectedImage,
            urlTitle: urlTitle,
            urlLink: urlLink
        }
        sendBlogData(data);
        setName('');
        setDescription('');
        setSelectedImage(null);
        setUrlTitle('');
        setUrlLink('');
    }

    const handleBlogClose = () => {
        handleClose();
    }

    return (
        <Box>
            <div>
                <Box borderRadius={4}
                    sx={{
                        // px: { xs: 2, sm: 5 },
                        // py: { xs: 2, sm: 5 },
                        minHeight: '70vh',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}>
                    <Typography>Heading</Typography>
                    <Typography>Sub heading</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Your email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setUrlTitle(e.target.value)}
                    />
                    <Textarea
                        sx={{
                            mt: 1,
                            mb:3,
                            pb:7
                        }}
                        placeholder="message"
                        minRows={3}
                        variant="outlined"
                        size="md"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button className='button-pixel-black' variant='contained'>Let's get started</Button>
                </Box>
            </div>
        </Box>
    )
}

export default ContactForm;