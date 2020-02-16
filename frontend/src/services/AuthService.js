import axios from 'axios';

export async function authenticateVoter(fName, lName, dob) {
    return (await axios.get(`/authenticate/voter/fName/${fName}/lName/${lName}/dob/${dob}`)).data;
}