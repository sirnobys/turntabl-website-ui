import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';

import BlogForm from "./forms/BlogForm";
import ContentCard from "./ContentCard";
import SnackbarNotification from "./SnackbarNotification";

const Blogs = () => {
    const [open, setOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState(true)
    const [message, setMessage] = useState({text:'',type:''})

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchBlogs = () => {
            fetch(`${baseUrl}/api/v1/blogs`)
                .then(response => response.json())
                .then(data => {
                    setMessage({text:'loaded sucessfully',type:'success'})
                    console.log(data)
                    setBlogs(data.result)
                })
        }
        fetchBlogs();
    }, [load])
    
    const sendBlogData = (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('image', data.image);
        formData.append('link', JSON.stringify({ title: data.urlTitle, url: data.urlLink }));

        for (let entry of formData.entries()) {
            console.log(entry[0], entry[1]);
        }

        fetch(`${baseUrl}/api/v1/blogs`, {
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
                // Handle any errors
            });
            
        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    }
    
    const deleteBlog = (id) => {
        fetch(`${baseUrl}/api/v1/blogs/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend
            setLoad(!load)
        })
        .catch(error => {
                // Handle any errors
            });
    }

    return (
        <Box>
            {message?.text!==""?<SnackbarNotification message={message}/>:''}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography sx={{ pb: 5, fontSize: { xs: '35px', sm: '40px' } }}>Blogs</Typography>
                <div>
                    <Button
                        sx={{
                            fontSize: { xs: 8, sm: 12 },
                            color: '#b0b0ff',
                            borderColor: '#b0b0ff',
                            ":hover": {
                                color: '#6d6e71',
                                borderColor: '#6d6e71',
                            }
                        }}
                        variant="outlined"
                        onClick={handleClickOpen}
                        endIcon={<AddIcon />}>
                        New Blog
                    </Button>
                </div>
            </Box>
            <BlogForm open={open} sendBlogData={sendBlogData} handleClose={handleClose} />
            <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                {blogs.map((event, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <ContentCard
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            image={event.image}
                            description={event.description}
                            link={event.link}
                            deleteEvent={deleteBlog}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Blogs;