import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Box, Chip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';


const ContentCard = (props) => {
    const { id, name, description, image, status, link, date, deleteEvent, userView } = props;
    let imageUrl = null;

    const base64Image = btoa(image);

    imageUrl = `data:image/jpeg;base64,${base64Image}`;

    const handleDelete = () => {
        deleteEvent(id);
    }

    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={imageUrl}
                />
                <CardContent>
                    <Box>
                        Posted: <Chip size='small' icon={<AccessTimeFilledIcon />} sx={{ fontSize: { xs: '12px', } }} variant='outlined' label={date?.split(" ")[0]} />
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            height: '80px',
                            overflow: 'auto'
                        }}
                        variant="body2"
                        color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    {link ?
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                backgroundColor: '#b0b0ff',
                                ":hover": {
                                    backgroundColor: '#6d6e71',
                                }
                            }}>
                            <a style={{ textDecoration: 'none', color: '#fff' }} href={link?.url} target="_blank" rel="noreferrer">{link?.title}</a>
                        </Button> : ''}
                    {status ?
                        <Typography
                            hidden={userView}
                            sx={{
                                color: '#b0b0ff',

                            }}>{status}</Typography> : ''
                    }
                    <Box hidden={userView}>
                        <Tooltip title="Edit Content">
                            <IconButton
                                sx={{
                                    fontSize: { xs: 8, sm: 12 },
                                    color: '#b0b0ff',
                                    ":hover": {
                                        color: '#6d6e71',
                                    }
                                }}
                                variant="plain"
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Item">
                            <IconButton
                                sx={{
                                    fontSize: { xs: 8, sm: 12 },
                                    color: '#FF0000',
                                    ":hover": {
                                        color: '#6d6e71',
                                    }
                                }}
                                variant="plain"
                                onClick={() => handleDelete()}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>


                </CardActions>
            </Card>
        </motion.div >
    );
}

export default ContentCard;