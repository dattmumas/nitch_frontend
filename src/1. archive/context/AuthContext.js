// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('authToken');  // Retrieve token from localStorage
//         if (token) {
//             // Optionally, verify the token with the backend or Google
//             axios.get('http://127.0.0.1:8000/api/user/auth/user/', {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                 }
//             })
//             .then(response => {
//                 setUser(response.data);  // Set user if token is valid
//             })
//             .catch(error => {
//                 console.error('Failed to authenticate token:', error);
//                 setUser(null);
//             });
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export { AuthContext };  // Export AuthContext itself

// export default AuthContext;