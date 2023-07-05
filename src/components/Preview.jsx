import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import { PreviewTable } from "./table";


const Preview = (props) => {
    const { career } = props;
    const [applicants, setApplicants] = useState([]);
    const headCells = [
        {
            id: 'id',
            numeric: false,
            disablePadding: true,
            label: 'Id',
        },
        {
            id: 'first_name',
            numeric: false,
            disablePadding: true,
            label: 'First Name',
        },
        {
            id: 'last_name',
            numeric: false,
            disablePadding: false,
            label: 'Last Name',
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: false,
            label: 'Email',
        },
        {
            id: 'date_created',
            numeric: false,
            disablePadding: false,
            label: 'Submission Date',
        }
    ];
    let baseUrl = 'http://localhost:5000';

    const getApplicants = () => {
        fetch(`${baseUrl}/api/v1/career-applicants/career/${career.id}`)
            .then(response => response.json())
            .then(data => {
                let applicationList = []
                data.result.map((item) => {
                    applicationList.push({
                        id: item.id,
                        first_name: item.first_name,
                        last_name: item.last_name,
                        email: item.email,
                        // cv: e.cv,
                        date_created: item.date_created
                    })
                })
                setApplicants(applicationList)
            })
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
            <Card
                sx={{
                    flexGrow: 1,
                    height: { xs: '455px', sm: '600px', md: '600px' },
                    border: '2px solid #6d6e71'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '16px', sm: '30px' },
                            margin: 2
                        }}
                    >
                        {career.name}
                    </Typography>
                    <Box
                        sx={{
                            margin: 2
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
                                },
                                marginRight: 1
                            }}
                            onClick={getApplicants}
                        >View Applicants
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                fontSize: { xs: 8, sm: 12 },
                                backgroundColor: '#b0b0ff',
                                ":hover": {
                                    backgroundColor: '#6d6e71',
                                },
                                marginRight: 1
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
                    </Box>

                </Box>
                <CardContent
                    sx={{
                        height: { xs: '320px', sm: '465px', md: '470px' },
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <Typography sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            fontSize: { xs: '14px', sm: '16px' },
                        }}>Description</Typography>
                        <Box
                            component='p'
                            sx={{
                                mb: 1.5,
                                fontSize: { xs: '12px', sm: '14px' },
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}
                            color="text.secondary">
                            {career?.description}
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', sm: '16px' },
                                display: 'flex', justifyContent: 'flex-start',
                            }}
                        >
                            Requirements
                        </Typography>
                        <Box
                            component='ul'
                        >
                            {career?.requirements?.map((requirement) => (
                                <Box
                                    component='li'
                                    sx={{
                                        marginLeft: 2
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '12px', sm: '16px',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }
                                        }}>{requirement}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', sm: '16px' },
                                display: 'flex', justifyContent: 'flex-start'
                            }}
                        >
                            Responsibilities
                        </Typography>
                        <Box
                            component='ul'
                        >
                            {career?.responsibilities?.map((responsibility) => (
                                <Box
                                    component='li'
                                    sx={{
                                        marginLeft: 2
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '12px', sm: '16px',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }
                                        }}>{responsibility}</Typography>
                                </Box>
                            ))}
                        </Box>
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
                                fontSize: { xs: '14px', sm: '16px' },
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
                                display: 'flex', justifyContent: 'flex-start',
                                fontSize: { xs: '14px', sm: '16px' },
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
                                display: 'flex', justifyContent: 'flex-start',
                                fontSize: { xs: '14px', sm: '16px' }
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
            </Card>
            {
                applicants.length > 0 ?
                    <PreviewTable data={applicants} headCells={headCells} tableName="Applicants"/>
                    : ''
            }
        </motion.div >
    )
}

export default Preview;