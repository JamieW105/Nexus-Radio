import { OAuth2Client } from 'google-auth-library';

const clientId = 'YOUR_DISCORD_CLIENT_ID';
const clientSecret = 'YOUR_DISCORD_CLIENT_SECRET';
const redirectUri = 'YOUR_REDIRECT_URI';

const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

export const getAuthUrl = () => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['identify', 'email'],
    });
    return authUrl;
};

export const getToken = async (code: string) => {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    return tokens;
};

export const getUserInfo = async () => {
    const response = await oauth2Client.request({
        url: 'https://discord.com/api/users/@me',
    });
    return response.data;
};