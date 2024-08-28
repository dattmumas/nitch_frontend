// src/components/WorkspaceProjects.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import axios from 'axios';

const WorkspaceProjects = ({ workspaceId }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (workspaceId) {
            fetchProjects(workspaceId);
        }
    }, [workspaceId]);

    const fetchProjects = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/workspaces/projects/`);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <Box>
            <h2>Projects</h2>
            <List>
                {projects.map((project) => (
                    <ListItem key={project.id}>
                        <ListItemText primary={project.name} secondary={project.description} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default WorkspaceProjects;