import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import axios from 'axios';

const WorkspaceList = () => {
    const [workspaces, setWorkspaces] = useState([]);
    const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(null);
    const [open, setOpen] = useState(false);
    const [newWorkspaceName, setNewWorkspaceName] = useState('');

    useEffect(() => {
        fetchWorkspaces(); // Fetch existing workspaces when the component mounts
    }, []);

    const fetchWorkspaces = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/workspaces/workspaces/');
            setWorkspaces(response.data);
        } catch (error) {
            console.error('Error fetching workspaces:', error);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewWorkspaceName('');
    };

    const handleAddWorkspace = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/workspaces/workspaces/', {
                name: newWorkspaceName,
                description: '', // You can add a description field if needed
            }, {
                withCredentials: true,
            });
            setWorkspaces([...workspaces, response.data]);
            handleClose();
        } catch (error) {
            console.error('Error adding workspace:', error);
        }
    };

    const handleSelectWorkspace = (id) => {
        setSelectedWorkspaceId(id); // Set the selected workspace ID
        // Handle any additional logic when a workspace is selected
    };

    return (
        <Box display="flex">
            <Box width="250px">
                <Typography variant="h5">Workspaces</Typography>
                <List>
                    {workspaces.map((workspace) => (
                        <ListItem
                            button
                            key={workspace.id}
                            onClick={() => handleSelectWorkspace(workspace.id)}
                            selected={workspace.id === selectedWorkspaceId} // Highlight selected workspace
                        >
                            <ListItemText primary={workspace.name} />
                        </ListItem>
                    ))}
                </List>

                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Add Workspace
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add New Workspace</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the name for your new workspace.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Workspace Name"
                            type="text"
                            fullWidth
                            value={newWorkspaceName}
                            onChange={(e) => setNewWorkspaceName(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleAddWorkspace} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>

            <Box flexGrow={1} padding="16px">
                {selectedWorkspaceId ? (
                    <Typography variant="h6">
                        Projects for Workspace ID: {selectedWorkspaceId}
                    </Typography>
                ) : (
                    <Typography variant="h6">
                        Select a workspace to view its projects.
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default WorkspaceList;