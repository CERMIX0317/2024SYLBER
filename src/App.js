import React, { useState, useMemo , useCallback} from 'react';
import FlowerList from './components/FlowerList'
import {Input, Button, Icon} from 'semantic-ui-react';
import LoginForm from './components/LoginForm'

const users = [{username: 'SJB', password: '1234'}, {username: 'YJB', password: '4321'}, ];
const flowers = [{sender: 'SJB', flowername: 'tulip', message: 'Have a nice day!'}, {sender: 'YJB', flowername: 'ivy', message: 'Glory day'}, ];

function App() {

  return (
    <div className="App">
      <Button size='small' color='green'>
        <Icon name='download' />
        Download
      </Button>
      <FlowerList flowers = {flowers} />
    </div>
  );
}

export default App;