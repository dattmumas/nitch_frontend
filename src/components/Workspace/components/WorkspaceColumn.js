import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Box, CircularProgress, ListItemIcon, Collapse } from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../Authorization/constants';
import AddWorkspace from './AddWorkspace';
import ProjectList from '../../Projects/components/ProjectList';

const WorkspaceColumn = () => {
    const [workspaces, setWorkspaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedWorkspaceId, setExpandedWorkspaceId] = useState(null); // Track which workspace is expanded
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (!token) {
            navigate('/login');
            return;
        }

        axios.get('http://127.0.0.1:8000/api/workspaces/user_workspaces/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setWorkspaces(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching workspaces:', error);
                setLoading(false);
            });
    }, [navigate]);

    const handleSelectWorkspace = (workspaceId) => {
        localStorage.setItem('selectedWorkspace', JSON.stringify(workspaces));
        setExpandedWorkspaceId(expandedWorkspaceId === workspaceId ? null : workspaceId);
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box
            sx={{
                width: '250px',
                height: '100vh',
                backgroundColor: 'primary.main',
                overflowY: 'auto'
            }}
        >
            <List dense sx={{ padding: 0 }}>
                {workspaces.length > 0 ? (
                    workspaces.map(workspace => (
                        <div key={workspace.id}>
                            <ListItem 
                                button 
                                selected={expandedWorkspaceId === workspace.id}
                                onClick={() => handleSelectWorkspace(workspace.id)}
                                sx={{
                                    paddingY: '2px', // Thinner row height
                                    paddingX: '8px', // Adjust padding to bring icon closer to text
                                    '&.Mui-selected': {
                                        backgroundColor: 'lightgray',
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: '25px', // Reduce the space between icon and text
                                    }}
                                >
                                    {expandedWorkspaceId === workspace.id ? <ExpandMore /> : <ChevronRight />}
                                </ListItemIcon>
                                <ListItemText 
                                    primary={workspace.name} 
                                    primaryTypographyProps={{ fontSize: '0.75rem' }} // Small text size
                                />
                            </ListItem>
                            <Collapse in={expandedWorkspaceId === workspace.id} timeout="auto" unmountOnExit>
                                <Box sx={{ paddingLeft: '20px' }}> {/* Adjust padding for nested items */}
                                    <ProjectList workspaceId={workspace.id} />
                                </Box>
                            </Collapse>
                        </div>
                    ))
                ) : (
                    <ListItem disabled sx={{ paddingY: '4px', paddingX: '8px' }}>
                        <ListItemText primary="No Workspaces Available" />
                    </ListItem>
                )}
            </List>
            <Box sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <AddWorkspace />
            </Box>
        </Box>
    );
};

export default WorkspaceColumn;