import axios from 'axios';

const baseUrl = "http://3.92.72.2:3000"
const apiUrl = "/user"

export const getAllUserApi = async () => {
    const {data} = await axios.get(`${baseUrl}${apiUrl}`).catch((error) => {throw error;});
    return data;
};

export const getUserApi = async (username) => {
    const {data} = await axios.get(`${baseUrl}${apiUrl}/${username}`).catch((error) => {throw error;});
    return data;
};