import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';

import BlogForm from "./forms/BlogForm";
import ContentCard from "./ContentCard";
import SnackbarNotification from "./SnackbarNotification";
import LoadingProgress from "./LoadingProgress";

const Blogs = () => {
    const [open, setOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState(true)
    const [notificationMessage, setNotificationMessage] = useState({ text: '', type: '' });

    let baseUrl = 'https://a-team-api.apps.turntabl.io';

    useEffect(() => {

        const fetchBlogs = () => {
            fetch(`${baseUrl}/api/v1/blogs`)
                .then(response => response.json())
                .then(data => {
                    setLoad(false)
                    setNotificationMessage({ text: 'loaded successfully', type: 'success' })
                    setBlogs(data.result)
                }).catch((e)=>{
                    setLoad(false)
                })
        }
        fetchBlogs();
    }, [load])

    const sendBlogData = (data) => {
        setLoad(true)
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
                setNotificationMessage({ text: 'details submitted successfully', type: 'success' })
                // Handle the response from the backend
                setLoad(false)
            })
            .catch(error => {
                setLoad(false)
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
        setLoad(true)
        fetch(`${baseUrl}/api/v1/blogs/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                setNotificationMessage({ text: 'deleted successfully', type: 'success' })

                setLoad(false)
            })
            .catch(error => {
                setLoad(false)
                // Handle any errors
            });
    }

    return (
        <Box>
            {notificationMessage?.text !== "" ? <SnackbarNotification message={notificationMessage} /> : ''}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 2
                }}
            >
                <Typography sx={{ fontSize: { xs: '35px', sm: '40px' } }}>Blogs</Typography>
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
            {!load?blogs?.length!==0?<Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
                {blogs.map((event, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <ContentCard
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            image={event.image}
                            description={event.description}
                            link={event.link}
                            date={event.date_created}
                            deleteEvent={deleteBlog}
                        />
                    </Grid>
                ))}
            </Grid>:'No data':<LoadingProgress/>}
        </Box>
    )
}

export default Blogs;