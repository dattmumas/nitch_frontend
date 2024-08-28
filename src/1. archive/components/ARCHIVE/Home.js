import React from 'react';

function Home({ isLoggedIn, username }) {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {isLoggedIn ? (
                <h2>Logged in as: {username}</h2>
            ) : (
                <div>
                    <p>Please log in to access more features.</p>
                    <a href="/login">Go to Login Page</a>
                </div>
            )}
        </div>
    );
}

export default Home;