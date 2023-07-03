import React from "react";
import { Box, Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"

import { Preview } from ".";


const Careers = () => {
    return (
        // <Box
        //     sx={{
        //         display: 'flex',
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //         gap: '10px'
        //     }}
        // >
        <Grid container spacing={2} alignItems={'center'} paddingBottom={10}>
            <Grid item xs={12} sm={12} md={3}>
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Card sx={{ height: {xs: '250px', sm:'400px', md: '700px'} }}>
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemText>one</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>one</ListItemText>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </motion.div>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <Preview />
            </Grid>
        </Grid>
        // </Box>
    )
}

export default Careers;