import React, { useState } from 'react';
import { Box } from "@mui/material";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const AdminForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const { sendData, handleClose, open } = props;

    const handleAdminSubmit = () => {
        let data = {
            name: name,
            email: email
        }
        sendData(data);
        setName('');
        setEmail('');
    }

    const handleAdminClose = () => {
        handleClose();
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
                <Dialog open={open} onClose={handleAdminClose}>
                    <DialogTitle>Add New Admin</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill in the details for new Admin
                        </DialogContentText>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Admin Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAdminClose}>Cancel</Button>
                        <Button onClick={handleAdminSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Box>
    )
}

export default AdminForm;