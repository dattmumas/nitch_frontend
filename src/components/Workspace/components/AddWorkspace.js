import React, { useState, useEffect } from "react";
import { IconButton, List, ListItem, ListItemText, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from "../../Authorization/constants";

const AddWorkspace = () => {
    const [workspaces, setWorkspaces] = useState([]);
    const [open, setOpen] = useState(false);
    const [newWorkspaceName, setNewWorkspaceName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            // If no token, redirect to login
            navigate('/login');
            return;
        }

        // Fetch the workspaces for the logged-in user
        axios.get('http://127.0.0.1:8000/api/workspaces/user_workspaces/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setWorkspaces(response.data);
            })
            .catch((error) => {
                console.error("Error fetching workspaces:", error);
                if (error.response && error.response.status === 401) {
                    // If unauthorized, redirect to login
                    navigate('/login');
                }
            });
    }, [navigate]);

    const handleAddWorkspace = () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            // If no token, redirect to login
            navigate('/login');
            return;
        }

        const newWorkspaceData = { name: newWorkspaceName, description: "" };
        axios.post('http://127.0.0.1:8000/api/workspaces/user_workspaces/', newWorkspaceData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                setWorkspaces([...workspaces, response.data]);
                handleClose(); // Close the dialog after adding
                window.location.reload(); // Refresh the page to show the new workspace
            })
            .catch((error) => {
                console.error("Error adding workspace:", error);
                if (error.response && error.response.status === 401) {
                    // If unauthorized, redirect to login
                    navigate('/login');
                }
            });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewWorkspaceName(""); // Reset the name field on close
    };

    return (
        <Box>
            <IconButton onClick={handleClickOpen}>
                <AddIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle fontWeight="bold" color="secondary">Add New Workspace</DialogTitle>
                <DialogContent>
                    <DialogContentText fontWeight="bold" color="secondary">
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
                    <Button onClick={handleAddWorkspace} color="secondary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AddWorkspace;