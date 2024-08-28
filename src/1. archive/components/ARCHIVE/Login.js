import React from 'react';

function Login() {
    const handleGoogleLogin = () => {
        // Redirect to the Django backend's Google OAuth URL
        window.location.href = 'http://127.0.0.1:8000/accounts/google/login/';
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}

export default Login;