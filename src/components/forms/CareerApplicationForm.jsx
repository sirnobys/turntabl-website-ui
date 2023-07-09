import React, { useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textarea from '@mui/joy/Textarea';
import { ArrowOutwardOutlined } from '@mui/icons-material';
import { validatePdf } from '../../shared_logic/Validators';


const CareerApplicationForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cv, setCv] = useState(null)
    const [error, setError] = useState('')
    const cvRef = useRef();

    const handleCv = (file) => {
        const { status, message } = validatePdf(file)
        if (!status) {
            setError(message)
        }
        else {
            setError("")
        }
    }

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
        cvRef.current.value = ""
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
                        value={lastName}
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
                        defaultValue={cv}
                        required
                        error={error}
                        helperText={error}
                        margin="dense"
                        size='small'
                        id="image"
                        ref={cvRef}
                        // label="Add Image"
                        placeholder='cv'
                        type="file"
                        onChange={(e) => handleCv(e.target.files[0])}
                        fullWidth
                        variant="outlined"
                    />
                    <Button disabled={error} type="submit" className={error ? 'btn' : 'btn button-pixel-black'} variant='contained' endIcon={<ArrowOutwardOutlined />}>Apply</Button>
                </Box>
            </form>
        </Box>
    )
}

export default CareerApplicationForm;