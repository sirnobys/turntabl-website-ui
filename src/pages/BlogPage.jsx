import React, { useEffect, useState } from 'react';
import { ContentCard, Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Box, Grid, Typography } from '@mui/material';

import LoadingProgress from '../components/LoadingProgress';

export const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState(true)

    let baseUrl = 'http://localhost:5000';

    useEffect(() => {
        window.scrollTo(0, 0)
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
                <Grid container spacing={0} alignItems={'left'}>
                    {blogs.map((blog) => (
                        <Grid px={3} item xs={12} sm={6} md={3} paddingTop={4}>
                            <div align="center">
                                <ContentCard
                                    key={blog.id}
                                    id={blog.id}
                                    name={blog.name}
                                    image={blog.image}
                                    description={blog.description}
                                    status={blog.status}
                                    link={blog.link}
                                    userView={true}
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