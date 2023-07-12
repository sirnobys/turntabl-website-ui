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
import { validateImage } from '../../shared_logic/Validators';


const BlogForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [urlTitle, setUrlTitle] = useState(null);
    const [urlLink, setUrlLink] = useState(null);
    const [error,setError]= useState('')

    const { sendBlogData, handleClose, open } = props;

    const handleImage = (e) => {
        // validate image first
        let { status, message } = validateImage(e.target.files[0]);
        if (!status) {
            setError(message)
        }
        else {
            setError("")
        }
        console.log(status, message)
        setSelectedImage(e.target.files[0])
    }
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
                    <DialogTitle>Add New Blog</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill in the details for new blog
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
                                label="Blog Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                error={error}
                                helperText={error}
                                margin="dense"
                                id="image"
                                // label="Add Image"
                                type="file"
                                onChange={(e) => handleImage(e)}
                                fullWidth
                                variant="outlined"
                            />
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
                                placeholder="Blog Description..."
                                minRows={3}
                                variant="outlined"
                                size="md"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleBlogClose}>Cancel</Button>
                        <Button disabled={!name || !description || !selectedImage || !urlTitle || !urlLink} onClick={handleBlogSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Box>
    )
}

export default BlogForm;