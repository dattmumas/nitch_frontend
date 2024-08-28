import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, CircularProgress, Stack } from '@mui/material';
import AddProject from './AddProject';
import axios from 'axios';
import { ACCESS_TOKEN } from '../../Authorization/constants';
import { useNavigate as navigate } from 'react-router-dom';

const ProjectList = ({ workspaceId }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
            navigate('/login');
            return;
        }

        axios.get(`http://127.0.0.1:8000/api/workspaces/${workspaceId}/projects/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setProjectList(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
            setLoading(false);
        });
    }, [workspaceId]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <List component="div" disablePadding>
            {projectList.length > 0 ? (
                projectList.map(project => (
                    <ListItem 
                        key={project.id} 
                        button 
                        selected={selectedProject && selectedProject.id === project.id}
                        onClick={() => setSelectedProject(project)}
                        sx={{ pl: 4, maxHeight: '10px' }}
                    >
                        <ListItemText primary={project.name} primaryTypographyProps={{ fontSize: '0.75rem' }} />
                    </ListItem>
                ))
            ) : (
                <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="No Projects Available" primaryTypographyProps={{ fontSize: '0.75rem' }} />
                </ListItem>
            )}
                <ListItem sx={{ pl: 4 }}>
                    <Stack direction="row" alignItems='center'>
                        <ListItemText primaryTypographyProps={{ fontSize: '0.75rem' }}>Add Project</ListItemText>
                        <AddProject workspaceId={workspaceId}/>
                    </Stack>
                </ListItem>
        </List>
    );
};

export default ProjectList;