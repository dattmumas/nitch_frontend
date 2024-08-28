import * as React from 'react';
import { ProjectContext } from './ProjectContext';
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useUser } from '../../Authorization/UserContext';
import { addProjectAPI } from '../../../api/api';
import formatDate from '../../Modal/DateFormatter';


const AddProject = () => {
    const { setSelectedProject } = React.useContext(ProjectContext);  // Get the setSelectedProject function from the workspace
    const { user } = useUser();  // Get the logged-in user from context
    const [open, setOpen] = React.useState(false);
    const [newProjectName, setNewProjectName] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [priority, setPriority] = React.useState('');
    const [projects, setProjects] = React.useState([]);


    const handleStartDateChange = (event) => {
        setStartDate(formatDate(event.target.value));
    };

    const handleEndDateChange = (event) => {
        setEndDate(formatDate(event.target.value));
    };

    // Get the selected workspace from localStorage
    const selectedWorkspace = JSON.parse(localStorage.getItem('selectedWorkspace'));
    const workspaceId = selectedWorkspace?.id;  // Ensure we have the workspace ID

    const handleAddProject = () => {
        if (!user) {
            console.error('User is not logged in');
            return;
        }

        const newProjectData = { 
            name: newProjectName, 
            owner: user.id,  // Automatically use the logged-in user's ID
            start_date: startDate, 
            end_date: endDate,
            status, 
            priority, 
            workspace: selectedWorkspace // Associate project with the selected workspace
        };

        const url = `http://127.0.0.1:8000/api/workspaces/1/projects/`;

        addProjectAPI(newProjectData, url)
            .then((response) => {
                console.log('Project added:', response.data);
                setProjects([...projects, response.data]);
                setSelectedProject(response.data); // Set the newly added project as the selected project
                handleClose();
            })
            .catch((error) => {
                console.error('Error adding project:', error);
            });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewProjectName('');
        setStartDate('');
        setEndDate('');
        setStatus('');
        setPriority('');
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} size="small">
                <AddIcon fontSize="small" />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the details for your new project.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Project Name"
                        type="text"
                        fullWidth
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Start Date"
                        type="date"
                        fullWidth
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        margin="dense"
                        label="End Date"
                        type="date"
                        fullWidth
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        margin="dense"
                        label="Status"
                        select
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="Not Started">Not Started</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="On Hold">On Hold</MenuItem>
                    </TextField>
                    <TextField
                        margin="dense"
                        label="Priority"
                        select
                        fullWidth
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddProject} color="secondary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddProject;