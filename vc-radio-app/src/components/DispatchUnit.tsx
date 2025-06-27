import React, { useState } from 'react';

const DispatchUnit: React.FC = () => {
    const [unitId, setUnitId] = useState('');
    const [dispatchStatus, setDispatchStatus] = useState('');

    const handleDispatch = () => {
        // Logic to dispatch the unit
        if (unitId) {
            // Call API to dispatch the unit
            setDispatchStatus(`Unit ${unitId} dispatched successfully.`);
            setUnitId('');
        } else {
            setDispatchStatus('Please enter a valid unit ID.');
        }
    };

    return (
        <div>
            <h2>Dispatch Unit</h2>
            <input
                type="text"
                value={unitId}
                onChange={(e) => setUnitId(e.target.value)}
                placeholder="Enter Unit ID"
            />
            <button onClick={handleDispatch}>Dispatch</button>
            {dispatchStatus && <p>{dispatchStatus}</p>}
        </div>
    );
};

export default DispatchUnit;