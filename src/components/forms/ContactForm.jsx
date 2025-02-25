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
import { links } from '../../constants';
import SnackbarNotification from '../SnackbarNotification';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgress } from '@mui/joy';


const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [load, setLoad] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState({ text: '', type: '' });


    const submitContactInfo = (formData) => {
        setLoad(true)
        setNotificationMessage({ text: 'details submitted successfully', type: 'success' })
        setLoad(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            message: message,
            email: email
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('company', company);
        formData.append('description', message);
        submitContactInfo(formData)
        setName('');
        setEmail('');
        setMessage('');
    }



    return (
        <Box>
            <form onSubmit={handleSubmit}>
                {!load && notificationMessage?.text !== "" ? <SnackbarNotification message={notificationMessage} /> : ''}
                <Box borderRadius={4}
                    sx={{
                        minHeight: '40vh',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}>
                    <Typography className='body-font'>Got ideas? We've got the skills</Typography>
                    <Typography className='body-font'>Let's team up!</Typography>
                    <TextField
                        sx={{
                            background: 'white'
                        }}
                        size='small'
                        required
                        value={name}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your name"
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
                        size='small'
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

                    <Button endIcon={load ? <CircularProgress color='neutral' size='sm' thickness={1} /> : <SendIcon />} type="submit" className={!(name && message && email) ? 'btn ' : 'btn button-pixel-black'} disabled={!(name && message && email)} variant='contained'>Let's get started</Button>
                </Box>
            </form>
        </Box>
    )
}

export default ContactForm;