export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar?: string;
}

export interface Call {
    id: string;
    timestamp: Date;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
}

export interface Dispatch {
    unitId: string;
    callId: string;
    timestamp: Date;
    status: 'dispatched' | 'responding' | 'completed';
}