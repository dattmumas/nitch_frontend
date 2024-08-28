// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             axios.get('http://127.0.0.1:8000/api/user/auth/user/', {
//                 headers: {
//                     'Authorization': `Token ${token}`,
//                 },
//             }).then(response => {
//                 setUser(response.data);
//             }).catch(error => {
//                 console.error('Error fetching user data:', error);
//             });
//         }
//     }, []);

//     const login = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/user/auth/google/login/');
//             if (response.data.authorization_url) {
//                 window.location.href = response.data.authorization_url;
//             } else {
//                 console.error("Authorization URL is missing.");
//             }
//         } catch (error) {
//             console.error("Login failed:", error);
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem('authToken');
//         setUser(null);
//         navigate('/login');
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);
// export default AuthContext;