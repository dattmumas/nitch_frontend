import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#EDEDED', // Anti-Flash White
            dark: '#1D2526', // Darker metallic color
            contrastText: '#fff', // White text
            violet: '#52489C', //
            blue: '#4062BB', //

        },
        secondary: {
            main: '#59C3C3', // Robin Egg Blue
        },
        error: {
            main: '#F45B69', // Bright Pink
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: 10,
    },
    },
});

export default theme;