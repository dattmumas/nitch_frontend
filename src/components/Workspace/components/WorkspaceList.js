import React, { useState } from 'react';
import { List } from '@mui/material';
import WorkspaceItem from './WorkspaceItem';

const WorkspaceList = ({ workspaces }) => {
    const [expandedWorkspace, setExpandedWorkspace] = useState(null);

    const handleToggleWorkspace = (workspace) => {
        if (expandedWorkspace === workspace.id) {
            setExpandedWorkspace(null); // Collapse if already expanded
        } else {
            setExpandedWorkspace(workspace.id); // Expand to show projects
        }
    };

    return (
        <List dense>
            {workspaces.map(workspace => (
                <WorkspaceItem 
                    key={workspace.id}
                    workspace={workspace}
                    isExpanded={expandedWorkspace === workspace.id}
                    onToggle={handleToggleWorkspace}
                />
            ))}
        </List>
    );
};

export default WorkspaceList;