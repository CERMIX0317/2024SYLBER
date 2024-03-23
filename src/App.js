import React, { useState, useMemo , useCallback} from 'react';
import LoginForm from './components/LoginForm'
import {Input} from 'semantic-ui-react';

const users = [{username: 'SJB', password: '1234'}, {username: 'YJB', password: '4321'}, ];

function App() {

  return (
    <div className="App">
      <LoginForm users = {users} />
    </div>
  );
}

export default App;