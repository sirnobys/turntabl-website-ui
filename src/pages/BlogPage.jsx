import React, { useEffect, useState } from 'react';
import { ContentCard, Footer, Nav } from '../components';
import { Banner } from '../components/Banner';
import { images } from '../constants';
import { Grid } from '@mui/material';

import LoadingProgress from '../components/LoadingProgress';

export const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [load, setLoad] = useState(true)

    let baseUrl = 'https://a-team-api.apps.turntabl.io';

    useEffect(() => {
        window.scrollTo(0, 0)
        setBlogs([
            {id:1, name:'Mastering Machine Learning: A Practical Guide for Beginners', image:images.IMG_9308, description:'This blog post provides an introductory guide to machine learning for beginners in the software development field. It covers the fundamental concepts, popular algorithms, and practical tips for implementing machine learning models. The blog aims to make the complex topic of machine learning accessible to a wide audience and encourage developers to explore this exciting domain.', status:'', link:{title:'view', url:'https://medium.com/@turntabl.io'},date_created:'20-10-23' },
            {id:2, name:'The Art of Frontend Performance Optimization', image:images.service, description:'Article  In this blog post, the software company delves into the best practices and techniques for optimizing frontend performance in web applications. It covers topics such as reducing page load times, optimizing images, leveraging caching strategies, and using modern tools like Webpack and Babel. Developers and web enthusiasts will find valuable insights to enhance the user experience of their web projects.', status:'', link:{title:'view', url:'https://medium.com/@turntabl.io'},date_created:'20-10-23' },
            {id:2, name:'A Comprehensive Guide to Application Security', image:images.service_header, description: "Security is paramount in software development. This blog post offers a comprehensive guide to application security, covering topics like common security vulnerabilities (e.g., SQL injection, cross-site scripting), secure coding practices, and the importance of regular security audits. The blog aims to educate developers on safeguarding their applications against potential threats and data breaches.", status:'', link:{title:'view', url:'https://medium.com/@turntabl.io'},date_created:'20-10-23' },
        ])
        setLoad(false)
        // const fetchBlogs = () => {
        //     fetch(`${baseUrl}/api/v1/blogs`)
        //         .then(response => response.json())
        //         .then(data => {
        //             setLoad(!load)
        //             console.log(data)
        //             setBlogs(data.result)
        //         })
        // }
        // fetchBlogs();
    }, [])


    const intro = () => <span>Thoughts and ideas around the things that actually matter</span>
    return (
        <div id='page-container'>
            <Nav />
            <div id='content-wrap'>
                <Banner bgImage={images.career_alt} image={images.pc} page={'Blog'} intro={intro()} />
                {blogs.length == 0 && load && <LoadingProgress />}
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

                    {/* <Grid item xs={12} lg={12} pt={6}>
                        <img width="200px" src={images.thumb} />
                    </Grid> */}
                    {/* <Grid item xs={12} lg={12}>
                        <Typography className='alt-header-font' sx={{ fontSize: { xs: '30px', sm: '60px', } }}>
                            Leading Global Talent<br />
                            to your software
                            solutions
                        </Typography>
                    </Grid> */}
                </Grid>
            </div>
            <Footer />
        </div>
    )

}