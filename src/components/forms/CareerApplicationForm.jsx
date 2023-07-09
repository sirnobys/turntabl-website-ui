import React, { useRef, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ArrowOutwardOutlined } from '@mui/icons-material';
import { validatePdf } from '../../shared_logic/Validators';
import { links } from '../../constants';


const CareerApplicationForm = ({careerId}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cv, setCv] = useState(null)
    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)

    const handleCv = (file) => {
        setCv(file)
        const { status, message } = validatePdf(file)
        if (!status) {
            setError(message)
        }
        else {
            setError("")
        }
    }

    const submitApplication = (formData) => {
        fetch(`${links.BASE_URL}/api/v1/career-applicants/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                console.log(data)
                setLoad(!load)
            })
            .catch(error => {
                setLoad(!load)
                // Handle any errors
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true)
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('cv', cv);
        formData.append('career_id', careerId);
        formData.append('email', email);

        submitApplication(formData)

        setFirstName('');
        setLastName('');
        setEmail('');
        // setCv(null);
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
                        required
                        error={error}
                        helperText={error}
                        margin="dense"
                        size='small'
                        id="image"
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