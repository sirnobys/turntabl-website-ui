import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"


const ContentCard = (props) => {
    const { id, name, description, image, status, link } = props;
    let imageUrl = null;

    if (!image.endsWith('.jpg')) {
        const base64Image = btoa(image);

        imageUrl = `data:image/jpeg;base64,${base64Image}`;
    }

    return (
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
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={imageUrl ? imageUrl : image}
                />
                <CardContent>
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
                        {description} Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: '#6d6e71',
                            ":hover": {
                                backgroundColor: '#b0b0ff',
                            }
                        }}>
                        <a style={{ textDecoration: 'none', color: '#fff' }} href={link?.url}>{link?.title}</a>
                    </Button>
                    <Typography
                        sx={{
                            color: '#b0b0ff',

                        }}>{status}</Typography>
                </CardActions>
            </Card>
        </motion.div>
    );
}

export default ContentCard;