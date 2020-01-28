import React, { useState, useEffect } from 'react';

import ElectionList from '../Voter/ElectionList';
import ElectionBallot from '../Voter/ElectionBallot';
import { getElections } from "../../services/VoterService";

import '../../styles/Common/ColorScheme.css';
import '../../styles/Voter/VoterDashboard.css';
import '../../styles/Common/Transitions.css';

function VoterDashboard() {
    const [elections, setElections] = useState([]);
    const [isLoadingElections, setIsLoadingElections] = useState(false);
    const [selectedElection, setSelectedElection] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoadingElections(true);
            const response = await getElections();
            console.log(response);
            setIsLoadingElections(false);
            setElections(response);
        }

        fetchData();
    }, []);

    function handleElectionClick(election) {
        setSelectedElection(election);
    }

    function renderContents() {
        if (selectedElection) {
            return (
                <ElectionBallot
                    election={selectedElection}
                    onClose={() => setSelectedElection(null) }
                    show={true}
                />
            );
        } 
        return (
            <ElectionList
                isLoading={isLoadingElections}
                elections={elections} 
                onElectionClick={(election) => handleElectionClick(election)} 
            />
        );
    }

    return (
        <div className="voter-dashboard-container">
            {renderContents()}
        </div>
    );
}

export default VoterDashboard;
