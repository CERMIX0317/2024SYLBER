import axios from 'axios';

const baseUrl = "3.92.72.2:3000"

export const getUserApi = async (username) => {
    try {
      const { data } = axios.get(`http://${baseUrl}/user/sjb`);
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };