import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import HomeNav from '../components/Home/HomeNav';

function App() {
    return (
        <Box>
            <HomeNav />
            <Box
                sx={{width: '50%',
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                }}
            >
                <Box 
                    sx={{
                        width: '100%', // Occupies the left half of the display
                        padding: '40px', // Adds padding around the text inside the box
                        margin: '0 auto', // Centers the box horizontally in the left half
                        marginTop: '10%', // Adds space at the top to position it nicely
                        backgroundColor: 'white', // White background
                        borderRadius: '8px', // Rounded corners for a modern look
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                    }}
                >
                    <Typography fontWeight="bold" variant="h4" color='secondary.main'>
                        Before you record,
                    </Typography>
                    <Typography fontWeight="bold" variant="h4" gutterBottom color='secondary.main'>
                        find your Nitch
                    </Typography>
                    <Typography fontWeight="regular" variant="body1">
                        Project management software designed for creators at all levels, Nitch will take you from inspo to idea to post. All in one platform.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default App;