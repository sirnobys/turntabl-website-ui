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


const CareerApplicationForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cv, setCv] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            firstName: firstName,
            lastName: lastName,
            cv: cv,
            email: email
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setCv(null);
    }



    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Box borderRadius={4}
                    sx={{
                        // px: { xs: 2, sm: 5 },
                        // py: { xs: 2, sm: 5 },
                        minHeight: '40vh',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}>
                    <Typography pt={6}>Apply Below</Typography>
                    <TextField
                        sx={{
                            background: 'white'
                        }}
                        required
                        value={firstName}
                        // autoFocus
                        size='small'
                        margin="dense"
                        id="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        sx={{
                            background: 'white'
                        }}
                        required
                        value={firstName}
                        // autoFocus
                        size='small'
                        margin="dense"
                        id="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <TextField
                        sx={{
                            background: 'white'
                        }}
                        required
                        value={email}
                        // autoFocus
                        size='small'
                        margin="dense"
                        id="email"
                        label="Your email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    Upload CV
                    <TextField
                        // autoFocus
                        margin="dense"
                        size='small'
                        id="image"
                        // label="Add Image"
                        placeholder='cv'
                        type="file"
                        onChange={(e) => setCv(e.target.files[0])}
                        fullWidth
                        variant="outlined"
                    />
                    <Button type="submit" className='button-pixel-black' variant='contained'>Let's get started</Button>
                </Box>
            </form>
        </Box>
    )
}

export default CareerApplicationForm;