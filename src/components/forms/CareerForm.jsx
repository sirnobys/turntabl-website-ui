import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textarea from '@mui/joy/Textarea';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/joy/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';


const CareerForm = (props) => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState([{ requirement: "" }]);
    const [responsibilities, setResponsibilities] = useState([{ responsibility: "" }]);
    const [technologies, setTechnologies] = useState([{ technology: "" }]);
    const [salary, setSalary] = useState('');

    const { sendCareerData, handleClose, open } = props;

    let handleReqChange = (i, e) => {
        let newFormValues = [...requirements];
        newFormValues[i][e.target.name] = e.target.value;
        setRequirements(newFormValues);
    }

    let handleRespChange = (i, e) => {
        let newFormValues = [...responsibilities];
        newFormValues[i][e.target.name] = e.target.value;
        setResponsibilities(newFormValues);
    }

    let handleTechChange = (i, e) => {
        let newFormValues = [...technologies];
        newFormValues[i][e.target.name] = e.target.value;
        setTechnologies(newFormValues);
    }

    let addReqFormFields = () => {
        setRequirements([...requirements, { requirement: "" }])
    }

    let addRespFormFields = () => {
        setResponsibilities([...responsibilities, { responsibility: "" }])
    }

    let addTechFormFields = () => {
        setTechnologies([...technologies, { technology: "" }])
    }

    let removeReqFormFields = (i) => {
        let newFormValues = [...requirements];
        newFormValues.splice(i, 1);
        setRequirements(newFormValues)
    }

    let removeRespFormFields = (i) => {
        let newFormValues = [...responsibilities];
        newFormValues.splice(i, 1);
        setResponsibilities(newFormValues)
    }

    let removeTechFormFields = (i) => {
        let newFormValues = [...technologies];
        newFormValues.splice(i, 1);
        setTechnologies(newFormValues)
    }

    const handleCareerSubmit = () => {
        let req = []
        let resp = []
        let tech = []

        requirements.map((r) => {
            req.push(r.requirement)
        })
        responsibilities.map((e) => {
            resp.push(e.responsibility)
        })
        technologies.map((v) => {
            tech.push(v.technology)
        })
        let data = {
            name: name,
            department: department,
            description: description,
            requirements: req,
            responsibilities: resp,
            technologies: tech,
            salary: salary
        }
        console.log(data)
        sendCareerData(data);
        setName('');
        setDepartment('');
        setDescription('');
        setRequirements([]);
        setResponsibilities([]);
        setTechnologies([]);
        setSalary('');
    }

    const handleCareerClose = () => {
        handleClose();
        setName('');
        setDepartment('');
        setDescription('');
        setRequirements([]);
        setResponsibilities([]);
        setTechnologies([]);
        setSalary('');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add New Career</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill in the details for new career
                        </DialogContentText>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Career Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="department"
                                label="Department"
                                type="text"
                                onChange={(e) => setDepartment(e.target.value)}
                                fullWidth
                                variant="outlined"
                            />
                            <Box>
                                <Typography>Requirements</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '5px',
                                        maxHeight: '300px',
                                        overflow: 'auto'
                                    }}
                                >
                                    {requirements.map((element, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '5px'
                                            }}
                                        >
                                            <TextField
                                                type="text"
                                                name='requirement'
                                                label="Requirement"
                                                value={element.requirement || ""}
                                                onChange={e => handleReqChange(index, e)}
                                                sx={{
                                                    width: { xs: '260px', sm: '500px' }
                                                }}
                                            />

                                            {
                                                index ?
                                                    <IconButton variant="plain" onClick={() => removeReqFormFields(index)}>
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    : null
                                            }
                                        </Box>
                                    ))}
                                    <div className="button-section">
                                        <IconButton variant="plain" onClick={() => addReqFormFields()}>
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>Responsibilities</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '5px',
                                        maxHeight: '300px',
                                        overflow: 'auto'
                                    }}
                                >
                                    {responsibilities.map((element, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '5px'
                                            }}
                                        >
                                            <TextField
                                                type="text"
                                                name='responsibility'
                                                label="Responsibility"
                                                value={element.responsibility || ""}
                                                onChange={e => handleRespChange(index, e)}
                                                sx={{
                                                    width: { xs: '260px', sm: '500px' }
                                                }}
                                            />

                                            {
                                                index ?
                                                    <IconButton variant="plain" onClick={() => removeRespFormFields(index)}>
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    : null
                                            }
                                        </Box>
                                    ))}
                                    <div className="button-section">
                                        <IconButton variant="plain" onClick={() => addRespFormFields()}>
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>Technologies</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '5px',
                                        maxHeight: '300px',
                                        overflow: 'auto'
                                    }}
                                >
                                    {technologies.map((element, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '5px'
                                            }}
                                        >
                                            <TextField
                                                type="text"
                                                name='technology'
                                                label="Technology"
                                                value={element.technology || ""}
                                                onChange={e => handleTechChange(index, e)}
                                                sx={{
                                                    width: { xs: '260px', sm: '500px' }
                                                }}
                                            />

                                            {
                                                index ?
                                                    <IconButton variant="plain" onClick={() => removeTechFormFields(index)}>
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    : null
                                            }
                                        </Box>
                                    ))}
                                    <div className="button-section">
                                        <IconButton variant="plain" onClick={() => addTechFormFields()}>
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                </Box>
                            </Box>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="salary"
                                label="Salary"
                                type="text"
                                onChange={(e) => setSalary(e.target.value)}
                                fullWidth
                                variant="outlined"
                            />
                            <Textarea
                                sx={{
                                    mt: 1
                                }}
                                placeholder="Event Description..."
                                minRows={3}
                                variant="outlined"
                                size="md"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCareerClose}>Cancel</Button>
                        <Button onClick={handleCareerSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Box>
    )
}

export default CareerForm;