import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import IconButton from '@mui/joy/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { PreviewTable } from "./table";


const Preview = (props) => {
    const { career, updateCareer, deleteCareer } = props;
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

    const handleEdit = () => {
        updateCareer(career)
    }

    const handleDelete = () => {
        let deleteConfirmation = window.confirm('are you sure you want to delete?')
        if (deleteConfirmation) {
            deleteCareer(career)
        }
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
            {
                applicants.length > 0 ?
                    <PreviewTable data={applicants} headCells={headCells} tableName="Applicants" />
                    : ''
            }
            <Card
                sx={{
                    flexGrow: 1,
                    height: { xs: '455px', sm: '600px', md: '600px' },
                    border: '2px solid #6d6e71'
                }}>
                {Object.values(career).length > 0 ?
                    <>
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
                                {career?.name}
                            </Typography>
                            <Box
                                sx={{
                                    margin: 2
                                }}
                            >
                                <Tooltip title="View Applicants">
                                    <IconButton
                                        sx={{
                                            fontSize: { xs: 8, sm: 12 },
                                            color: '#b0b0ff',
                                            ":hover": {
                                                color: '#6d6e71',
                                            }
                                        }}
                                        variant="plain"
                                        onClick={getApplicants}>
                                        <RemoveRedEyeIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit Career">
                                    <IconButton
                                        sx={{
                                            fontSize: { xs: 8, sm: 12 },
                                            color: '#b0b0ff',
                                            ":hover": {
                                                color: '#6d6e71',
                                            }
                                        }}
                                        variant="plain"
                                        onClick={() => handleEdit()}>
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete Career">
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
                                    {career?.requirements?.map((requirement, idx) => (
                                        <Box
                                            component='li'
                                            sx={{
                                                marginLeft: 2
                                            }}
                                            key={idx}
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
                                    {career?.responsibilities?.map((responsibility, idx) => (
                                        <Box
                                            component='li'
                                            sx={{
                                                marginLeft: 2
                                            }}
                                            key={idx}
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
                                    {career?.technologies?.map((technology, idx) => (
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '12px', sm: '16px' }
                                            }}
                                            key={idx}
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
                                    Status:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px', sm: '16px' }
                                    }}
                                >{career ? career?.hidden ? 'Hidden' : 'Shown' : ''}
                                </Typography>
                            </Box>
                        </CardContent>
                    </>
                    : <Typography
                        sx={{
                            fontSize: { xs: '12px', sm: '16px' },
                            textAlign: 'center'
                        }}
                    >
                        Select To View
                    </Typography>}
            </Card>

        </motion.div >
    )
}

export default Preview;