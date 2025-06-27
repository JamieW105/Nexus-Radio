// Discord OAuth2 authentication utility (no Google OAuth2)

const clientId = '1387992143607627817';
const clientSecret = 'YOUR_DISCORD_CLIENT_SECRET'; // Replace with your actual Discord client secret
const redirectUri = 'https://jamiew105.github.io/Nexus-Radio/'; // Your actual redirect URI

const DISCORD_AUTH_URL = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=identify%20email%20guilds%20applications.commands.permissions.update`;

export const getAuthUrl = () => DISCORD_AUTH_URL;

export const getToken = async (code: string) => {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);

    const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
    });
    if (!response.ok) throw new Error('Failed to get token');
    return response.json();
};

export const getUserInfo = async (accessToken: string) => {
    const response = await fetch('https://discord.com/api/users/@me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) throw new Error('Failed to get user info');
    return response.json();
};