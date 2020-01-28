export function VoterReducer(state, action) {
    const initialState = state;
    const updatedState = state;

    // Hard coded values to work with until we have a backend to talk to
    const mockElections = [
        {
            title: "Mock Election 1",
            totalVotes: 45780,
            opens: "01/01/1990, 9:00AM",
            closes: "01/01/1990, 5:00PM",
            options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                      {key: 2, value: "Option C"}, {key: 3, value: "Option D"}],
            results: [{ key: 0, name: "Option A", value: 450}, {key: 1, name: "Option B", value: 869}, 
                      {key: 2, name: "Option C", value: 284}, {key: 3, name: "Option D", value: 75}]
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

    switch (action.type) {
        case 'attempLoadElections':
            updatedState.elections = mockElections;
            updatedState.electionsLoaded = true;
            console.log(updatedState);
            return updatedState;
        case "openBallot":
            updatedState.selectedElection = action.data;
            console.log(updatedState);
            return updatedState;
        default:
            return initialState;
    }
}