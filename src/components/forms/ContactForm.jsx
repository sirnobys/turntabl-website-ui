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


const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [load, setLoad] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState({text:'',type:''});


    const submitContactInfo = (formData) => {
        fetch(`${links.BASE_URL}/api/v1/contact/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                console.log(data)
                setNotificationMessage({text:'details submitted successfully',type:'success'})
                setLoad(!load)
            })
            .catch(error => {
                setLoad(!load)
                // Handle any errors
            });
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
            {notificationMessage?.text!==""?<SnackbarNotification message={notificationMessage}/>:''}
                <Box borderRadius={4}
                    sx={{
                        // px: { xs: 2, sm: 5 },
                        // py: { xs: 2, sm: 5 },
                        minHeight: '40vh',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}>
                    <Typography>Got ideas? We've got the skills</Typography>
                    <Typography>Let's team up!</Typography>
                    <TextField
                        sx={{
                            background: 'white'
                        }}
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
                    {/* <Button disabled={error} type="submit" className={error ? 'btn' : 'btn button-pixel-black'} variant='contained' endIcon={<ArrowOutwardOutlined />}>Apply</Button> */}

                    <Button type="submit" className={!(name && message && email) ? 'btn' : 'btn button-pixel-black'} disabled={!(name && message && email)}  variant='contained'>Let's get started</Button>
                </Box>
            </form>
        </Box>
    )
}

export default ContactForm;