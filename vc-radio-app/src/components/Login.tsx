import React, { useEffect } from 'react';
import { loginWithDiscord } from '../utils/discordAuth';

const Login: React.FC = () => {
    useEffect(() => {
        const handleLogin = async () => {
            const isLoggedIn = await checkLoginStatus();
            if (!isLoggedIn) {
                loginWithDiscord();
            }
        };

        handleLogin();
    }, []);

    const checkLoginStatus = async () => {
        // Implement logic to check if the user is already logged in
        // This could involve checking a token or making an API call
        return false; // Placeholder for actual implementation
    };

    return (
        <div>
            <h1>Login to VC Radio App</h1>
            <p>Please log in using your Discord account.</p>
        </div>
    );
};

export default Login;