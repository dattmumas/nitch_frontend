import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import theme from './theme/ThemeProvider';
import { WorkspaceProvider } from './components/Workspace/components/WorkspaceContext';
import { ProjectProvider } from './components/Projects/components/ProjectContext';
import Home from './pages/Home';
import Workspace from './pages/Workspace';
import { ToastContainer } from 'react-toastify';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Login from './components/Authorization/Login';
import Register from './components/Authorization/Register';
import NotFound from './components/Authorization/NotFound';
import ProtectedRoute from './components/Authorization/ProtectedRoute';
import { UserProvider } from './components/Authorization/UserContext';

function Logout() {
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
}

function RegisterandLogout() { 
    localStorage.clear();
    return <Home/>;
}


function App() {
    return (
        <WorkspaceProvider>
        <UserProvider>
                <DndProvider backend={HTML5Backend}>
                <ToastContainer hideProgressBar={true} newestOnTop={true} />
                <ProjectProvider>
                    <ThemeProvider theme={theme}>
                        <Router>
                            <Routes>
                                <Route path='' element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path="/register" element={<RegisterandLogout />} />
                                <Route path="/projects" element={<Workspace />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Router>
                    </ThemeProvider>
                </ProjectProvider>
                </DndProvider>
        </UserProvider>
        </WorkspaceProvider>
    );
}

export default App;