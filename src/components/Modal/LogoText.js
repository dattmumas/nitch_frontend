import React from 'react';
import { Typography } from '@mui/material';

function LogoText() {
    return (
        <Typography
            variant="h3" // Larger text size for bolder appearance
            fontWeight="999" // Extra bold weight to make it stand out more
            sx={{
                color: 'primary.main', // Secondary color for the logo
                WebkitTextStroke: '1px #59C3C3', // Black outline for the text
                margin: "0px 20px 0px 10px", // Adjusting margins for positioning
                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)', // Slightly stronger shadow for more depth
                letterSpacing: '3px', // Wider letter spacing for a more pronounced look
                textTransform: 'uppercase', // Makes the text all uppercase for a stronger logo presence
            }}
        >
            NITCH
        </Typography>
    );
}

export default LogoText;