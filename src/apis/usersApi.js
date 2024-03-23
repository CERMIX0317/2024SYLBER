import axios from 'axios';

const baseUrl = "3.92.72.2:3000"

export const getUserApi = async (username) => {
    try {
      const { data } = axios.get(`http://${baseUrl}/user/sjb`).catch((error) => {
        console.log('1');  
        console.log(error);
        
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      console.log('1');
      throw error;
    }
  };