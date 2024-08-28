// import React, { useContext, useEffect, useState } from 'react';
// import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';
// import AuthContext from '../context/AuthContext';
// import axios from 'axios';

// const Profile = () => {
//     const { user } = useContext(AuthContext);
//     const [profile, setProfile] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user) {
//             axios.get('http://127.0.0.1:8000/api/user/auth/user/')
//                 .then(response => {
//                     setProfile(response.data);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching profile data:", error);
//                     setLoading(false);
//                 });
//         }
//     }, [user]);

//     if (loading) {
//         return <CircularProgress />;
//     }

//     return (
//         <Container maxWidth="sm" sx={{ marginTop: '4rem' }}>
//             <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '10px' }}>
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Profile
//                 </Typography>
//                 <Box sx={{ marginBottom: '1rem' }}>
//                     <Typography variant="h6" component="h2">Username:</Typography>
//                     <Typography variant="body1">{profile.username}</Typography>
//                 </Box>
//                 <Box sx={{ marginBottom: '1rem' }}>
//                     <Typography variant="h6" component="h2">First Name:</Typography>
//                     <Typography variant="body1">{profile.first_name}</Typography>
//                 </Box>
//                 <Box sx={{ marginBottom: '1rem' }}>
//                     <Typography variant="h6" component="h2">Last Name:</Typography>
//                     <Typography variant="body1">{profile.last_name}</Typography>
//                 </Box>
//                 <Box sx={{ marginBottom: '1rem' }}>
//                     <Typography variant="h6" component="h2">Email:</Typography>
//                     <Typography variant="body1">{profile.email}</Typography>
//                 </Box>
//             </Paper>
//         </Container>
//     );
// };

// export default Profile;