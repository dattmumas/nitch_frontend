import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import axios from 'axios';

const ProjectsList = ({ workspaceId }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (workspaceId) {
            // Fetch the projects for the selected workspace
            const fetchProjects = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/workspaces/projects/`);
                    setProjects(response.data);
                } catch (error) {
                    console.error('Error fetching projects:', error);
                }
            };

            fetchProjects();
        }
    }, [workspaceId]);

    return (
        <Box sx={{ padding: '20px', flex: 1 }}>
            <h2>Projects</h2>
            <List component="nav">
                {projects.map((project) => (
                    <ListItem key={project.id}>
                        <ListItemText primary={project.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ProjectsList;