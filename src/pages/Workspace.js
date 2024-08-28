import * as React from 'react';
import ColorTabs from '../components/Projects/components/ProjectList';
import { Box } from '@mui/system';
import AddWorkspace from '../components/Workspace/components/AddWorkspace';
import { Stack } from '@mui/material';
import ProjNavbar from '../components/Workspace/components/ProjNavbar';
import WorkspaceColumn from '../components/Workspace/components/WorkspaceColumn';



function Workspace() {
        return (
        <Box>
            <ProjNavbar />
            <WorkspaceColumn/>
            <ColorTabs />
        </Box>
        );
    }

export default Workspace;