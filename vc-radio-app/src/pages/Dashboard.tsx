import React from 'react';
import DispatchUnit from '../components/DispatchUnit';
import CallLog from '../components/CallLog';
import RadioPanel from '../components/RadioPanel';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <DispatchUnit />
            <CallLog />
            <RadioPanel />
        </div>
    );
};

export default Dashboard;