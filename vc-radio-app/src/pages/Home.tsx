import React from 'react';
import { DispatchUnit } from '../components/DispatchUnit';
import { CallLog } from '../components/CallLog';
import { RadioPanel } from '../components/RadioPanel';
import { Login } from '../components/Login';

const Home: React.FC = () => {
    return (
        <div>
            <h1>VC Radio App</h1>
            <Login />
            <DispatchUnit />
            <CallLog />
            <RadioPanel />
        </div>
    );
};

export default Home;