import axios from 'axios';

export async function getElections() {
    return (await axios.get("/elections")).data;
}