import React, { useState, useMemo , useCallback} from 'react';
import {getUserApi, getAllUserApi} from './apis/usersApi'
import axios from 'axios';
import {BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom'
import PageRouter from './components/PageRouter';
import GiveFlower from './components/GiveFlower';
import useUsers from './hooks/useUsers';


function App() {
  
  const [users, setUsers] = /*useUsers()*/ useState([]);
  
  useMemo(() => {
    getAllUserApi().then((res) => {
      setUsers([...res]);
    })  
    console.log(users);
  }, [])
  
  return (
    <PageRouter users = {users}></PageRouter>
  );
}
export default App;