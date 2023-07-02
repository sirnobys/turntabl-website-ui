import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ContentCard = (props) => {
    const { id, name, description, image, status, links } = props;
    console.log(id, name, description, image, status, links)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description} Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        backgroundColor: '#6d6e71',
                        ":hover": {
                            backgroundColor: '#b0b0ff',
                        }
                    }}>Share</Button>
                {links.map((link, idx) => (
                    <Button
                        variant="contained"
                        key={idx}
                        size="small"
                        sx={{
                            backgroundColor: '#6d6e71',
                            ":hover": {
                                backgroundColor: '#b0b0ff',
                            }
                        }}>
                        <a style={{ textDecoration: 'none', color: '#fff' }} href={link}>Learn More</a>
                    </Button>
                ))}
            </CardActions>
        </Card>
    );
}

export default ContentCard;