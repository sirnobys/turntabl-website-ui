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
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            message: message,
            email: email
        }

        setName('');
        setEmail('');
        setMessage('');
    }

  

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Box borderRadius={4}
                    sx={{
                        // px: { xs: 2, sm: 5 },
                        // py: { xs: 2, sm: 5 },
                        minHeight: '50vh',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}>
                    <Typography>Heading</Typography>
                    <Typography>Sub heading</Typography>
                    <TextField
                        sx={{
                            background: 'white'
                        }}
                        required
                        value={name}
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
                        sx={{
                            background: 'white'
                        }}
                        required
                        value={email}
                        // autoFocus
                        margin="dense"
                        id="email"
                        label="Your email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Textarea
                        sx={{
                            mt: 1,
                            mb: 3,
                            pb: 4
                        }}
                        required
                        value={message}
                        placeholder="Tell us a little about you, your organisation or your project "
                        minRows={3}
                        variant="outlined"
                        size="md"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button  type="submit" className='button-pixel-black' variant='contained'>Let's get started</Button>
                </Box>
            </form>
        </Box>
    )
}

export default ContactForm;