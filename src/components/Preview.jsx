import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import { CardHeader } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LabelIcon from '@mui/icons-material/Label';


const Preview = (props) => {
    const { career } = props;
    console.log(career)
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
            <Card
                sx={{
                    flexGrow: 1,
                    height: { xs: '455px', sm: '600px', md: '650px' },
                    border: '2px solid #6d6e71'
                }}>
                <CardHeader title={career.name} subheader={career.department} />
                <CardContent
                    sx={{
                        height: { xs: '320px', sm: '465px', md: '510px' },
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            mb: 1.5,
                            fontSize: { xs: '12px', sm: '14px' }
                        }}
                        color="text.secondary">
                        {career?.description}
                    </Typography>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: '16px', sm: '20px' }
                            }}
                        >
                            Requirements
                        </Typography>
                        <List>
                            {career?.requirements?.map((requirement) => (
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LabelIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ fontSize: { xs: '12px', sm: '16px' } }} primary={requirement} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: '16px', sm: '20px' }
                            }}
                        >
                            Responsibilities
                        </Typography>
                        <List>
                            {career?.responsibilities?.map((responsibility) => (
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LabelIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ fontSize: { xs: '12px', sm: '16px' } }} primary={responsibility} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '16px', sm: '20px' }
                            }}
                        >
                            Technologies:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            {career?.technologies?.map((technology) => (
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px', sm: '16px' }
                                    }}
                                >
                                    {technology}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <Typography
                            sx={{
                                display: 'flex',
                                fontSize: { xs: '16px', sm: '20px' }
                            }}
                            variant="h5"
                        >
                            Compensation:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '16px' }
                            }}
                        >{career?.salary}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <Typography
                            sx={{
                                display: 'flex',
                                fontSize: { xs: '16px', sm: '20px' }
                            }}
                            variant="h5"
                        >
                            Date Created:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '16px' }
                            }}
                        >{career?.date_created}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}
                >
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            fontSize: { xs: 8, sm: 12 },
                            backgroundColor: '#b0b0ff',
                            ":hover": {
                                backgroundColor: '#6d6e71',
                            }
                        }}
                    >Edit
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            fontSize: { xs: 8, sm: 12 },
                            backgroundColor: '#b0b0ff',
                            ":hover": {
                                backgroundColor: '#6d6e71',
                            }
                        }}
                    >Delete
                    </Button>
                </CardActions>
            </Card>
        </motion.div>
    )
}

export default Preview;