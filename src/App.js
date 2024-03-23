import React, { useState, useMemo , useCallback} from 'react';
import FlowerList from './components/FlowerList'
import {Input, Button, Icon} from 'semantic-ui-react';
import LoginForm from './components/LoginForm'
import axios from 'axios';

const apiRoot = axios.create({
  baseURL: '3.92.72.2:3000/'
});

const users = [{username: 'SJB', password: '1234'}, {username: 'YJB', password: '4321'}, ];
const flowers = [{sender: 'SJB', flowername: 'tulip', message: 'Have a nice day!'}, {sender: 'YJB', flowername: 'ivy', message: 'Glory day'}, ];

export const getUserApi = async (username) => {
  try {
    const { data } = await apiRoot.get(`/user`);
    return data;
  } catch (error) {
    throw error;
  }
};

function App() {
  return (
    <div className="App">
      <Button onClick = {() => {console.log(getUserApi('sjb'));}}></Button>
      <LoginForm users = {users}/>
    </div>
  );
}

export default App;