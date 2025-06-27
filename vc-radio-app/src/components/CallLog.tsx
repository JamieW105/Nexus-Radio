import React, { useEffect, useState } from 'react';
import { getCallLogs } from '../utils/api';
import { Call } from '../types';

const CallLog: React.FC = () => {
    const [callLogs, setCallLogs] = useState<Call[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCallLogs = async () => {
            try {
                const logs = await getCallLogs();
                setCallLogs(logs);
            } catch (error) {
                console.error('Error fetching call logs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCallLogs();
    }, []);

    if (loading) {
        return <div>Loading call logs...</div>;
    }

    return (
        <div>
            <h2>Call Log</h2>
            <ul>
                {callLogs.map((call) => (
                    <li key={call.id}>
                        <strong>{call.unit}</strong>: {call.message} - {new Date(call.timestamp).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CallLog;