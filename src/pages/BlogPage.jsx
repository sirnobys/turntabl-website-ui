import React, { useEffect, useState } from 'react';
import { ContentCard, Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Grid, Typography } from '@mui/material';
import CoreValues from '../components/CoreValues';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Team from '../components/Team';
import LoadingProgress from '../components/LoadingProgress';

export const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState(true)

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {

        const fetchBlogs = () => {
            fetch(`${baseUrl}/api/v1/blogs`)
                .then(response => response.json())
                .then(data => {
                    setLoad(!load)
                    console.log(data)
                    setBlogs(data.result)
                })
        }
        fetchBlogs();
    }, [])
   

    const intro = () => <span>Whatever software your business requires,<br /> we are able to design and develop a bespoke solution tailored specifically to your needs.</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.career_alt} image={images.pc} page={'Blog'} intro={intro()} />
                {blogs.length==0 && load && <LoadingProgress/>}
                <Grid container spacing={0} alignItems={'center'}>
                    {blogs.map((blog) => (
                        <Grid item xs={12} sm={6} md={6} paddingTop={4}>
                            <div align="center">
                                <ContentCard
                                    key={blog.id}
                                    id={blog.id}
                                    name={blog.name}
                                    image={blog.image}
                                    description={blog.description}
                                    status={blog.status}
                                    link={blog.link}
                                    date={blog.date_created}
                                />
                            </div>
                        </Grid>
                    ))}

                    <Grid item xs={12} lg={12} pt={6}>
                        <img width="200px" src={images.thumb} />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Typography className='mondwest' sx={{ fontSize: { xs: '30px', sm: '60px', } }}>
                            Leading Global Talent<br />
                            to your software
                            solutions
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )

}