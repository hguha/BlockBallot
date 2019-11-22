import React, { useState } from 'react';

import ElectionList from '../Voter/ElectionList';
import ElectionBallot from '../Voter/ElectionBallot';

import '../../styles/Common/ColorScheme.css';
import '../../styles/Voter/VoterDashboard.css';
import '../../styles/Common/Transitions.css';

const mockElections = [
    {
        title: "Mock Election 1",
        totalVotes: 45780,
        opens: "01/01/1990, 9:00AM",
        closes: "01/01/1990, 5:00PM",
        categories: ["Group 0", "Group 1", "Group 2"],
        options: [{category: 0, key: 0, value: "Option A"}, {category: 0, key: 1, value: "Option B"}, 
                  {category: 0, key: 2, value: "Option C"}, {category: 0, key: 3, value: "Option D"},
                  {category: 1, key: 4, value: "Option E"}, {category: 1, key: 5, value: "Option F"}, 
                  {category: 1, key: 6, value: "Option G"}, {category: 1, key: 7, value: "Option H"},
                  {category: 2, key: 8, value: "Option I"}, {category: 2, key: 9, value: "Option J"}, 
                  {category: 2, key: 10, value: "Option K"}, {category: 2, key: 11, value: "Option L"}],
        results: [{category: 0, key: 12, name: "Option A", value: 450}, {category: 0, key: 13, name: "Option B", value: 23}, 
                  {category: 0, key: 14, name: "Option C", value: 284}, {category: 0, key: 15, name: "Option D", value: 376},
                  {category: 1, key: 16, name: "Option E", value: 948}, {category: 1, key: 17, name: "Option F", value: 46}, 
                  {category: 1, key: 18, name: "Option G", value: 726}, {category: 1, key: 19, name: "Option H", value: 878},
                  {category: 2, key: 20, name: "Option I", value: 86}, {category: 2, key: 21, name: "Option J", value: 154}, 
                  {category: 2, key: 22, name: "Option K", value: 74}, {category: 2, key: 23, name: "Option L", value: 978}]
    },
    {
        title: "Mock Election 2",
        totalVotes: 3869,
        opens: "01/01/1990, 9:00AM",
        closes: "01/02/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 3",
        totalVotes: 87901,
        opens: "01/03/1990, 9:00AM",
        closes: "01/03/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 4",
        totalVotes: 87901,
        opens: "01/01/1990, 9:00AM",
        closes: "01/03/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 5",
        totalVotes: 87901,
        opens: "01/03/1990, 9:00AM",
        closes: "01/05/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 6",
        totalVotes: 87901,
        opens: "01/07/1990, 9:00AM",
        closes: "01/11/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    }
];

function VoterDashboard() {
    const [elections, setElections] = useState([]);
    const [electionsLoaded, setElectionsLoaded] = useState(false);
    const [isLoadingElections, setIsLoadingElections] = useState(false);
    const [selectedElection, setSelectedElection] = useState(null);


    if (!electionsLoaded) {
        setIsLoadingElections(true);
        setElections(mockElections);
        setIsLoadingElections(false);
        setElectionsLoaded(true);
    }


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
