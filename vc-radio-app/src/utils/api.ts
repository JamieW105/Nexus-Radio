const API_BASE_URL = 'https://discord.com/api'; // Use Discord API base URL

// Types for function parameters
interface CallData {
    channelId: string;
    message: string;
}
interface UnitData {
    channelId: string;
    message: string;
}

// Log a call (example: create a channel or send a message)
export const logCall = async (callData: CallData, accessToken: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/channels/${callData.channelId}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bot ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: callData.message }),
        });
        if (!response.ok) throw new Error('Error logging call');
        return response.json();
    } catch (error) {
        console.error('Error logging call:', error);
        throw error;
    }
};

// Dispatch a unit (example: send a message to a dispatch channel)
export const dispatchUnit = async (unitData: UnitData, accessToken: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/channels/${unitData.channelId}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bot ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: unitData.message }),
        });
        if (!response.ok) throw new Error('Error dispatching unit');
        return response.json();
    } catch (error) {
        console.error('Error dispatching unit:', error);
        throw error;
    }
};

// Get call logs (example: fetch messages from a channel)
export const getCallLogs = async (channelId: string, accessToken: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/channels/${channelId}/messages`, {
            headers: {
                'Authorization': `Bot ${accessToken}`,
            },
        });
        if (!response.ok) throw new Error('Error fetching call logs');
        return response.json();
    } catch (error) {
        console.error('Error fetching call logs:', error);
        throw error;
    }
};