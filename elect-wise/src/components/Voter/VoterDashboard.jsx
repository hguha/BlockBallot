import React, { useReducer } from 'react';

import { VoterReducer } from '../../VoterReducer';
import ElectionList from '../Voter/ElectionList';

import '../../styles/ColorScheme.css';
import '../../styles/VoterDashboard.css';

function VoterDashboard() {
    const initialState = {
        electionsLoaded: false,
        elections: []
    };

    const [state, dispatch] = useReducer(VoterReducer, initialState);

    // Request election data
    // Simple approach until we have backend to talk to
    if (!state.electionsLoaded) {
        dispatch({ type: "attempLoadElections" });
    }

    return (
        <div className="voter-dashboard-container">
            <ElectionList isLoading={state.isLoadingElections} elections={state.elections} />
        </div>
    );
}

export default VoterDashboard;
